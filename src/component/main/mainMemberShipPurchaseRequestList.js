import Stack from 'react-bootstrap/Stack';
import MembershipListCard from './mainMemberShipListCard';

function memberShipPurchaseRequestList() {
  
  const mainMembershipCardType = 'purchaseRequest'

  return (
    <Stack gap={3}>
      <MembershipListCard cardType={mainMembershipCardType}/>
      <MembershipListCard cardType={mainMembershipCardType}/>
    </Stack>
  );
}

export default memberShipPurchaseRequestList;