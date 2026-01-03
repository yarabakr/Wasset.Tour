import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Custom hook to scroll to the top of the page on route change
const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the window
    window.scrollTo(0, 0);
  }, [pathname]); // Re-run effect when the pathname changes
};

export default useScrollToTop;
