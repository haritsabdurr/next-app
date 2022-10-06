import useResponsive from '../../helpers/useResponsive';
import FooterDesktop from './FooterDesktop';
import FooterMobile from './FooterMobile';

const Footer = () => {
  const { isDesktop, isTablet, isOnlyMobile } = useResponsive();

  if (isDesktop) {
    return <FooterDesktop />;
  } else if (isTablet) {
    return <FooterDesktop />;
  } else if (isOnlyMobile) {
    return <FooterMobile />;
  }
};

export default Footer;
