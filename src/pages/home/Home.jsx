import Navbar from "../../components/navbar/Navbar"
import SubHeader from "../../components/sub-header/SubHeader"
import OurCourses from '../../components/our-courses/OurCourses'
import WhyUs from "../../components/Why_Us/WhyUs"
function Home(){
    return(
        <>
            <Navbar />
            <SubHeader />
            <WhyUs />
            <OurCourses />
            <div>
                amirreza
            </div>
        </>
    )
}

export default Home