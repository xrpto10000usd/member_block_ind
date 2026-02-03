import Stack from 'react-bootstrap/Stack';
import MembershipListCard from './mainMemberShipListCard';

function MemberShipStockList() {
  
  const mainMembershipCardType ='inStock';

  return (
    <Stack gap={3}>
      <MembershipListCard cardType={mainMembershipCardType}/>
      <MembershipListCard cardType={mainMembershipCardType}/>
      <MembershipListCard cardType={mainMembershipCardType}/>
      <MembershipListCard cardType={mainMembershipCardType}/>
      <MembershipListCard cardType={mainMembershipCardType}/>
      <MembershipListCard cardType={mainMembershipCardType}/>
    </Stack>
  );
}

export default MemberShipStockList;