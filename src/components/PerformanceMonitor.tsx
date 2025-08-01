'use client';

import { useEffect } from 'react';

export const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in development or when explicitly enabled
    if (process.env.NODE_ENV !== 'development' && !process.env.NEXT_PUBLIC_ENABLE_PERF_MONITOR) {
      return;
    }

    // Measure page load performance
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const metrics = {
            // Time to first byte
            ttfb: navigation.responseStart - navigation.requestStart,
            // DOM content loaded
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            // Page load complete
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            // Total page load time
            totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
          };

          console.log('🚀 Performance Metrics:', metrics);
          
          // Log to analytics if available
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'performance_metrics', {
              event_category: 'performance',
              event_label: 'page_load',
              value: Math.round(metrics.totalLoadTime),
              custom_map: {
                ttfb: metrics.ttfb,
                dom_content_loaded: metrics.domContentLoaded,
                load_complete: metrics.loadComplete,
              }
            });
          }
        }
      }
    };

    // Measure when page is fully loaded
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  return null; // This component doesn't render anything
}; 