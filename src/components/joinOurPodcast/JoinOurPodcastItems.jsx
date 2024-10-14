import { Col } from "react-bootstrap";
import { GoArrowUpLeft } from "react-icons/go";
function JoinOurPodcastItems({ image, title, desc }) {
  return (
    <Col md={6} lg={4}>
      <div className="courses-card m-4 flex flex-col bg-gray-800 p-3 gap-y-5 rounded-lg">
        <div className="card-header">
          <img src={image} className="!rounded-3xl h-72" alt="" />
        </div>
        <div className="card-middle">
          <div className="title text-[20px] mb-3 text-gray-200">{title}</div>
          <div className="title text-[15px] text-gray-200">{desc}</div>
        </div>
        <div className="card-footer">
          <div className="price&buy-btn gap-x-1 flex items-center justify-between">
            <div className="price text-gray-400">شنیدن</div>
            <div className="buy-btn">
              <button
                title="شنیدن"
                className="hover:bg-gray-400 transition delay-150 hover:text-gray-200 text-2xl border-1 border-[darkorchid] px-1 py-1 bg-transparent text-[darkorchid] rounded-lg"
              >
                <GoArrowUpLeft />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default JoinOurPodcastItems;
