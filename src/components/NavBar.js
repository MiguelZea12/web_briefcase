import { useState, useEffect } from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import github from '../assets/img/github.svg';
import linkedin from '../assets/img/linkedin.svg';

const NavBar = () => {
    const [showLink, setShowLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=> {
        const onScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActivarteLink = (link) => {
        setShowLink(link)
    }

    return (
        <Navbar expand='lg' className = {scrolled ? "scroll": ""}>
            <Container>
                <Navbar.Brand href='#home'>Portafolio Alejandro Zea</Navbar.Brand>
                <Navbar.Toggle>
                    <span className='navbar-toggler-icon' />
                </Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link 
                        href='#home' 
                        className={showLink === 'home' ? 'activate navbar-link' : 'navbar-link'} 
                        onClick={() => onUpdateActivarteLink('home')}
                        >
                            Inicio
                        </Nav.Link>
                        <Nav.Link 
                        href='#skills' 
                        className={showLink === 'skills' ? 'activate navbar-link' : 'navbar-link'} 
                        onClick={() => onUpdateActivarteLink('skills')}
                        >
                            Habilidades
                        </Nav.Link>
                        <Nav.Link 
                        href='#projects' 
                        className={showLink === 'projects' ? 'activate navbar-link' : 'navbar-link'} 
                        onClick={() => onUpdateActivarteLink('projects')}
                        >
                            Proyectos
                        </Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='https://github.com/MiguelZea12'><img src={github} alt='github'></img></a>
                            <a href='https://www.linkedin.com/in/miguel-zea-39828b252/'><img src={linkedin} alt='linkedin'></img></a>
                        </div>
                        <button className='vvd' onClick={() => console.log('Conectado')}><span>Conectate</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavBar;