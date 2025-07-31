import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-4">
      <Container>
        <Row className="align-items-center">
          {/* Logo and Info */}
          <Col lg={4} className="mb-3 mb-lg-0">
            <div className="d-flex align-items-center">
              <img
                src={logo}
                alt="Syros Hiking Team Logo"
                height="45"
                className="me-3"
              />
              <div>
                <h6 className="mb-1">Syros Hiking Team</h6>
                <span className="small opacity-75">{t('footer.slogan')}</span>
              </div>
            </div>
          </Col>

          {/* Navigation Links */}
          <Col lg={4} md={6} className="mb-3 mb-lg-0 text-center">
            <div className="footer-links d-flex justify-content-center flex-wrap">
              <Link to="/" className="text-white text-decoration-none mx-2 hover-underline">
                {t('footer.home')}
              </Link>
              <Link to="/about" className="text-white text-decoration-none mx-2 hover-underline">
                {t('footer.about')}
              </Link>
              <Link to="/trails" className="text-white text-decoration-none mx-2 hover-underline">
                {t('footer.trails')}
              </Link>
              <Link to="/events" className="text-white text-decoration-none mx-2 hover-underline">
                {t('footer.events')}
              </Link>
              <Link to="/gallery" className="text-white text-decoration-none mx-2 hover-underline">
                {t('footer.gallery')}
              </Link>
              <Link to="/contact" className="text-white text-decoration-none mx-2 hover-underline">
                {t('footer.contact')}
              </Link>
            </div>
          </Col>

          {/* Social Media Icons */}
          <Col lg={4} md={6} className="mb-3 mb-lg-0 text-lg-end">
            <div className="social-icons d-inline-flex">
              <a
                href="https://www.facebook.com/groups/hikingteamsyros"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3 social-link"
                aria-label="Syros Hiking Team on Facebook"
                title="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} size="sm" />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="my-3 opacity-25" />

        {/* Copyright */}
        <Row>
          <Col xs={12} className="text-center">
            <p className="mb-0 small opacity-75">
              &copy; {currentYear} {t('footer.brand')}. {t('footer.rights')}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
