import SearchBox from '@/components/searchBox/SearchBox';
import Title from '@/components/title/Title';
import TopBar from '@/components/topBar/TopBar';
import WhyChooseUsElements from '@/components/whyChooseUsElements/WhyChooseUsElements';
import WhyChooseUsElements2 from '@/components/whyChooseUsElements/WhyChooseUsElements2';
import WhyChooseUsParent from '@/components/whyChooseUsParent/WhyChooseUsParent';

const Home: React.FC = () => {
  return (
    <>
      <TopBar></TopBar>
      <Title />
      <SearchBox />

      <WhyChooseUsParent>
        <WhyChooseUsElements />
        <WhyChooseUsElements2 />
      </WhyChooseUsParent>
    </>
  );
};

export default Home;
