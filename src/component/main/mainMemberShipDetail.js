import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import * as comm from '../../js/util/comm.js';
import Button from 'react-bootstrap/Button';
import '../../css/main.css';

const style = {
    cardContainer : { width: '100%'}
}

const actionButtons =(cardType)=> {

    switch(cardType) {
        case "inStock":
            return ( <Card.Body className='detail action buttons'>
                        <Button variant="outline-success">Sell</Button>
                        <Button variant="outline-info">Info</Button>
                    </Card.Body> );
        case "sellRequest":
            return ( <Card.Body className='detail action buttons'>
                        <Button variant="outline-danger">Cancel Sell</Button>
                        <Button variant="outline-info">Info</Button>
                        <Button variant="outline-warning">Modify Invoice</Button>
                    </Card.Body> );
        case "purchaseRequest":
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
        case "inStock":
            return ( <Card.Img variant="top" src="/member_block_ind/images/S3tdH6.png" className="mobile pass qr image" /> );
        default:
            return null;
    }
}

function MainMemberShipDetail() {

    const queryParam = comm.getQueryParam();
    const cardType = queryParam.cardType;
    const renderActionButton = actionButtons(cardType);
    const belowRendering = detailBelowRendering(cardType);
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
    )
}

export default MainMemberShipDetail;