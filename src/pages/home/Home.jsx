import Navbar from "../../components/navbar/Navbar";
import SubHeader from "../../components/sub-header/SubHeader";
import OurCourses from "../../components/our-courses/OurCourses";
import WhyUs from "../../components/Why_Us/WhyUs";
import NewCourses from "../../components/new-courses/NewCourses";
import Plans from "../../components/plans/Plans";
import HowDoIStart from "../../components/How Do I Start/HowDoIStart";
import JoinUse from "../../components/Join_Us/JoinUs";
import JoinOurPodcast from "../../components/JoinOurPodcast/JoinOurPodcast";
import Footer from "../../components/footer/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <SubHeader />
      <WhyUs />
      <OurCourses />
      <NewCourses />
      <Plans />
      <HowDoIStart />
      <JoinUse />
      <JoinOurPodcast />
      <Footer />
    </>
  );
}

export default Home;
