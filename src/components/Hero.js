import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';
import './Hero.css';

const Hero = ({
  backgroundImage,
  title,
  subtitle,
  primaryButtonIcon,
  primaryButtonHref,
  primaryButtonOnClick,
  primaryButtonText,
  secondaryButtonIcon,
  secondaryButtonHref,
  secondaryButtonOnClick,
  secondaryButtonText
}) => {
  const backgroundStyle = { backgroundImage: `url(${backgroundImage})` };
  const overlayStyle = { backgroundColor: 'rgba(37, 99, 235, 0.4)' };

  return (
    <section className="hero-section">
      <div className="hero-background" style={backgroundStyle}></div>
      <div className="hero-overlay" style={overlayStyle}></div>

      <div className="hero-content">
        {title && <h1 className="hero-title">{title}</h1>}
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}

        <div className="hero-buttons">
          {primaryButtonText && (
            <HashLink
                         smooth
                         to={primaryButtonHref}
                         className="btn btn-primary btn-lg"
                         onClick={primaryButtonOnClick}
                       >
              {primaryButtonIcon && (
                <>
                  <FontAwesomeIcon icon={primaryButtonIcon} />
                  <span className="icon-text-space"></span>
                </>
              )}
              {primaryButtonText}
            </HashLink>
            
          )}

          {secondaryButtonText && (
            <HashLink
            smooth
            to={secondaryButtonHref}
            className="btn btn-outline-light btn-lg"
            onClick={secondaryButtonOnClick}
          >
              {secondaryButtonIcon && (
                <>
                  <FontAwesomeIcon icon={secondaryButtonIcon} />
                  <span className="icon-text-space"></span>
                </>
              )}
              {secondaryButtonText}
            </HashLink>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
