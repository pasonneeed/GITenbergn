import Banner from './components/Banner';
import HomeRecruit from './components/HomeRecruit';
import Footer from '@common/Footer';
import HomeDreamer from './components/HomeDreamer';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mb-[160px] mt-[420px] px-[120px]">
        <HomeDreamer />
      </div>

      <div className="mb-20 px-[120px]">
        <HomeRecruit />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
