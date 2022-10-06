import { getJsonData } from '../api/index';
import Heads from '../components/Heads/Heads';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import PostCard from '../components/PostCard/PostCard';

export default function Home({ data }) {
  return (
    <div>
      <Heads />
      <Navigation />
      <PostCard content={data} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const data = await getJsonData();

  return {
    props: {
      data,
    },
  };
}
