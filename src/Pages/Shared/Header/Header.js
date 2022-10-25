import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../../../assets/brands/logo.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Login from '../../Login/Login/Login';
import { FaGithub, FaGoogle, FaUser } from 'react-icons/fa';


const Header = () => {

    const { providerLogin, logOut, user } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
            <Container>

                <Navbar.Brand><img alt="" src={logo} width="30" height="30" className="d-inline-block align-top"
                />{' '} <Link to='/'>Programming Courses</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Link className='mx-2' to={`/category/:id`}><Button>Courses</Button></Link>
                        <Link className='mx-2' href="#pricing"><Button>FAQ</Button> </Link>
                        <Link className='mx-2' href="#pricing"><Button>Blog</Button></Link>
                        {/* <Link to='/login'>Login</Link> */}
                        <Button onClick={handleGoogleSignIn} className='mx-3' variant="primary" type="submit">
                            Login With <FaGoogle></FaGoogle>
                        </Button>
                        <Button className='mx-3' variant="primary" type="submit">
                            Login With <FaGithub></FaGithub>
                        </Button>
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <button onClick={handleLogOut}>Log Out</button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'><Button className='mx-2' >Login</Button></Link>
                                        <Link to='/register'><Button >Register</Button></Link>
                                    </>
                            }

                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }} roundedCircle
                                    src={user?.photoURL}></Image>
                                :
                                <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;