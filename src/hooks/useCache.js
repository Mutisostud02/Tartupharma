import React, { useState, useEffect, useCallback } from 'react';
import { cacheManager } from '../utils/cache';

// Custom hook for cached data fetching
export const useCache = (type, fetchFunction, params = {}, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fromCache, setFromCache] = useState(false);

  const fetchData = useCallback(async (forceRefresh = false) => {
    try {
      setLoading(true);
      setError(null);

      // Try cache first unless force refresh
      if (!forceRefresh) {
        const cached = cacheManager.get(type, params);
        if (cached) {
          setData(cached);
          setFromCache(true);
          setLoading(false);
          return cached;
        }
      }

      // Fetch fresh data
      setFromCache(false);
      const result = await fetchFunction(params);
      
      // Cache the result
      cacheManager.set(type, result, params);
      
      setData(result);
      setLoading(false);
      return result;
    } catch (err) {
      setError(err);
      setLoading(false);
      
      // Try to return cached data on error
      const cached = cacheManager.get(type, params);
      if (cached) {
        setData(cached);
        setFromCache(true);
        return cached;
      }
      
      throw err;
    }
  }, [type, fetchFunction, JSON.stringify(params)]);

  // Refresh function
  const refresh = useCallback(() => {
    return fetchData(true);
  }, [fetchData]);

  // Clear cache for this type
  const clearCache = useCallback(() => {
    cacheManager.delete(type, params);
    setFromCache(false);
  }, [type, JSON.stringify(params)]);

  useEffect(() => {
    fetchData();
  }, dependencies);

  return {
    data,
    loading,
    error,
    fromCache,
    refresh,
    clearCache,
    refetch: fetchData
  };
};

// Hook for cached search results
export const useCachedSearch = (searchTerm, searchFunction, debounceMs = 300) => {
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [searchTerm, debounceMs]);

  return useCache(
    'search',
    searchFunction,
    { term: debouncedTerm },
    [debouncedTerm]
  );
};

// Hook for image preloading with cache
export const useImagePreload = (imageSrcs) => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!imageSrcs || imageSrcs.length === 0) {
      setLoading(false);
      return;
    }

    const preloadImages = async () => {
      setLoading(true);
      const loaded = new Set();

      for (const src of imageSrcs) {
        try {
          // Check cache first
          const cached = cacheManager.get('images', { src });
          if (cached) {
            loaded.add(src);
            continue;
          }

          // Preload image
          await new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              cacheManager.set('images', { loaded: true }, { src });
              loaded.add(src);
              resolve();
            };
            img.onerror = reject;
            img.src = src;
          });
        } catch (error) {
          console.warn(`Failed to preload image: ${src}`, error);
        }
      }

      setLoadedImages(loaded);
      setLoading(false);
    };

    preloadImages();
  }, [JSON.stringify(imageSrcs)]);

  return { loadedImages, loading };
};

// Hook for cache statistics - Removed due to React hooks issues
// Use cacheManager.getStats() directly instead
