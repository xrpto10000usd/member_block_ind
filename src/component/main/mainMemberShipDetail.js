import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import '../../css/main.css';
import { useSelector } from 'react-redux';


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
                        <Button variant="outline-danger">Cancel Sell</Button>
                        <Button variant="outline-info">Info</Button>
                        <Button variant="outline-warning">Modify Invoice</Button>
                    </Card.Body> );
        case "memSellRequests":
            return ( <Card.Body className='detail action buttons'>
                        <Button variant="outline-danger">Cancel Purchase</Button>
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
        default:
            return null;
    }
}

function MainMemberShipDetail() {
    // Redux에서 mainTabKey 값만 읽어옴 (state 변경 없음)
    const mainTabKey = useSelector(state => state.mainTabKey);
    const renderActionButton = actionButtons(mainTabKey);
    const belowRendering = detailBelowRendering(mainTabKey);
    // 필요하다면 mainTabKey를 활용
    console.log('mainTabKey:', mainTabKey);
    return (
        <div className='mainMemberShipDetail'>
                <Card style={style.cardContainer}>
                    <Card.Img variant="top" src="/member_block_ind/images/dgi_logo.png" />
                    <Card.Body>
                        <Card.Title>ABC Gym</Card.Title>
                        <Card.Text>
                        ABC Gym 
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