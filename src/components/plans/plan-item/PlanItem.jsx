import { CiSquareCheck } from "react-icons/ci";
import "../Plans.css";
import { Col } from "react-bootstrap";
function PlanItem({ typePlan, icon, text, price }) {
  return (
    <Col md={6} lg={4} title={`پلن ${typePlan}`}>
      <div className="courses-card m-4 flex flex-col gap-y-6 bg-gray-800 p-3 rounded-lg">
        <div className="card-header gap-x-2 flex flex-col gap-y-4">
          <div className="flex items-center gap-x-2">
            <div className="icon">{icon}</div>
            <div className="plan-type">پلن {typePlan}</div>
          </div>
          <div className="text text-[14px]">{text}</div>
          <div className="plan">
            <h4 className="font-bold">{price}</h4>
          </div>
        </div>
        <div className="card-middle h-[10px] flex justify-between items-center my-3">
          <button
            title="شروع"
            className="rounded-pill border border-gray-200 w-full py-2 bg-gray-700"
          >
            شروع
          </button>
        </div>
        <div className="card-footer">
          <div className="flex flex-col gap-y-3">
            <div className="box flex items-center gap-x-2">
              <div className="icon">
                <CiSquareCheck size="25px" />
              </div>
              <div className="text text-[14px]">
                <span>لورم ایپسوم متن ساختگی با تولید</span>
              </div>
            </div>
            <div className="box flex items-center gap-x-2">
              <div className="icon">
                <CiSquareCheck size="25px" />
              </div>
              <div className="text text-[14px]">
                <span>لورم ایپسوم متن ساختگی با تولید</span>
              </div>
            </div>
            <div className="box flex items-center gap-x-2">
              <div className="icon">
                <CiSquareCheck size="25px" />
              </div>
              <div className="text text-[14px]">
                <span>لورم ایپسوم متن ساختگی با تولید</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default PlanItem;
