import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

function useResponsive() {
  const [isClient, setIsClient] = useState(false);

  const isOnlyMobile = useMediaQuery({
    maxWidth: '640px',
  });

  const isMobile = useMediaQuery({
    minWidth: '640px',
  });

  const isTablet = useMediaQuery({
    minWidth: '768px',
  });

  const isDesktop = useMediaQuery({
    minWidth: '1024px',
  });

  useEffect(() => {
    typeof window !== 'undefined' && setIsClient(true);
  }, []);

  return {
    isOnlyMobile: isClient ? isOnlyMobile : true,
    isTablet: isClient ? isTablet : false,
    isMobile: isClient ? isMobile : false,
    isDesktop: isClient ? isDesktop : false,
  };
}

export default useResponsive;
