import { Col, Container, Row } from "react-bootstrap";
import "./HowDoIStart.css";
import { PiUserCircleCheckBold } from "react-icons/pi";
import HowDoIStartItems from "./HowDoIStartItems";
import { LuMousePointerClick } from "react-icons/lu";
import { BsRocket } from "react-icons/bs";
import Image1 from "../../assets/images/Wavy_Bus-05_Single-08-Photoroom.png";
function HowDoIStart() {
  const Items = [
    {
      id: 1,
      icon: <PiUserCircleCheckBold size={"45px"} color="darkorchid" />,
      title: "ثبت نام",
      desc: "در سایت به آسانی ثبت نام کنید",
    },
    {
      id: 2,
      icon: <LuMousePointerClick size={"45px"} color="darkorchid" />,
      title: "انتخاب دوره",
      desc: "دوره مورد نظر خودتون رو انتخاب کنید",
    },
    {
      id: 3,
      icon: <BsRocket size={"45px"} color="darkorchid" />,
      title: "شروع یادگیری",
      desc: "همه چیز را آماده است تا دنیای جدید را کشف کنید",
    },
  ];
  return (
    <section>
      <Container className="px-3 mx-auto !my-[150px]">
        <h4 className="text-center sub-line text-gray-300">چطوری شروع کنم ؟</h4>
        <Row className="items-center">
          <Col md={6}>
            {Items.map((item) => (
              <HowDoIStartItems key={item.id} {...item} />
            ))}
          </Col>
          <Col md={6}>
            <div>
              <img src={Image1} className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HowDoIStart;
