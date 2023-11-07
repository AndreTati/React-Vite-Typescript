import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Header = ()=>{
    const navigate=useNavigate();
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">My App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
                    <Nav.Link onClick={()=>navigate('/componentes')}>Componentes</Nav.Link>
                    <Nav.Link onClick={()=>navigate('/administracion')}>Administración</Nav.Link>                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}
export default Header;