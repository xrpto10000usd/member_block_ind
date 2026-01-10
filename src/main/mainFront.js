import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';

function mainFront() {

  return (
     <Stack direction="horizontal" gap={3}>
        <div className="p-2">First item</div>
        <div className="p-2">Second item</div>
        <div className="p-2">Third item</div>
     </Stack>
  );
} 

export default mainFront;