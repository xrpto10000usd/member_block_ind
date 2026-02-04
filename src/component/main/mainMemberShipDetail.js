import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import '../../css/main.css';
import { useSelector } from 'react-redux';
import Toast from 'react-bootstrap/Toast';

const style = {
    cardContainer : { width: '100%'}
}


const actionButtons =(cardType)=> {

    switch(cardType) {
        case "memstocks":
            return ( <Card.Body className='detail action buttons'>
                        <Button variant="outline-success">Sell</Button>
                        <Button variant="outline-info">Info</Button>
                    </Card.Body> );
        case "memRequests":
            return ( <Card.Body className='detail action buttons'>
                        <Button variant="outline-danger">Cancel Purchase</Button>
                        <Button variant="outline-info">Info</Button>
                        <Button variant="outline-warning">Modify Invoice</Button>
                    </Card.Body> );
        case "memSellRequests":
            return ( <Card.Body className='detail action buttons'>
                        <Button variant="outline-danger">Cancel Sell</Button>
                        <Button variant="outline-info">Info</Button>
                        <Button variant="outline-warning">Modify Invoice</Button>
                    </Card.Body> );
        default:
            return null;
    }
}

const detailBelowRendering = (cardType) => {
    switch(cardType) {
        case "memstocks":
            return ( <Card.Img variant="top" src="/member_block_ind/images/S3tdH6.png" className="mobile pass qr image" /> );
        case "memRequests":
            return (<Card.Body>
                        <Toast  className="d-inline-block m-1 purchase request status"
                                bg='Info'
                                key='thisCardTypeABC'
                                >
                            <Toast.Header>
                                <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                                />
                                <strong className="me-auto">Current Request Stage</strong>
                                <small>Due : 2026-02-27</small>
                            </Toast.Header>
                            <Toast.Body className='Info'>
                            ABC Gym requested to upload following documents...
                            </Toast.Body>
                        </Toast>
                        <ListGroup className="list-group-flush documents upload request">
                            <ListGroup.Item>
                                <span>passport photo</span>
                                <Button variant="primary" size="sm">
                                    Upload with Camera
                                </Button>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span>proof of residence</span>
                                <Button variant="primary" size="sm">
                                    Upload with Camera
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>);
        default:
            return null;
    }
}

function MainMemberShipDetail() {

    const mainTabKey = useSelector(state => state.mainTabKey);
    const renderActionButton = actionButtons(mainTabKey);
    const belowRendering = detailBelowRendering(mainTabKey);

    return (
        <div className='mainMemberShipDetail'>
                <Card style={style.cardContainer}>
                    <Card.Img variant="top" src="/member_block_ind/images/dgi_logo.png" />
                    <Card.Body>
                        <Card.Title>ABC Gym</Card.Title>
                        <Card.Text>
                        ABC Gym full membership
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>until 2026-07-30</ListGroup.Item>
                        <ListGroup.Item>solo locker</ListGroup.Item>
                    </ListGroup>
                    {renderActionButton}
                    {belowRendering}
                </Card>
        </div>
    );
}

export default MainMemberShipDetail;