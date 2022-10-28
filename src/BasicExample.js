import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar className='App-Header'>
      <Container>
        <Navbar.Brand href="/">GXG BattleGrounds</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/signup">Sign up</Nav.Link>
            <NavDropdown title="Games" id="basic-nav-dropdown">
              <NavDropdown.Item href="/game1">GXG Chat</NavDropdown.Item>
              <NavDropdown.Item href="/game2">
                589 Challenge
              </NavDropdown.Item>
              <NavDropdown.Item href="#/">coming soon</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Mobile Games
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;