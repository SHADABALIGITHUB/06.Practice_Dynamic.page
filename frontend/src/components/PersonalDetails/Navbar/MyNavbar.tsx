import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

interface useremail {
  useremail:string|null;
}

const MyNavbar:React.FC=({userEmail})=>{
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <span>{userEmail}</span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;