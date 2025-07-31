import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapSigns } from '@fortawesome/free-solid-svg-icons';
import { faRoute, faMountain, faClock, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUsers, faCheck, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { Badge } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const getDifficultyColor = (difficulty = '') => {
  const normalized = difficulty.trim().toLowerCase();
  switch (normalized) {
    case 'easy':
    case 'εύκολη':
      return 'success';
    case 'moderate':
    case 'μέτρια':
      return 'warning';
    case 'hard':
    case 'δύσκολη':
      return 'danger';
    default:
      return 'success';
  }
};

const formatDate = (dateStr, locale = 'el-GR') => {
  const date = new Date(dateStr);
  return isNaN(date) ? 'Invalid date' : date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const FeatureCard = ({ icon, title, description, linkText, linkHref }) => {
  return (
    <div className="feature-card card text-center">
      <div className="feature-icon mb-4">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p style={{ whiteSpace: 'pre-line' }} className="feature-description">{description}</p>
      {linkText && linkHref && (
        <a href={linkHref} className="feature-link">
          {linkText}
          <span className="icon-text-space"></span>
          <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
        </a>
      )}
    </div>
  );
};

export const TrailCard = ({ title, description, image, difficulty, distance, elevation, duration, startLocation, trailType, bestSeasons, exploreLabel, onExplore }) => {
  return (
    <div className="trail-card-wrapper">
      <div className="card trail-card">
        <div className="trail-image-container position-relative">
          <img src={image} alt={title} className="trail-image" />
          <div className="trail-overlay"></div>
          <div className="position-absolute top-0 end-0 m-3">
            <span className={`badge bg-${getDifficultyColor(difficulty)} px-3 py-2`}>
              {difficulty}
            </span>
          </div>
        </div>

        <div className="card-body p-4 d-flex flex-column">
          <h5 className="trail-title mb-3">{title}</h5>

          <div className="trail-stats d-flex justify-content-between mb-3">
            <div className="stat-item d-flex align-items-center fw-semibold text-dark">
              <FontAwesomeIcon icon={faRoute} className="me-2 text-primary" />
              {distance}
            </div>
            <div className="stat-item d-flex align-items-center fw-semibold text-dark">
              <FontAwesomeIcon icon={faClock} className="me-2 text-primary" />
              {duration}
            </div>
            <div className="stat-item d-flex align-items-center fw-semibold text-dark">
              <FontAwesomeIcon icon={faMountain} className="me-2 text-primary" />
              {elevation}
            </div>
          </div>

          <p className="text-muted mb-3">{description}</p>

          <div className="d-flex flex-wrap gap-2 mb-4">
            {startLocation && (
              <span className="badge bg-light d-flex align-items-center gap-2 px-3 py-2 text-dark">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary" />
                {startLocation}
              </span>
            )}
            {trailType && (
              <span className="badge bg-light d-flex align-items-center gap-2 px-3 py-2 text-dark">
                <FontAwesomeIcon icon={faMapSigns} className="text-primary" />
                {trailType}
              </span>
            )}
            {bestSeasons && (
              <span className="badge bg-light d-flex align-items-center gap-2 px-3 py-2 text-dark">
                <FontAwesomeIcon icon={faLeaf} className="text-primary" />
                {bestSeasons}
              </span>
            )}
          </div>

          <button className="btn btn-primary mt-auto" onClick={onExplore}>
            {exploreLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export const EventCard = ({ title, description, date, time, location, image, difficulty, joinLabel, onJoin }) => {
  return (
    <div className="event-card-wrapper">
      <div className="card event-card">
        <div className="event-image-container position-relative">
          <img src={image} alt={title} className="event-image" />
          <div className="event-overlay"></div>
          <div className="position-absolute top-0 end-0 m-3">
            <span className={`badge bg-${getDifficultyColor(difficulty)} px-3 py-2`}>
              {difficulty}
            </span>
          </div>
        </div>

        <div className="event-content p-4 d-flex flex-column h-100">
          <div className="event-date-badge mb-3">
            <div className="d-flex align-items-center text-primary">
              <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
              <span className="fw-semibold">{date}</span>
              <span className="ms-auto badge bg-light text-dark">{time}</span>
            </div>
          </div>

          <h4 className="event-title fw-bold mb-3">{title}</h4>
          <p className="event-description text-muted mb-4">{description}</p>

          <div className="event-details mb-4">
            <div className="d-flex align-items-center mb-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-2" />
              <span className="text-muted">{location}</span>
            </div>
          </div>

          <button className="btn btn-primary w-100 mt-auto" onClick={onJoin}>
            {joinLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export const PersonCard = ({ name, role, bio, imageUrl, socialLinks = {}, onSocialClick }) => {
  return (
    <div className="card h-100 border-0 shadow-sm">
      {imageUrl && (
        <img src={imageUrl} alt={name} className="card-img-top" style={{ height: '250px', objectFit: 'cover' }}/>
      )}
      <div className="card-body">
        <div className="team-content p-4 text-center d-flex flex-column h-100">
          <h4 className="fw-bold mb-2">{name}</h4>
          <p className="text-primary fw-semibold mb-3">{role}</p>
          <p className="text-muted mb-4 flex-grow-1">{bio}</p>
          <div className="social-links d-flex justify-content-center gap-2">
            {socialLinks.facebook && (
              <button
                type="button"
                className="btn btn-outline-primary btn-sm rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px' }} aria-label="Facebook"  onClick={onSocialClick}>
                <FontAwesomeIcon icon={faFacebookF} />
              </button>
            )}
            {socialLinks.instagram && (
              <button
                type="button"
                className="btn btn-outline-primary btn-sm rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px' }} aria-label="Instagram" onClick={onSocialClick}>
                <FontAwesomeIcon icon={faInstagram} />
              </button>
            )}
            {socialLinks.linkedin && (
              <button
                type="button"
                className="btn btn-outline-primary btn-sm rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px' }} aria-label="LinkedIn" onClick={onSocialClick}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const EventDetailCard = ({ title, date, time, meetingPoint, distance, elevation, groupSize, difficulty, descriptionParagraphs, whatToBring = [], image, orientation = 'left' }) => {
  const isImageFirst = orientation === 'left';
  const { t } = useTranslation();

  const convertGreekTimeTo24Hour = (timeStr) => {
    const match = timeStr.match(/(\d{1,2}):(\d{2})\s?(π\.μ\.|μ\.μ\.)/i);
    if (!match) return null;

    let [, hour, minute, period] = match;
    hour = parseInt(hour, 10);

    if (period === 'μ.μ.' && hour < 12) hour += 12;
    if (period === 'π.μ.' && hour === 12) hour = 0;

    return `${hour.toString().padStart(2, '0')}:${minute}`;
  };

  // Helper to build Google Calendar link
  const buildGoogleCalendarUrl = () => {
    const formatDateTime = (isoDateTimeStr) => {
      const date = new Date(isoDateTimeStr);
      if (isNaN(date)) {
        console.error('Invalid date string:', isoDateTimeStr);
        return '';
      }
      return date.toISOString().replace(/[-:]|\.\d{3}/g, '').slice(0, 15);
    };


    const [startTimeRaw, endTimeRaw] = time.split('–').map(part => part.trim());
    const startTime = convertGreekTimeTo24Hour(startTimeRaw);
    const endTime = convertGreekTimeTo24Hour(endTimeRaw);

    const start = formatDateTime(`${date}T${startTime}`);
    const end = formatDateTime(`${date}T${endTime}`);

    const url = new URL('https://www.google.com/calendar/render');
    url.searchParams.set('action', 'TEMPLATE');
    url.searchParams.set('text', title);
    url.searchParams.set('dates', `${start}/${end}`);
    url.searchParams.set('details', descriptionParagraphs.join('\n\n'));
    url.searchParams.set('location', meetingPoint);
    url.searchParams.set('sf', 'true');
    url.searchParams.set('output', 'xml');

    return url.toString();
  };

  return (
    <section className="event-detail-section mb-5">
      <div className="row align-items-start g-4">

        {/* Image */}
        <div className={`col-md-5 ${isImageFirst ? 'order-md-1' : 'order-md-2'} order-1`}>
          <img src={image} alt={title} className="img-fluid rounded event-detail-img" />
        </div>

        {/* Content */}
        <div className={`col-md-7 ${isImageFirst ? 'order-md-2' : 'order-md-1'} order-2`}>
          <div className="d-flex justify-content-between align-items-start mb-2 flex-wrap">
            <h3 className="fw-bold mb-0 me-3">{title}</h3>
            <Badge bg={getDifficultyColor(difficulty)} className="px-3 py-2">{difficulty}</Badge>
          </div>

          {/* Meta Info */}
          <div className="row mb-3 text-dark">
            <div className="col-sm-6">
              <p>
                <FontAwesomeIcon icon={faCalendarAlt} className="text-primary me-2" />
                <strong>{t('events.featureEvents.labels.date')}:</strong> {formatDate(date, 'el-GR')}
              </p>
              <p>
                <FontAwesomeIcon icon={faClock} className="text-primary me-2" />
                <strong>{t('events.featureEvents.labels.time')}:</strong> {time}
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-2" />
                <strong>{t('events.featureEvents.labels.meetingPoint')}:</strong> {meetingPoint}
              </p>
            </div>
            <div className="col-sm-6">
              <p>
                <FontAwesomeIcon icon={faRoute} className="text-primary me-2" />
                <strong>{t('events.featureEvents.labels.distance')}:</strong> {distance}
              </p>
              <p>
                <FontAwesomeIcon icon={faMountain} className="text-primary me-2" />
                <strong>{t('events.featureEvents.labels.elevation')}:</strong> {elevation}
              </p>
              <p>
                <FontAwesomeIcon icon={faUsers} className="text-primary me-2" />
                <strong>{t('events.featureEvents.labels.groupSize')}:</strong> {groupSize}
              </p>
            </div>
          </div>

          {/* Description */}
          {descriptionParagraphs.map((p, i) => (
            <p key={i} className="text-muted mb-3">{p}</p>
          ))}

          {/* What to Bring */}
          {whatToBring.length > 0 && (
            <>
              <h5 className="fw-bold mt-3 mb-2">{t('events.featureEvents.whatToBringTitle')}</h5>
              <ul className="ps-0 list-unstyled">
                {whatToBring.map((item, i) => (
                  <li key={i} className="text-dark mb-1">
                    <FontAwesomeIcon icon={faCheck} className="text-primary me-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Add to Calendar Button */}
          <div className="pt-3">
            <a
              href={buildGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-2 w-auto"
            >
              <FontAwesomeIcon icon={faCalendarPlus} />
              {t('events.featureEvents.addToCalendarButton')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
