import { PiStarThin } from "react-icons/pi";
import "./NewCourses.css";
import { Col } from "react-bootstrap";
function NewCoursesItem({ image, title, price , rate }) {
  return (
    <Col title={title} md={6} lg={3}>
      <div className="courses-card m-4 flex flex-col gap-y-6 bg-gray-800 p-4 rounded-lg">
        <div className="card-header">
          <img src={image} className="!rounded-3xl my-3" alt="" />
        </div>
        <div className="card-middle h-[10px] flex justify-between items-center">
          <div className="title text-[14px]">{title}</div>
          <div className="rating gap-x-1 flex items-center justify-between">
            <div className="rate text-gray-400">{rate}</div>
            <div className="start">
              <PiStarThin size="20px" color="#b7ff00" />
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="price&buy-btn gap-x-1 flex items-center justify-between">
            <div className="price text-gray-400">
              {price.toLocaleString()} تومان
            </div>
            <div className="buy-btn">
              <button
                title="خرید"
                className="hover:bg-gray-400 transition delay-150 hover:text-gray-200 px-3 py-1 bg-gray-100 text-gray-900 rounded-lg"
              >
                خرید
              </button>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default NewCoursesItem;
