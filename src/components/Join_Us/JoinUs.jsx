import { Col, Container, Row } from "react-bootstrap";
import "./JoinUs.css";
import Img1 from "../../assets/images/JoinUs/about-company-1.jpg";
import Img2 from "../../assets/images/JoinUs/about-company-2.jpg";
import Img3 from "../../assets/images/JoinUs/about-company-3.jpg";
function JoinUs() {
  return (
    <section>
      <Container className="px-3 mx-auto !my-[150px]">
        <h4 className="text-center text-gray-300 sub-line">
          به جمع ما بپیوندید
        </h4>
        <Row className="items-center my-5 gap-y-6">
          <Col md={12} lg={6}>
            <div className="p-4">
              <p className="text-gray-300 text-justify ">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <Row>
              <Col md={6}>
                <div className="grid gap-y-5 p-2">
                  <img src={Img3} className="img-fluid rounded-2xl" />
                  <img src={Img2} className="img-fluid rounded-2xl" />
                </div>
              </Col>
              <Col md={6}>
                <div className="p-2">
                  <img src={Img1} className="img-fluid rounded-2xl" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default JoinUs;
