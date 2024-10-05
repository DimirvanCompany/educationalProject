import { Container, Row } from "react-bootstrap";
import "./Plans.css";
import { MdOutlineMoneyOffCsred } from "react-icons/md";
import { FaCrown } from "react-icons/fa6";
import { IoDiamondOutline } from "react-icons/io5";
import PlanItem from "./plan-item/PlanItem";
function Plans() {
  const planData = [
    {
      id: 1,
      typePlan: "رایگان",
      price: "رایگان",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      icon: <MdOutlineMoneyOffCsred size="20px" />,
    },
    {
      id: 2,
      typePlan: "پایه",
      price: "3/000/000",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      icon: <FaCrown size="20px" />,
    },
    {
      id: 3,
      typePlan: "حرفه ای",
      price: "7/500/000",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      icon: <IoDiamondOutline size="20px" />,
    },
  ];
  return (
    <section className="my-5">
      <Container className="text-gray-300 px-3 mx-auto !my-[150px]">
        <Row className="flex justify-center items-center !my-12">
          <h4 className="sub-line text-center">مناسب ترین پلن رو انتخاب کن!</h4>
        </Row>
        <Row className="flex justify-center items-center gap-y-2">
          {planData.map((item) => (
            <PlanItem {...item} key={item.id} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Plans;
