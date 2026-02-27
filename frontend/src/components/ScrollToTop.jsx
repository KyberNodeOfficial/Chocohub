import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Scrolls window to top on every route change and refreshes GSAP ScrollTrigger.
 * Fixes: navigation leaving scroll position where user clicked from.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Let layout settle then refresh ScrollTrigger so animations match new scroll position
    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
