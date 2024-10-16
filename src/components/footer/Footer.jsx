import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { FaTelegramPlane, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-gray-800">
      <Container className="px-3 !py-6 mx-auto text-gray-300">
        <Row className="contact-input py-4 mb-5 gap-y-6 flex flex-col">
          <h4 className="text-center">ارتباط با ما</h4>
          <p className="text-center">
            ایمیلت رو وارد کن و از جدید ترین دوره ها با خبر شو!
          </p>
          <div className="input-container flex justify-center gap-x-2 items-center">
            <div className="text-input bg-gray-700 h-14 w-72 rounded-[5px]">
              <input type="text" className="[all:unset] p-3" />
            </div>
            <div className="btn">
              <button
                title="ثبت"
                className="hover:bg-gray-400 transition delay-150 hover:text-gray-200 px-5 py-3 bg-gray-100 text-gray-900 rounded-lg"
              >
                ثبت
              </button>
            </div>
          </div>
        </Row>
        <Row className="flex justify-center items-start">
          <Col md={6} lg={6} className="flex flex-col gap-y-8 px-3">
            <h4>درباره ما</h4>
            <p className="text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <Row className="icons flex justify-start items-center">
              <div className="!w-[50px] p-3 cursor-pointer" title="واتساپ">
                <span>
                  <FaWhatsapp
                    size="35px"
                    color="#9ca3af"
                    className="p-1 rounded-md text-center border border-gray-400"
                  />
                </span>
              </div>
              <div className="!w-[50px] p-3 cursor-pointer" title="یوتیوب">
                <span>
                  <FaYoutube
                    size="35px"
                    color="#9ca3af"
                    className="p-1 rounded-md text-center border border-gray-400"
                  />
                </span>
              </div>
              <div className="!w-[50px] p-3 cursor-pointer" title="تلگرام">
                <span>
                  <FaTelegramPlane
                    size="35px"
                    color="#9ca3af"
                    className="p-1 rounded-md text-center border border-gray-400"
                  />
                </span>
              </div>
              <div className="!w-[50px] p-3 cursor-pointer" title="ایمیل">
                <span>
                  <MdEmail
                    size="35px"
                    color="#9ca3af"
                    className="p-1 rounded-md text-center border border-gray-400"
                  />
                </span>
              </div>
            </Row>
          </Col>
          <Col md={6} lg={2} className="px-3">
            <Row className="mb-4">
              <h4>دوره ها</h4>
            </Row>
            <ul className="list-none">
              <li className="flex flex-col my-3" title="جاوااسکریپت">
                <Link to="" className="no-underline text-gray-200">
                  جاوااسکریپت
                </Link>
              </li>
              <li className="flex flex-col my-3" title="PHP">
                <Link to="" className="no-underline text-gray-200">
                  PHP
                </Link>
              </li>
              <li className="flex flex-col my-3" title="HTML CSS">
                <Link to="" className="no-underline text-gray-200">
                  HTML CSS
                </Link>
              </li>
              <li className="flex flex-col my-3" title="ری اکت">
                <Link to="" className="no-underline text-gray-200">
                  ری اکت
                </Link>
              </li>
              <li className="flex flex-col my-3" title="C#">
                <Link to="" className="no-underline text-gray-200">
                  C#
                </Link>
              </li>
              <li className="flex flex-col my-3" title="پایتون">
                <Link to="" className="no-underline text-gray-200">
                  پایتون
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={2} className="px-3">
            <Row className="mb-4">
              <h4>لینک ها</h4>
            </Row>
            <ul className="list-none">
              <li className="flex flex-col my-3" title="صفحه اصلی">
                <Link to="" className="no-underline text-gray-200">
                  صفحه اصلی
                </Link>
              </li>
              <li className="flex flex-col my-3" title="پلن ها">
                <Link to="" className="no-underline text-gray-200">
                  پلن ها
                </Link>
              </li>
              <li className="flex flex-col my-3" title="ارتباط با ما">
                <Link to="" className="no-underline text-gray-200">
                  ارتباط با ما
                </Link>
              </li>
              <li className="flex flex-col my-3" title="ثبت نام">
                <Link to="" className="no-underline text-gray-200">
                  ثبت نام
                </Link>
              </li>
              <li className="flex flex-col my-3" title="همکاری">
                <Link to="" className="no-underline text-gray-200">
                  همکاری
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={2} className="px-3">
            <Row className="mb-4">
              <h4>بحث و گفت و گو</h4>
            </Row>
            <ul className="list-none">
              <li className="flex flex-col my-3" title="انجمن">
                <Link to="" className="no-underline text-gray-200">
                  انجمن
                </Link>
              </li>
              <li className="flex flex-col my-3" title="وبلاگ">
                <Link to="" className="no-underline text-gray-200">
                  وبلاگ
                </Link>
              </li>
              <li className="flex flex-col my-3" title="پادکست">
                <Link to="" className="no-underline text-gray-200">
                  پادکست
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
