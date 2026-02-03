import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';
import { useNavigate } from 'react-router-dom';

function MainMembershipListCard() {

  const navigate = useNavigate();
  const navigateUrl = '/member_block_ind/main/mainMemberShipDetail';
  
  return (
    <Card style={{ width: '100%' }} onClick={()=> { navigate(navigateUrl); }}>
      <Card.Img className="membershipListCardImage" variant="top" src="/member_block_ind/images/dgi_logo.png" />
      <Card.Body>
        <Card.Title>ABC Gym</Card.Title>
        <Card.Text>
          ABC Gym MemberShip
        </Card.Text>
        <Stack direction="horizontal" gap={3}>
            <Badge bg="primary">until 2026-07-30</Badge>
            <Badge bg="secondary">50 euro!</Badge>
            <Badge bg="success">solo locker</Badge>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default MainMembershipListCard;