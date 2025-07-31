import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';

const NavigationBar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isLanguageHovered, setIsLanguageHovered] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  const isActive = (path) => location.pathname === path;
  const currentLang = i18n.language === 'gr' ? 'ΕΛ' : 'EN';

  return (
    <Navbar
      expand="lg"
      className="navbar-light bg-white"
      onToggle={(nextExpanded) => setIsNavOpen(nextExpanded)}
    >
      <Container>
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="Logo" height="50"/>
          <span>Syros Hiking Team</span>
        </Link>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler second-button"
        >
          <div className={`animated-icon2 ${isNavOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={isActive('/') ? 'active' : ''}>
              {t('navbar.home')}
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={isActive('/about') ? 'active' : ''}>
              {t('navbar.about')}
            </Nav.Link>
            <Nav.Link as={Link} to="/trails" className={isActive('/trails') ? 'active' : ''}>
              {t('navbar.trails')}
            </Nav.Link>
            <Nav.Link as={Link} to="/events" className={isActive('/events') ? 'active' : ''}>
              {t('navbar.events')}
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery" className={isActive('/gallery') ? 'active' : ''}>
              {t('navbar.gallery')}
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={isActive('/contact') ? 'active' : ''}>
              {t('navbar.contact')}
            </Nav.Link>

            {/* Language Switcher */}
            <div
              className="language-wrapper"
              onMouseEnter={() => !isMobile && setIsLanguageHovered(true)}
              onMouseLeave={() => !isMobile && setIsLanguageHovered(false)}
            >
              <NavDropdown
                title={<><i className="fas fa-globe me-1"></i> {currentLang}</>}
                id="language-dropdown"
                className="language-dropdown"
                menuVariant="light"
                show={isMobile ? dropdownOpen : isLanguageHovered}
                onClick={() => isMobile && setDropdownOpen(!dropdownOpen)}
              >
                <NavDropdown.Item onClick={() => changeLanguage('en')}>
                  {t('navbar.en')}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage('gr')}>
                  {t('navbar.gr')}
                </NavDropdown.Item>
              </NavDropdown>
              {/* Invisible bridge */}
              {!isMobile && <div className="hover-bridge"></div>}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
