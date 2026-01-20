import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../footer.css';

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
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <main style={{ flex: 1 }}>
                <Outlet />
            </main>
        </div>
        <div>
            <nav class="bottom-nav">
                <a href="#home" class="nav-item">
                    <span class="icon">🏠</span>
                    <span class="label">Market</span>
                </a>
                <a href="#search" class="nav-item">
                    <span class="icon">🔍</span>
                    <span class="label">Search</span>
                </a>
                <a href="#profile" class="nav-item">
                    <span class="icon">👤</span>
                    <span class="label">My Info</span>
                </a>
            </nav>
        </div>
    </div>
        
  );
}
