import { Col, Row } from "react-bootstrap";
function HowDoIStartItems({ icon, title, desc }) {
  return (
    <Row className="my-5">
      <Col xs={1} className=" flex items-center justify-center">
        <div>{icon}</div>
      </Col>
      <Col xs={11} className="ps-3 pt-2">
        <p className="font-bold text-xl text-gray-300">{title}</p>
        <p className="text-[16px] text-gray-300">{desc}</p>
      </Col>
    </Row>
  );
}

export default HowDoIStartItems;
