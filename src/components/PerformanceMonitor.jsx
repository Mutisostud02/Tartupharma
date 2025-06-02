import React, { useState, useEffect } from "react";
import { cacheManager } from "../utils/cache";
import "./PerformanceMonitor.css";

const PerformanceMonitor = ({ show = false }) => {
  const [performanceData, setPerformanceData] = useState({});
  const [networkInfo, setNetworkInfo] = useState({});
  const [cacheStats, setCacheStats] = useState({
    memoryCache: 0,
    localStorage: 0,
    totalItems: 0,
  });

  useEffect(() => {
    if (!show) return;

    const updatePerformanceData = () => {
      // Get performance metrics
      const navigation = performance.getEntriesByType("navigation")[0];
      const paint = performance.getEntriesByType("paint");

      const data = {
        // Page load metrics
        domContentLoaded:
          navigation?.domContentLoadedEventEnd -
            navigation?.domContentLoadedEventStart || 0,
        loadComplete:
          navigation?.loadEventEnd - navigation?.loadEventStart || 0,

        // Paint metrics
        firstPaint: paint.find((p) => p.name === "first-paint")?.startTime || 0,
        firstContentfulPaint:
          paint.find((p) => p.name === "first-contentful-paint")?.startTime ||
          0,

        // Memory usage (if available)
        memoryUsage: performance.memory
          ? {
              used: Math.round(performance.memory.usedJSHeapSize / 1024 / 1024),
              total: Math.round(
                performance.memory.totalJSHeapSize / 1024 / 1024
              ),
              limit: Math.round(
                performance.memory.jsHeapSizeLimit / 1024 / 1024
              ),
            }
          : null,

        // Resource timing
        resourceCount: performance.getEntriesByType("resource").length,

        // Current timestamp
        timestamp: Date.now(),
      };

      setPerformanceData(data);
    };

    const updateNetworkInfo = () => {
      if ("connection" in navigator) {
        const connection = navigator.connection;
        setNetworkInfo({
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData,
        });
      }
    };

    const updateCacheStats = () => {
      setCacheStats(cacheManager.getStats());
    };

    // Initial update
    updatePerformanceData();
    updateNetworkInfo();
    updateCacheStats();

    // Update every 5 seconds
    const interval = setInterval(() => {
      updatePerformanceData();
      updateNetworkInfo();
      updateCacheStats();
    }, 5000);

    return () => clearInterval(interval);
  }, [show]);

  if (!show) return null;

  const formatTime = (time) => `${Math.round(time)}ms`;
  const formatSize = (size) => `${size}MB`;

  return (
    <div className="performance-monitor">
      <div className="monitor-header">
        <h3>🚀 Performance Monitor</h3>
        <div className="monitor-status">
          <span
            className={`status-dot ${
              performanceData.firstContentfulPaint < 1500
                ? "good"
                : performanceData.firstContentfulPaint < 3000
                ? "warning"
                : "poor"
            }`}
          ></span>
          Performance:{" "}
          {performanceData.firstContentfulPaint < 1500
            ? "Good"
            : performanceData.firstContentfulPaint < 3000
            ? "Fair"
            : "Poor"}
        </div>
      </div>

      <div className="monitor-content">
        {/* Page Load Metrics */}
        <div className="metric-group">
          <h4>📊 Page Load</h4>
          <div className="metrics">
            <div className="metric">
              <span className="metric-label">DOM Ready:</span>
              <span className="metric-value">
                {formatTime(performanceData.domContentLoaded)}
              </span>
            </div>
            <div className="metric">
              <span className="metric-label">Load Complete:</span>
              <span className="metric-value">
                {formatTime(performanceData.loadComplete)}
              </span>
            </div>
            <div className="metric">
              <span className="metric-label">First Paint:</span>
              <span className="metric-value">
                {formatTime(performanceData.firstPaint)}
              </span>
            </div>
            <div className="metric">
              <span className="metric-label">First Contentful Paint:</span>
              <span className="metric-value">
                {formatTime(performanceData.firstContentfulPaint)}
              </span>
            </div>
          </div>
        </div>

        {/* Cache Statistics */}
        <div className="metric-group">
          <h4>💾 Cache Stats</h4>
          <div className="metrics">
            <div className="metric">
              <span className="metric-label">Memory Cache:</span>
              <span className="metric-value">
                {cacheStats.memoryCache} items
              </span>
            </div>
            <div className="metric">
              <span className="metric-label">Local Storage:</span>
              <span className="metric-value">
                {cacheStats.localStorage} items
              </span>
            </div>
            <div className="metric">
              <span className="metric-label">Total Cached:</span>
              <span className="metric-value">
                {cacheStats.totalItems} items
              </span>
            </div>
            <div className="metric">
              <span className="metric-label">Resources:</span>
              <span className="metric-value">
                {performanceData.resourceCount} loaded
              </span>
            </div>
          </div>
        </div>

        {/* Memory Usage */}
        {performanceData.memoryUsage && (
          <div className="metric-group">
            <h4>🧠 Memory Usage</h4>
            <div className="metrics">
              <div className="metric">
                <span className="metric-label">Used:</span>
                <span className="metric-value">
                  {formatSize(performanceData.memoryUsage.used)}
                </span>
              </div>
              <div className="metric">
                <span className="metric-label">Total:</span>
                <span className="metric-value">
                  {formatSize(performanceData.memoryUsage.total)}
                </span>
              </div>
              <div className="metric">
                <span className="metric-label">Limit:</span>
                <span className="metric-value">
                  {formatSize(performanceData.memoryUsage.limit)}
                </span>
              </div>
              <div className="metric">
                <span className="metric-label">Usage:</span>
                <span className="metric-value">
                  {Math.round(
                    (performanceData.memoryUsage.used /
                      performanceData.memoryUsage.total) *
                      100
                  )}
                  %
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Network Information */}
        {Object.keys(networkInfo).length > 0 && (
          <div className="metric-group">
            <h4>🌐 Network</h4>
            <div className="metrics">
              <div className="metric">
                <span className="metric-label">Connection:</span>
                <span className="metric-value">
                  {networkInfo.effectiveType}
                </span>
              </div>
              <div className="metric">
                <span className="metric-label">Downlink:</span>
                <span className="metric-value">
                  {networkInfo.downlink} Mbps
                </span>
              </div>
              <div className="metric">
                <span className="metric-label">RTT:</span>
                <span className="metric-value">{networkInfo.rtt}ms</span>
              </div>
              <div className="metric">
                <span className="metric-label">Data Saver:</span>
                <span className="metric-value">
                  {networkInfo.saveData ? "On" : "Off"}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Service Worker Status */}
        <div className="metric-group">
          <h4>⚙️ Service Worker</h4>
          <div className="metrics">
            <div className="metric">
              <span className="metric-label">Status:</span>
              <span className="metric-value">
                {"serviceWorker" in navigator
                  ? navigator.serviceWorker.controller
                    ? "Active"
                    : "Registering"
                  : "Not Supported"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="monitor-footer">
        <small>
          Updated: {new Date(performanceData.timestamp).toLocaleTimeString()}
        </small>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
