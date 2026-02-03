import { Outlet } from "react-router-dom";
import '../../css/footer.css';
import 'semantic-ui-css/semantic.min.css'; 
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import * as mainAction from '../../js/main/mainFrontAction.js';
import  MainBottomNavBar from './mainFooter.js'
import  MainHeader from './mainHeader.js';


export default function MainLayout() {

  return (
    <div>
        <MainHeader />
        <InputGroup className="main search box">
            <Form.Control aria-label="Dollar amount (with dot and two decimal places)" placeholder='Search..' onChange={mainAction.searchInputValue} />
            <InputGroup.Text><CloseButton /></InputGroup.Text>
            <InputGroup.Text>🔍</InputGroup.Text>
        </InputGroup>
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <main style={{ flex: 1 , paddingBottom: "23%" }} >
                <Outlet />
            </main>
        </div>
        <MainBottomNavBar />
    </div>
        
  );
}
