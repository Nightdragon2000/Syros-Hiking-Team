import React, { useState } from 'react';
import Hero from '../components/Hero';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { TrailCard, FeatureCard } from '../components/Card';
import { faSun, faHiking, faInfoCircle, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import UnderConstructionModal from "../components/UnderConstructionModal";
import trailsData from '../data/trailsData';

function Trails() {
  const { t } = useTranslation();

  const [filters, setFilters] = useState({
    difficulty: 'all',
    duration: 'any',
    region: 'all'
  });

  const [sortBy, setSortBy] = useState('default');
  const [showModal, setShowModal] = useState(false);

  const filterOptions = {
    difficulty: [
      { value: 'all', label: t('trails.filters.difficulty.all') },
      { value: 'easy', label: t('trails.filters.difficulty.easy') },
      { value: 'moderate', label: t('trails.filters.difficulty.moderate') },
      { value: 'hard', label: t('trails.filters.difficulty.hard') }
    ],
    duration: [
      { value: 'any', label: t('trails.filters.duration.any') },
      { value: 'short', label: t('trails.filters.duration.short') },
      { value: 'medium', label: t('trails.filters.duration.medium') },
      { value: 'long', label: t('trails.filters.duration.long') }
    ],
    region: [
      { value: 'all', label: t('trails.filters.region.all') },
      { value: 'north', label: t('trails.filters.region.north') },
      { value: 'central', label: t('trails.filters.region.central') },
      { value: 'south', label: t('trails.filters.region.south') }
    ]
  };

  const sortOptions = [
    { value: 'default', label: t('trails.sort.default') },
    { value: 'distance-asc', label: t('trails.sort.distanceAsc') },
    { value: 'distance-desc', label: t('trails.sort.distanceDesc') },
    { value: 'duration-asc', label: t('trails.sort.durationAsc') },
    { value: 'duration-desc', label: t('trails.sort.durationDesc') },
    { value: 'alpha-asc', label: t('trails.sort.alphaAsc') },
    { value: 'alpha-desc', label: t('trails.sort.alphaDesc') }
  ];

  const features = [
    {
      icon: faSun,
      titleKey: 'trails.features.card1.title',
      descKey: 'trails.features.card1.description'
    },
    {
      icon: faHiking,
      titleKey: 'trails.features.card2.title',
      descKey: 'trails.features.card2.description'
    },
    {
      icon: faInfoCircle,
      titleKey: 'trails.features.card3.title',
      descKey: 'trails.features.card3.description'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleCardAction = () => {
    setShowModal(true);
  };

  const filteredTrails = trailsData.filter(trail =>
    (filters.difficulty === 'all' || filters.difficulty === trail.difficulty) &&
    (filters.duration === 'any' || filters.duration === trail.duration) &&
    (filters.region === 'all' || filters.region === trail.region)
  );

  const sortedTrails = [...filteredTrails].sort((a, b) => {
    switch (sortBy) {
      case 'distance-asc': return a.distanceValue - b.distanceValue;
      case 'distance-desc': return b.distanceValue - a.distanceValue;
      case 'duration-asc': return a.durationValue - b.durationValue;
      case 'duration-desc': return b.durationValue - a.durationValue;
      case 'alpha-asc':
        return t(`trails.trails.${a.key}.title`).localeCompare(t(`trails.trails.${b.key}.title`));
      case 'alpha-desc':
        return t(`trails.trails.${b.key}.title`).localeCompare(t(`trails.trails.${a.key}.title`));
      default:
        return 0;
    }
  });
  return (
    <div>
      {/* Hero Section */}
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=2070&q=80"
        title={t('trails.heroTitle')}
        subtitle={t('trails.heroSubtitle')}
        primaryButtonIcon={faMapMarkedAlt}
        primaryButtonHref="#trails-list"
        primaryButtonText={t('trails.heroPrimaryButton')}
        secondaryButtonIcon={faInfoCircle}
        secondaryButtonHref="#tips"
        secondaryButtonText={t('trails.heroSecondaryButton')}
      />

      {/* Filters Section */}
      <section className="py-5">
        <Container>
          <div className="p-4 p-md-5 bg-white rounded-4 shadow-sm">
            <h3 className="fw-bold mb-4">{t('trails.filters.sectionTitle')}</h3>
            <Row className="g-4 align-items-end">
              {Object.keys(filterOptions).map((field) => (
                <Col md={4} key={field}>
                  <Form.Label>{t(`trails.filters.${field}.label`)}</Form.Label>
                  <Form.Select
                    name={field}
                    value={filters[field]}
                    onChange={handleChange}
                  >
                    {filterOptions[field].map(opt => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </Form.Select>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>

      {/* Trails List */}
      <section id="trails-list" className="container py-5 ">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold mb-0">{t('trails.trails.sectionTitle')}</h3>
          <div className="d-flex align-items-center">
            <span className="me-2">{t('trails.sort.label')}</span>
            <Form.Select
              style={{ width: '200px' }}
              value={sortBy}
              onChange={handleSortChange}
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </Form.Select>
          </div>
        </div>

        <div className="row g-4">
          {sortedTrails.map(trail => (
            <div className="col-lg-4 col-md-6" key={trail.id}>
              <TrailCard
                title={t(`trails.trails.${trail.key}.title`)}
                description={t(`trails.trails.${trail.key}.description`)}
                image={trail.imageUrl}
                difficulty={t(`trails.trails.${trail.key}.difficulty`)}
                distance={t(`trails.trails.${trail.key}.distance`)}
                elevation={t(`trails.trails.${trail.key}.elevation`)}
                rating={trail.rating}
                duration={t(`trails.trails.${trail.key}.duration`)}
                startLocation={t(`trails.trails.${trail.key}.start`)}
                trailType={t(`trails.trails.${trail.key}.trailType`)}
                bestSeasons={t(`trails.trails.${trail.key}.season`)}
                exploreLabel={t('trails.trails.exploreBtn')}
                onExplore={handleCardAction}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="tips" className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">{t('trails.features.sectionTitle')}</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              {t('trails.features.sectionSubtitle')}
            </p>
          </div>
          <Row className="g-4">
            {features.map((feat, idx) => (
              <Col lg={4} md={6} key={idx}>
                <FeatureCard
                  icon={feat.icon}
                  title={t(feat.titleKey)}
                  description={t(feat.descKey)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <UnderConstructionModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default Trails;
