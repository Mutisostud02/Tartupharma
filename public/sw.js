// Service Worker for Tartupharma - Advanced Caching Strategy

const CACHE_NAME = 'tartupharma-v1.0.0';
const STATIC_CACHE = 'tartupharma-static-v1.0.0';
const DYNAMIC_CACHE = 'tartupharma-dynamic-v1.0.0';
const IMAGE_CACHE = 'tartupharma-images-v1.0.0';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images/placeholder-machine.svg',
  '/images/logo.png',
  // Add other static assets as needed
];

// Cache strategies
const CACHE_STRATEGIES = {
  // Cache first, then network (for static assets)
  CACHE_FIRST: 'cache-first',
  // Network first, then cache (for dynamic content)
  NETWORK_FIRST: 'network-first',
  // Cache only (for offline-first assets)
  CACHE_ONLY: 'cache-only',
  // Network only (for real-time data)
  NETWORK_ONLY: 'network-only',
  // Stale while revalidate (for frequently updated content)
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate'
};

// Route patterns and their strategies
const ROUTE_STRATEGIES = [
  { pattern: /\.(js|css|woff2?|ttf|eot)$/, strategy: CACHE_STRATEGIES.CACHE_FIRST, cache: STATIC_CACHE },
  { pattern: /\.(png|jpg|jpeg|svg|gif|webp|ico)$/, strategy: CACHE_STRATEGIES.CACHE_FIRST, cache: IMAGE_CACHE },
  { pattern: /\/api\//, strategy: CACHE_STRATEGIES.NETWORK_FIRST, cache: DYNAMIC_CACHE },
  { pattern: /\/$/, strategy: CACHE_STRATEGIES.STALE_WHILE_REVALIDATE, cache: DYNAMIC_CACHE }
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Failed to cache static assets', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== IMAGE_CACHE) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }
  
  // Find matching strategy
  const route = ROUTE_STRATEGIES.find(route => route.pattern.test(url.pathname));
  
  if (route) {
    event.respondWith(handleRequest(request, route.strategy, route.cache));
  } else {
    // Default strategy for unmatched routes
    event.respondWith(handleRequest(request, CACHE_STRATEGIES.NETWORK_FIRST, DYNAMIC_CACHE));
  }
});

// Handle different caching strategies
async function handleRequest(request, strategy, cacheName) {
  const cache = await caches.open(cacheName);
  
  switch (strategy) {
    case CACHE_STRATEGIES.CACHE_FIRST:
      return cacheFirst(request, cache);
      
    case CACHE_STRATEGIES.NETWORK_FIRST:
      return networkFirst(request, cache);
      
    case CACHE_STRATEGIES.CACHE_ONLY:
      return cacheOnly(request, cache);
      
    case CACHE_STRATEGIES.NETWORK_ONLY:
      return networkOnly(request);
      
    case CACHE_STRATEGIES.STALE_WHILE_REVALIDATE:
      return staleWhileRevalidate(request, cache);
      
    default:
      return networkFirst(request, cache);
  }
}

// Cache first strategy
async function cacheFirst(request, cache) {
  try {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Cache first failed:', error);
    return new Response('Offline', { status: 503 });
  }
}

// Network first strategy
async function networkFirst(request, cache) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Network failed, trying cache:', error);
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('Offline', { status: 503 });
  }
}

// Cache only strategy
async function cacheOnly(request, cache) {
  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  return new Response('Not in cache', { status: 404 });
}

// Network only strategy
async function networkOnly(request) {
  return fetch(request);
}

// Stale while revalidate strategy
async function staleWhileRevalidate(request, cache) {
  const cachedResponse = await cache.match(request);
  
  // Always try to fetch fresh content in the background
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => {
    // Network failed, but we might have cache
    return null;
  });
  
  // Return cached version immediately if available
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // If no cache, wait for network
  return fetchPromise || new Response('Offline', { status: 503 });
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle any queued actions when back online
  console.log('Service Worker: Background sync triggered');
}

// Push notifications (for future use)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/images/logo.png',
      badge: '/images/logo.png',
      data: data.data
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});

console.log('Service Worker: Loaded');
