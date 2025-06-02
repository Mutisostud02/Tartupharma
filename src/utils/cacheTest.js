// Cache testing utilities to demonstrate performance improvements

import { cacheManager } from './cache';
import { 
  getAllProducts, 
  getProductsByCategory, 
  searchProducts, 
  getManufacturers 
} from '../data/products';

export class CachePerformanceTester {
  constructor() {
    this.testResults = [];
  }

  // Measure execution time of a function
  async measureTime(name, fn) {
    const start = performance.now();
    const result = await fn();
    const end = performance.now();
    const duration = end - start;
    
    this.testResults.push({
      name,
      duration: Math.round(duration * 100) / 100, // Round to 2 decimal places
      timestamp: new Date().toISOString(),
      cached: false
    });
    
    return { result, duration };
  }

  // Test cache performance for different operations
  async runCacheTests() {
    console.log('🚀 Starting Cache Performance Tests...');
    
    // Clear cache to start fresh
    cacheManager.clear();
    
    // Test 1: First load (no cache)
    console.log('\n📊 Test 1: First Load (No Cache)');
    await this.measureTime('getAllProducts (first)', () => getAllProducts());
    await this.measureTime('getProductsByCategory (first)', () => getProductsByCategory('granulators-mills-compactors'));
    await this.measureTime('searchProducts (first)', () => searchProducts('KORSCH'));
    await this.measureTime('getManufacturers (first)', () => getManufacturers());
    
    // Test 2: Second load (with cache)
    console.log('\n⚡ Test 2: Second Load (With Cache)');
    await this.measureTime('getAllProducts (cached)', () => getAllProducts());
    await this.measureTime('getProductsByCategory (cached)', () => getProductsByCategory('granulators-mills-compactors'));
    await this.measureTime('searchProducts (cached)', () => searchProducts('KORSCH'));
    await this.measureTime('getManufacturers (cached)', () => getManufacturers());
    
    // Test 3: Different category (partial cache)
    console.log('\n🔄 Test 3: Different Category (Partial Cache)');
    await this.measureTime('getProductsByCategory (new)', () => getProductsByCategory('tablet-presses'));
    await this.measureTime('searchProducts (new)', () => searchProducts('FETTE'));
    
    // Test 4: Repeated operations (full cache)
    console.log('\n💾 Test 4: Repeated Operations (Full Cache)');
    await this.measureTime('getAllProducts (repeat)', () => getAllProducts());
    await this.measureTime('getProductsByCategory (repeat)', () => getProductsByCategory('tablet-presses'));
    await this.measureTime('searchProducts (repeat)', () => searchProducts('FETTE'));
    
    this.displayResults();
    return this.testResults;
  }

  // Display test results in a formatted way
  displayResults() {
    console.log('\n📈 Cache Performance Test Results:');
    console.log('=' .repeat(60));
    
    const grouped = this.groupResultsByOperation();
    
    Object.keys(grouped).forEach(operation => {
      const results = grouped[operation];
      console.log(`\n🔧 ${operation}:`);
      
      results.forEach((result, index) => {
        const cacheStatus = result.name.includes('cached') || result.name.includes('repeat') ? '💾' : '🌐';
        console.log(`  ${cacheStatus} ${result.name}: ${result.duration}ms`);
      });
      
      if (results.length > 1) {
        const firstTime = results[0].duration;
        const cachedTime = results.find(r => r.name.includes('cached') || r.name.includes('repeat'))?.duration;
        
        if (cachedTime) {
          const improvement = Math.round(((firstTime - cachedTime) / firstTime) * 100);
          const speedup = Math.round((firstTime / cachedTime) * 10) / 10;
          console.log(`  ⚡ Performance: ${improvement}% faster (${speedup}x speedup)`);
        }
      }
    });
    
    console.log('\n💡 Cache Statistics:');
    const stats = cacheManager.getStats();
    console.log(`  Memory Cache: ${stats.memoryCache} items`);
    console.log(`  Local Storage: ${stats.localStorage} items`);
    console.log(`  Total Cached: ${stats.totalItems} items`);
  }

  // Group results by operation type
  groupResultsByOperation() {
    const grouped = {};
    
    this.testResults.forEach(result => {
      const operation = result.name.split(' ')[0];
      if (!grouped[operation]) {
        grouped[operation] = [];
      }
      grouped[operation].push(result);
    });
    
    return grouped;
  }

  // Test cache hit rates
  async testCacheHitRates(iterations = 100) {
    console.log(`\n🎯 Testing Cache Hit Rates (${iterations} iterations)...`);
    
    const operations = [
      () => getAllProducts(),
      () => getProductsByCategory('granulators-mills-compactors'),
      () => searchProducts('KORSCH'),
      () => getManufacturers()
    ];
    
    let totalTime = 0;
    const start = performance.now();
    
    for (let i = 0; i < iterations; i++) {
      const operation = operations[i % operations.length];
      const opStart = performance.now();
      await operation();
      totalTime += performance.now() - opStart;
    }
    
    const end = performance.now();
    const averageTime = totalTime / iterations;
    
    console.log(`  Average operation time: ${Math.round(averageTime * 100) / 100}ms`);
    console.log(`  Total test time: ${Math.round(end - start)}ms`);
    console.log(`  Operations per second: ${Math.round(1000 / averageTime)}`);
    
    return {
      averageTime,
      totalTime: end - start,
      operationsPerSecond: 1000 / averageTime
    };
  }

  // Simulate real user behavior
  async simulateUserBehavior() {
    console.log('\n👤 Simulating Real User Behavior...');
    
    const userActions = [
      { action: 'Browse home page', fn: () => getAllProducts() },
      { action: 'View granulators category', fn: () => getProductsByCategory('granulators-mills-compactors') },
      { action: 'Search for KORSCH', fn: () => searchProducts('KORSCH') },
      { action: 'View tablet presses', fn: () => getProductsByCategory('tablet-presses') },
      { action: 'Search for FETTE', fn: () => searchProducts('FETTE') },
      { action: 'Back to granulators', fn: () => getProductsByCategory('granulators-mills-compactors') },
      { action: 'Search KORSCH again', fn: () => searchProducts('KORSCH') },
      { action: 'View manufacturers', fn: () => getManufacturers() },
    ];
    
    let totalTime = 0;
    
    for (const { action, fn } of userActions) {
      const { duration } = await this.measureTime(action, fn);
      totalTime += duration;
      console.log(`  ${action}: ${duration}ms`);
      
      // Simulate user thinking time
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    console.log(`\n  Total user session time: ${Math.round(totalTime)}ms`);
    console.log(`  Average action time: ${Math.round(totalTime / userActions.length)}ms`);
    
    return { totalTime, averageTime: totalTime / userActions.length };
  }

  // Export results for analysis
  exportResults() {
    return {
      testResults: this.testResults,
      cacheStats: cacheManager.getStats(),
      timestamp: new Date().toISOString()
    };
  }
}

// Convenience function to run all tests
export const runCachePerformanceTests = async () => {
  const tester = new CachePerformanceTester();
  
  await tester.runCacheTests();
  await tester.testCacheHitRates(50);
  await tester.simulateUserBehavior();
  
  return tester.exportResults();
};

// Add to window for easy testing in browser console
if (typeof window !== 'undefined') {
  window.cacheTest = {
    runTests: runCachePerformanceTests,
    CachePerformanceTester,
    cacheManager
  };
  
  console.log('💡 Cache testing utilities loaded! Try: window.cacheTest.runTests()');
}
