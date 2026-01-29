import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../css/footer.css';
import * as render from '../../js/util/render';
import 'semantic-ui-css/semantic.min.css'; 
import { Icon } from 'semantic-ui-react'; // Import Icon component
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import * as mainAction from '../../js/main/mainFrontAction.js';


export default function MainLayout() {

  return (
    <div>
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Hello! User</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Account</Nav.Link>
                        <Nav.Link href="#link">Settings</Nav.Link>
                        {/*
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown>
                        */}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        <InputGroup className="main search box">
            <Form.Control aria-label="Dollar amount (with dot and two decimal places)" placeholder='Search..' onChange={mainAction.searchInputValue} />
            <InputGroup.Text><CloseButton /></InputGroup.Text>
            <InputGroup.Text>🔍</InputGroup.Text>
        </InputGroup>
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <main style={{ flex: 1 }}>
                <Outlet />
            </main>
        </div>
        <div id="bottom-nav-div">
            <nav className="bottom-nav">
                <a href="#Market" className="nav-item" onClick={render.bottomBarNavigation}>
                    <span className="icon">🏠</span>
                    <span className="label">Market</span>
                </a>
                <a href="#search" className="nav-item">
                    <span className="icon"><Icon name='inbox' size='large' /></span>
                    <span className="label">inbox</span>
                </a>
                <a href="#profile" className="nav-item" onClick={render.bottomBarNavigation}>
                    <span className="icon">👤</span>
                    <span className="label">My Info</span>
                </a>
            </nav>
        </div>
    </div>
        
  );
}
