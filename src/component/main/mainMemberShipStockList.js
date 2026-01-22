import Stack from 'react-bootstrap/Stack';
import MembershipListCard from './mainMemberShipListCard';

function memberShipStockList() {
  return (
    <Stack gap={3}>
      <MembershipListCard />
      <MembershipListCard />
    </Stack>
  );
}

export default memberShipStockList;