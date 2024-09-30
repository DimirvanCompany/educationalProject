import "./NewCourses.css";
import { Row, Container } from "react-bootstrap";
import NewCoursesItem from "./NewCoursesItem";
import { FaLongArrowAltLeft } from "react-icons/fa";
function NewCourses() {
  const coursesData = [
    {
      id: 1,
      image: "https://dl.next1code.ir/images/redux/courses/tailwind.jpg",
      title: "آموزش جامع پایتون",
      rate: "8",
      price: 750000,
    },
    {
      id: 2,
      image: "https://dl.next1code.ir/images/redux/courses/tailwind.jpg",
      title: "آموزش جامع تیلویند",
      rate: "6",
      price: 550000,
    },
    {
      id: 3,
      image: "https://dl.next1code.ir/images/redux/courses/tailwind.jpg",
      title: "آموزش جامع ریکت",
      rate: "3.5",
      price: 1200000,
    },
    {
      id: 4,
      image: "https://dl.next1code.ir/images/redux/courses/tailwind.jpg",
      title: "آموزش جامع نکست جی اس",
      rate: "4.5",
      price: 670000,
    },
    {
      id: 5,
      image: "https://dl.next1code.ir/images/redux/courses/tailwind.jpg",
      title: "آموزش جامع بوت استرپ",
      rate: "5.5",
      price: 120000,
    },
    {
      id: 6,
      image: "https://dl.next1code.ir/images/redux/courses/tailwind.jpg",
      title: "آموزش جامع MUI",
      rate: "7.5",
      price: 340000,
    },
  ];
  return (
    <section className="my-5">
      <Container className="text-gray-300 px-3 mx-auto !my-[150px]">
        <Row className="flex justify-center items-center !my-12">
          <span className="sub-line text-center">دوره های جدید</span>
        </Row>
        <Row className="flex justify-center items-center gap-y-2">
          {coursesData.slice(0, 4).map((item) => (
            <NewCoursesItem {...item} key={item.id} />
          ))}
        </Row>
        <div className="flex justify-end items-end h-[300px] !mt-[-250px] w-full bg-[#290849] rounded-xl gap-y-2">
          <button
            title="همه دوره ها"
            className="flex select-none justify-between items-center w-40 h-12 mx-4 mt-4 mb-2 transition delay-150 hover:text-gray-200 px-3 py-1 bg-[#290849] border border-gray-300 text-gray-200 rounded-lg"
          >
            <span>همه دوره ها</span>
            <span>
              <FaLongArrowAltLeft size="20px" />
            </span>
          </button>
        </div>
      </Container>
    </section>
  );
}
export default NewCourses;
