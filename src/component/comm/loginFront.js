import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import '../../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginFront() {

  return (
    <div>
      <div className='Login-Front-Image'>
        <Image src='../../member_block_ind/images/member-block-logo.png'  fluid  />
      </div>
        <Form action="/member_block_ind/main/mainFront">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <div style={{ paddingLeft: "10%"}}>
            <Button variant="primary" type="submit">
              LOGIN
            </Button>
            <Button variant="secondary" style={{ marginLeft: "5%" , marginRight: "2%" }}>
              REGISTER
            </Button>
            <a href='*'><span className="auth find">FORGOT MY ID </span></a>
            <span>/</span>
            <a href='*'><span className="auth find"> FORGOT MY Password </span></a>
          </div>
        </Form>
  </div>
  );
} 

export default LoginFront;