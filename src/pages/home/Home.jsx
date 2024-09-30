import Navbar from "../../components/navbar/Navbar";
import SubHeader from "../../components/sub-header/SubHeader";
import OurCourses from "../../components/our-courses/OurCourses";
import WhyUs from "../../components/Why_Us/WhyUs";
import NewCourses from "../../components/new-courses/NewCourses";
import Plans from "../../components/plans/Plans";
function Home() {
  return (
    <>
      <Navbar />
      <SubHeader />
      <WhyUs />
      <OurCourses />
      <NewCourses />
      <Plans />
    </>
  );
}

export default Home;
