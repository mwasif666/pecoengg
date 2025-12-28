import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Spin } from "antd";

/**
 * Shows a fullscreen loader briefly on route change.
 * Uses requestAnimationFrame to hide it right after the new page paints.
 */
export default function RouteChangeLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Hide loader after next paint (ensures it appears even on fast routes)
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setLoading(false));
      return () => cancelAnimationFrame(raf2);
    });

    return () => cancelAnimationFrame(raf1);
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div className="route-loader">
      <Spin size="large" />
    </div>
  );
}
