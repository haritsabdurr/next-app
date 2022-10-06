import useResponsive from '../../helpers/useResponsive';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

const Navigation = () => {
  const { isDesktop, isTablet, isOnlyMobile } = useResponsive();

  if (isDesktop) {
    return <NavDesktop />;
  } else if (isTablet) {
    return <NavDesktop />;
  } else if (isOnlyMobile) {
    return <NavMobile />;
  }
};

export default Navigation;
