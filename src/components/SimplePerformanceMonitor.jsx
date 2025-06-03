import React, { useState, useEffect } from "react";
import { cacheManager } from "../utils/cache";
import "./PerformanceMonitor.css";

const SimplePerformanceMonitor = ({ show = false }) => {
  const [stats, setStats] = useState({
    cacheItems: 0,
    resourceCount: 0,
    timestamp: Date.now()
  });

  useEffect(() => {
    if (!show) return;

    const updateStats = () => {
      try {
        const cacheStats = cacheManager.getStats();
        const resourceCount = performance.getEntriesByType("resource").length;
        
        setStats({
          cacheItems: cacheStats.totalItems || 0,
          resourceCount,
          timestamp: Date.now()
        });
      } catch (error) {
        console.warn('Performance stats update failed:', error);
      }
    };

    // Initial update
    updateStats();

    // Update every 5 seconds
    const interval = setInterval(updateStats, 5000);
    return () => clearInterval(interval);
  }, [show]);

  if (!show) return null;

  return (
    <div className="performance-monitor">
      <div className="monitor-header">
        <h3>🚀 Performance Monitor</h3>
        <div className="monitor-status">
          <span className="status-dot good"></span>
          Performance: Good
        </div>
      </div>

      <div className="monitor-content">
        <div className="metric-group">
          <h4>💾 Cache Stats</h4>
          <div className="metrics">
            <div className="metric">
              <span className="metric-label">Cached Items:</span>
              <span className="metric-value">{stats.cacheItems}</span>
            </div>
            <div className="metric">
              <span className="metric-label">Resources:</span>
              <span className="metric-value">{stats.resourceCount}</span>
            </div>
          </div>
        </div>

        <div className="metric-group">
          <h4>⚙️ Service Worker</h4>
          <div className="metrics">
            <div className="metric">
              <span className="metric-label">Status:</span>
              <span className="metric-value">
                {'serviceWorker' in navigator ? 
                  (navigator.serviceWorker.controller ? 'Active' : 'Registering') : 
                  'Not Supported'
                }
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="monitor-footer">
        <small>Updated: {new Date(stats.timestamp).toLocaleTimeString()}</small>
      </div>
    </div>
  );
};

export default SimplePerformanceMonitor;
