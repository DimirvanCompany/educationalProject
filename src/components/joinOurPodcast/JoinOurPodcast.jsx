
import { Col, Container, Row } from 'react-bootstrap';
import { PiStarThin } from 'react-icons/pi';
import JoinOurPodcastItems from './JoinOurPodcastItems.jsx';
import ImgPodcast1 from '../../assets/images/Podcast/podcast1.png'
import ImgPodcast2 from '../../assets/images/Podcast/podcast2.png'
function JoinOurPodcast() {
    const Items = [
        {
            id : 1,
            image : ImgPodcast1,
            title : 'من از کجا شروع کنم؟' ,
            desc : 'این قسمت به همراه اقای امیررضا کرمی هستیم دولوپر با تجربه' ,
        },
        {
            id : 2,
            image : ImgPodcast2,
            title : 'من از کجا شروع کنم؟' ,
            desc : 'این قسمت به همراه امیرحسین شرفی هستیم دولوپر با تجربه'
        },
        {
            id : 3,
            image : ImgPodcast1,
            title : 'من از کجا شروع کنم؟' ,
            desc : 'این قسمت به همراه علی گنجی زاده هستیم دولوپر با تجربه'
        },
    ]
    return ( 
        <>
            <Container className="px-3 mx-auto !my-[150px]">
                <Row>
                <h4 className="sub-line text-center text-gray-200">همراه پادکست ما باشید</h4>
                    {Items.map(item => (
                        <JoinOurPodcastItems {...item} key={item.id} />
                    ))}
                </Row>
            </Container>
        </>
     );
}

export default JoinOurPodcast;