import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../../css/footer.css';
import 'semantic-ui-css/semantic.min.css'; 
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function MainHeader() {

    const [showUserOptions, setShowUserOptions] = useState(false);

    const handleClose = () => setShowUserOptions(false);
    const handleShow = () => setShowUserOptions(true);

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Hello! User</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow}/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal show={showUserOptions} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>User Option</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}