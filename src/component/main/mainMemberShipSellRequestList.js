import  Stack  from 'react-bootstrap/Stack';
import Pagination from 'react-bootstrap/Pagination';
import MembershipListCard from './mainMemberShipListCard';
import '../../css/main.css';

function memberShipSellRequestList() {


  return (
    <Stack gap={2}>
      <MembershipListCard />
      <MembershipListCard />
      <MembershipListCard />
      <MembershipListCard />
      <div>
        <Pagination className='pagination main membership'>
          <Pagination.Item key='memberShipSellListPaging_1' active={1}>
            1
          </Pagination.Item>
          <Pagination.Item key='memberShipSellListPaging_2'>
            2
          </Pagination.Item>
          <Pagination.Item key='memberShipSellListPaging_3'>
            3
          </Pagination.Item>
      </Pagination>
      </div>
    </Stack>
  );
}

export default memberShipSellRequestList;