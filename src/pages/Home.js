import React from 'react'
import { useState } from 'react';
import Hero from '../components/Hero';
import { FeatureCard, TrailCard, EventCard } from '../components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain, faUsers, faLeaf, faRoute, faCalendar, faMap, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UnderConstructionModal from "../components/UnderConstructionModal";
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);

  const handleCardAction = () => {
    setShowModal(true);
  };

  const features = [
    { icon: faMountain, titleKey: 'home.features.card1.title', descKey: 'home.features.card1.description' },
    { icon: faUsers, titleKey: 'home.features.card2.title', descKey: 'home.features.card2.description' },
    { icon: faLeaf, titleKey: 'home.features.card3.title', descKey: 'home.features.card3.description' },
  ];

  const featuredTrails = [
    {
      key: 'trail1',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center',
      rating: '4.8'
    },
    {
      key: 'trail2',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center',
      rating: '4.9'
    },
    {
      key: 'trail3',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center',
      rating: '4.7'
    }
  ];

  const events = [
    {
      key: 'event1',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=300&fit=crop&crop=center'
    },
    {
      key: 'event2',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=300&fit=crop&crop=center'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=2070&q=80"
        title={t('home.heroTitle')}
        subtitle={t('home.heroSubtitle')}
        primaryButtonIcon={faRoute}
        primaryButtonHref="/#home-route"
        primaryButtonText={t('home.heroPrimaryButton')}
        secondaryButtonIcon={faCalendar}
        secondaryButtonHref="/#home-events"
        secondaryButtonText={t('home.heroSecondaryButton')}
      />

      {/* Features Section */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {features.map((f, idx) => (
              <Col key={idx} lg={4} md={6}>
                <FeatureCard
                  icon={f.icon}
                  title={t(f.titleKey)}
                  description={t(f.descKey)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured Trails Section */}
      <section id="home-route" className="py-5">
        <Container>
          {/* Section Header */}
          <Row className="text-center mb-5">
            <Col lg={{ span: 8, offset: 2 }}>
              <h2 className="display-5 fw-bold mb-3">
                {t('home.trails.sectionTitle')}
              </h2>
              <p className="text-muted">
                {t('home.trails.sectionSubtitle')}
              </p>
            </Col>
          </Row>

          {/* Trail Cards */}
          <Row className="g-4">
            {featuredTrails.map((trail, idx) => (
              <Col key={idx} lg={4} md={6}>
                <TrailCard
                  title={t(`home.trails.${trail.key}.title`)}
                  description={t(`home.trails.${trail.key}.description`)}
                  image={trail.image}
                  difficulty={t(`home.trails.${trail.key}.difficulty`)}
                  distance={t(`home.trails.${trail.key}.distance`)}
                  elevation={t(`home.trails.${trail.key}.elevation`)}
                  rating={trail.rating}
                  duration={t(`home.trails.${trail.key}.duration`)}
                  startLocation={t(`home.trails.${trail.key}.start`)}
                  trailType={t(`home.trails.${trail.key}.trailType`)}
                  bestSeasons={t(`home.trails.${trail.key}.season`)}
                  exploreLabel={t('home.trails.exploreBtn')}
                  onExplore={handleCardAction}
                />
              </Col>
            ))}
          </Row>

          {/* View All Trails Button */}
          <div className="text-center mt-5">
            <Button as={Link} to="/trails" variant="outline-primary" size="lg" onClick={() => window.scrollTo(0, 0)}>
              <FontAwesomeIcon icon={faMap} className="me-2" />
              {t('home.trails.viewAllButton')}
            </Button>
          </div>
        </Container>
      </section>

      {/* Upcoming Events Section */}
      <section id="home-events" className="py-5">
        <Container>
          {/* Section Header */}
          <Row className="text-center mb-5">
            <Col lg={{ span: 8, offset: 2 }}>
              <h2 className="display-5 fw-bold mb-3">
                {t('home.events.sectionTitle')}
              </h2>
              <p className="text-muted">
                {t('home.events.sectionSubtitle')}
              </p>
            </Col>
          </Row>

          {/* Event Cards */}
          <Row className="g-4">
            {events.map((e, idx) => (
              <Col key={idx} lg={6}>
                <EventCard
                  title={t(`home.events.${e.key}.title`)}
                  description={t(`home.events.${e.key}.description`)}
                  date={t(`home.events.${e.key}.date`)}
                  time={t(`home.events.${e.key}.time`)}
                  location={t(`home.events.${e.key}.location`)}
                  participants={t(`home.events.${e.key}.participants`)}
                  image={e.image}
                  difficulty={t(`home.events.${e.key}.difficulty`)}
                  joinLabel={t('home.events.joinButton')}
                  onJoin={handleCardAction}
                />
              </Col>
            ))}
          </Row>

          {/* View All Events Button */}
          <div className="text-center mt-5">
          <Button as={Link} to="/events" variant="outline-primary" size="lg" onClick={() => window.scrollTo(0, 0)}>
              <FontAwesomeIcon icon={faCalendarPlus} className="me-2" />
              {t('home.events.viewAllButton')}
            </Button>
          </div>
        </Container>
      </section>

      <UnderConstructionModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default Home;