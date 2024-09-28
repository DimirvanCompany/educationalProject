import { Col, Container, Row } from "react-bootstrap";

function WhyUs() {
    return ( 
        <Container className="px-3 mx-auto !my-[150px]">
            <p className="text-gray-400 text-center text-lg">چرا ما ؟</p>
            <p className="text-gray-200 text-2xl my-3 text-center">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
            <Row className="!my-[50px] gap-y-10">
                <Col lg={3} md={6}>
                    <div className="text-white bg-gray-900 pt-3 pb-4 text-center rounded-2xl !mx-[35px] shadow-2xl border-t-2 border-[#8a2be2]">
                        <p className="text-[#8a2be2] font-bold text-3xl mb-3">+150</p>
                        <p className="text-lg">دوزه های آموزشی</p>
                    </div>
                </Col>
                <Col lg={3} md={6}>
                    <div className="text-white bg-gray-900 pt-3 pb-4 text-center rounded-2xl !mx-[35px] shadow-2xl border-t-2 border-yellow-200">
                        <p className="text-yellow-200 font-bold text-3xl mb-3">+4000</p>
                        <p className="text-lg">دانشجو</p>
                    </div>
                </Col>
                <Col lg={3} md={6}>
                    <div className="text-white bg-gray-900 pt-3 pb-4 text-center rounded-2xl !mx-[35px] shadow-2xl border-t-2 border-pink-400">
                        <p className="text-pink-400 font-bold text-3xl mb-3">+15</p>
                        <p className="text-lg">مدرس با تجربه</p>
                    </div>
                </Col>
                <Col lg={3} md={6}>
                    <div className="text-white bg-gray-900 pt-3 pb-4 text-center rounded-2xl !mx-[35px] shadow-2xl border-t-2 border-green-400">
                        <p className="text-green-400 font-bold text-3xl mb-3">+3000</p>
                        <p className="text-lg">تمرین حل شده</p>
                    </div>
                </Col>

            </Row>
        </Container>
     );
}

export default WhyUs;
