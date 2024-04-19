import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import universalLogo from '../assets/universalLogo.png';
import paceLogo from '../assets/paceLogo.png';

function UINavbar() {
  return (
    <Navbar className="bg-white rounded-bottom" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Row className="align-items-center">
            <Col>
              <img src={universalLogo} width={'359.38px'} alt='logo1'/>
            </Col>
              <div style={{ borderLeft: '2px solid black', height: '40px', margin: '0 20px' , width:'2px'}}></div>
            <Col>
              <img src={paceLogo} width={'87.59px'} alt='logo2'/>
            </Col>
          </Row>
        </Navbar.Brand>
        <Row className='ml-auto' id="basic-navbar-nav">
          <Button style={{ backgroundColor: '#292967', width: '120px', height: '54.16px', borderRadius: '27.08px' }} className="pb-2 ml-auto">Get Info</Button>
        </Row>
      </Container>
    </Navbar>
  );
}

export default UINavbar;
