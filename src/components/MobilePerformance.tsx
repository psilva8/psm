'use client';

import React, { useEffect, useState, ReactNode } from 'react';

interface MobilePerformanceProps {
  children: ReactNode;
  fallback?: ReactNode;
  enableNetworkDetection?: boolean;
}

interface NetworkInfo {
  effectiveType: string;
  downlink: number;
  rtt: number;
}

const MobilePerformance: React.FC<MobilePerformanceProps> = ({
  children,
  fallback,
  enableNetworkDetection = true
}) => {
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent;
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileRegex.test(userAgent));
    };

    // Network detection
    const checkNetworkSpeed = () => {
      if (!enableNetworkDetection) return;

      // Check if Network Information API is available
      const connection = (navigator as any).connection || 
                        (navigator as any).mozConnection || 
                        (navigator as any).webkitConnection;

      if (connection) {
        const networkInfo: NetworkInfo = {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt
        };

        // Consider slow if effective type is 2g or 3g, or downlink is less than 1.5 Mbps
        const isSlow = networkInfo.effectiveType === '2g' || 
                      networkInfo.effectiveType === 'slow-2g' ||
                      (networkInfo.effectiveType === '3g' && networkInfo.downlink < 1.5);

        setIsSlowConnection(isSlow);

        // Listen for network changes
        connection.addEventListener('change', () => {
          const updatedIsSlow = connection.effectiveType === '2g' || 
                               connection.effectiveType === 'slow-2g' ||
                               (connection.effectiveType === '3g' && connection.downlink < 1.5);
          setIsSlowConnection(updatedIsSlow);
        });
      }
    };

    checkMobile();
    checkNetworkSpeed();

    // Simulate loading time based on connection
    const loadingTime = isSlowConnection ? 2000 : 1000;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadingTime);

    return () => {
      clearTimeout(timer);
    };
  }, [enableNetworkDetection, isSlowConnection]);

  // Show fallback for slow connections on mobile
  if (isLoading && isMobile && isSlowConnection && fallback) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[200px] p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
        <p className="text-gray-600 text-sm text-center">Optimizing for your connection...</p>
        {fallback}
      </div>
    );
  }

  // Show loading spinner for initial load
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className={`${isMobile ? 'mobile-optimized' : ''} ${isSlowConnection ? 'slow-connection' : ''}`}>
      {children}
    </div>
  );
};

export default MobilePerformance; 