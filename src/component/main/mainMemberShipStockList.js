import Stack from 'react-bootstrap/Stack';
import MembershipListCard from './mainMemberShipListCard';

function MemberShipStockList() {
  
  return (
    <Stack gap={3}>
      <MembershipListCard />
      <MembershipListCard />
      <MembershipListCard />
    </Stack>
  );
}

export default MemberShipStockList;