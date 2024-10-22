import SearchBox from '@/components/searchBox/SearchBox';
import Title from '@/components/title/Title';
import TopBar from '@/components/topBar/TopBar';

const Home: React.FC = () => {
  return (
    <>
      <TopBar></TopBar>
      <Title />
      <SearchBox />
    </>
  );
};

export default Home;
