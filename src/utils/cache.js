// Comprehensive caching utilities for improved performance

class CacheManager {
  constructor() {
    this.memoryCache = new Map();
    this.cacheConfig = {
      products: { ttl: 5 * 60 * 1000 }, // 5 minutes
      categories: { ttl: 10 * 60 * 1000 }, // 10 minutes
      manufacturers: { ttl: 15 * 60 * 1000 }, // 15 minutes
      images: { ttl: 60 * 60 * 1000 }, // 1 hour
      search: { ttl: 2 * 60 * 1000 }, // 2 minutes
    };
  }

  // Generate cache key
  generateKey(type, params = {}) {
    const paramString = Object.keys(params)
      .sort()
      .map(key => `${key}:${params[key]}`)
      .join('|');
    return `${type}${paramString ? `_${paramString}` : ''}`;
  }

  // Set cache with TTL
  set(type, data, params = {}) {
    const key = this.generateKey(type, params);
    const ttl = this.cacheConfig[type]?.ttl || 5 * 60 * 1000;
    const expiresAt = Date.now() + ttl;
    
    this.memoryCache.set(key, {
      data,
      expiresAt,
      createdAt: Date.now()
    });

    // Also store in localStorage for persistence
    try {
      localStorage.setItem(`cache_${key}`, JSON.stringify({
        data,
        expiresAt,
        createdAt: Date.now()
      }));
    } catch (e) {
      console.warn('localStorage cache failed:', e);
    }
  }

  // Get from cache
  get(type, params = {}) {
    const key = this.generateKey(type, params);
    
    // Try memory cache first
    let cached = this.memoryCache.get(key);
    
    // Fallback to localStorage
    if (!cached) {
      try {
        const stored = localStorage.getItem(`cache_${key}`);
        if (stored) {
          cached = JSON.parse(stored);
          // Restore to memory cache
          this.memoryCache.set(key, cached);
        }
      } catch (e) {
        console.warn('localStorage retrieval failed:', e);
      }
    }

    if (!cached) return null;

    // Check if expired
    if (Date.now() > cached.expiresAt) {
      this.delete(type, params);
      return null;
    }

    return cached.data;
  }

  // Delete from cache
  delete(type, params = {}) {
    const key = this.generateKey(type, params);
    this.memoryCache.delete(key);
    
    try {
      localStorage.removeItem(`cache_${key}`);
    } catch (e) {
      console.warn('localStorage deletion failed:', e);
    }
  }

  // Clear all cache
  clear() {
    this.memoryCache.clear();
    
    try {
      // Clear all cache items from localStorage
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith('cache_')) {
          localStorage.removeItem(key);
        }
      });
    } catch (e) {
      console.warn('localStorage clear failed:', e);
    }
  }

  // Get cache statistics
  getStats() {
    const memorySize = this.memoryCache.size;
    let localStorageSize = 0;
    
    try {
      const keys = Object.keys(localStorage);
      localStorageSize = keys.filter(key => key.startsWith('cache_')).length;
    } catch (e) {
      console.warn('localStorage stats failed:', e);
    }

    return {
      memoryCache: memorySize,
      localStorage: localStorageSize,
      totalItems: memorySize + localStorageSize
    };
  }

  // Cleanup expired items
  cleanup() {
    const now = Date.now();
    
    // Cleanup memory cache
    for (const [key, value] of this.memoryCache.entries()) {
      if (now > value.expiresAt) {
        this.memoryCache.delete(key);
      }
    }

    // Cleanup localStorage
    try {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith('cache_')) {
          try {
            const cached = JSON.parse(localStorage.getItem(key));
            if (now > cached.expiresAt) {
              localStorage.removeItem(key);
            }
          } catch (e) {
            // Remove corrupted cache entries
            localStorage.removeItem(key);
          }
        }
      });
    } catch (e) {
      console.warn('localStorage cleanup failed:', e);
    }
  }
}

// Create singleton instance
export const cacheManager = new CacheManager();

// Auto cleanup every 5 minutes
setInterval(() => {
  cacheManager.cleanup();
}, 5 * 60 * 1000);

// Cache-aware data fetching utilities
export const cachedFetch = async (url, options = {}) => {
  const cacheKey = `fetch_${url}_${JSON.stringify(options)}`;
  
  // Try cache first
  const cached = cacheManager.get('fetch', { url, options: JSON.stringify(options) });
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    
    // Cache successful responses
    if (response.ok) {
      cacheManager.set('fetch', data, { url, options: JSON.stringify(options) });
    }
    
    return data;
  } catch (error) {
    console.error('Fetch failed:', error);
    throw error;
  }
};

// Image preloading and caching
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    // Check if already cached
    const cached = cacheManager.get('images', { src });
    if (cached) {
      resolve(cached);
      return;
    }

    const img = new Image();
    img.onload = () => {
      // Cache the successful load
      cacheManager.set('images', { src, loaded: true }, { src });
      resolve({ src, loaded: true });
    };
    img.onerror = reject;
    img.src = src;
  });
};

// Batch image preloading
export const preloadImages = async (srcs) => {
  const promises = srcs.map(src => preloadImage(src).catch(() => null));
  return Promise.allSettled(promises);
};

export default cacheManager;
