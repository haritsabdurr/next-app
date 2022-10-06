import useResponsive from '../../helpers/useResponsive';
import PostCardDesktop from './PostCardDesktop';
import PostCardMobile from './PostCardMobile';

const PostCard = ({ content }) => {
  const { isDesktop, isTablet, isOnlyMobile } = useResponsive();

  if (isDesktop) {
    return <PostCardDesktop contentDesktop={content} />;
  } else if (isTablet) {
    return <PostCardDesktop contentDesktop={content} />;
  } else if (isOnlyMobile) {
    return <PostCardMobile contentMobile={content} />;
  }
};

export default PostCard;
