import React,{ useState } from 'react';
import Hero from '../components/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import { faSeedling, faHeart, faShield, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FeatureCard, PersonCard } from '../components/Card';
import { faUsers, faLeaf, } from '@fortawesome/free-solid-svg-icons';
import UnderConstructionModal from "../components/UnderConstructionModal";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const handleCardAction = () => {
    setShowModal(true);
  };

  const storyHighlights = [
    {
      icon: faSeedling,
      titleKey: 'about.story.beginningTitle',
      subtitleKey: 'about.story.beginningSubtitle',
      textKey: 'about.story.beginningText',
      bgClass: 'bg-primary'
    },
    {
      icon: faHeart,
      titleKey: 'about.story.missionTitle',
      subtitleKey: 'about.story.missionSubtitle',
      textKey: 'about.story.missionText',
      bgClass: 'bg-success'
    }
  ];

  const features = [
    {
      icon: faLeaf,
      titleKey: 'about.features.card1.title',
      descKey: 'about.features.card1.description'
    },
    {
      icon: faUsers,
      titleKey: 'about.features.card2.title',
      descKey: 'about.features.card2.description'
    },
    {
      icon: faShield,
      titleKey: 'about.features.card3.title',
      descKey: 'about.features.card3.description'
    }
  ];

  const teamMembers = [
    {
      nameKey: 'about.team.members.nikos.name',
      roleKey: 'about.team.members.nikos.role',
      bioKey: 'about.team.members.nikos.bio',
      imageUrl: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0',
      socialLinks: { facebook: '#', instagram: '#', linkedin: '#' }
    },
    {
      nameKey: 'about.team.members.maria.name',
      roleKey: 'about.team.members.maria.role',
      bioKey: 'about.team.members.maria.bio',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0',
      socialLinks: { facebook: '#', instagram: '#' }
    },
    {
      nameKey: 'about.team.members.dimitris.name',
      roleKey: 'about.team.members.dimitris.role',
      bioKey: 'about.team.members.dimitris.bio',
      imageUrl: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0',
      socialLinks: { instagram: '#', linkedin: '#' }
    }
  ];

  const yearsActive = new Date().getFullYear() - 2005;


  return (
    <div>
      {/* Hero Section */}
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center"
        title={t('about.heroTitle')}
        subtitle={t('about.heroSubtitle')}
        primaryButtonIcon={faBookOpen}
        primaryButtonHref="#our-story"
        primaryButtonText={t('about.heroPrimaryButton')}
        secondaryButtonIcon={faUsers}
        secondaryButtonHref="#team"
        secondaryButtonText={t('about.heroSecondaryButton')}
      />

      {/* Our Story Section */}
      <section id="our-story" className="py-5">
        <Container>
          {/* Section Header */}
          <Row className="text-center mb-5">
            <Col lg={{ span: 8, offset: 2 }}>
              <h2 className="display-5 fw-bold">
                {t('about.story.sectionTitle')}
              </h2>
              <p className="text-muted">
                {t('about.story.sectionSubtitle')}
              </p>
            </Col>
          </Row>

          <Row className="align-items-center g-5">
            {/* Text Highlights */}
            <Col lg={6}>
              {storyHighlights.map((sh, idx) => (
                <div key={idx} className="mb-4">
                  <Row className="align-items-center mb-3">
                    <Col xs="auto">
                      <div
                        className={`${sh.bgClass} text-white rounded-circle d-flex align-items-center justify-content-center`}
                        style={{ width: 50, height: 50 }}
                      >
                        <FontAwesomeIcon icon={sh.icon} />
                      </div>
                    </Col>
                    <Col>
                      <h4 className="fw-bold mb-1">{t(sh.titleKey)}</h4>
                      <p className="text-muted mb-0">{t(sh.subtitleKey)}</p>
                    </Col>
                  </Row>
                  <p>{t(sh.textKey)}</p>
                </div>
              ))}
            </Col>

            {/* Image + Stats */}
            <Col lg={6} className="position-relative">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center"
                alt={t('about.story.imageAlt')}
                className="img-fluid rounded-4 shadow-lg"
              />
              <div
                className="position-absolute bottom-0 start-0 mb-3 ms-5 bg-white rounded-3 p-3 shadow"
                style={{ minWidth: 200 }}
              >
                <Row className="text-center">
                  <Col>
                    <div className="fw-bold text-primary fs-4">{yearsActive}+</div>
                    <div className="small text-muted">{t('about.story.stats.years')}</div>
                  </Col>
                  <Col>
                    <div className="fw-bold text-primary fs-4">20+</div>
                    <div className="small text-muted">{t('about.story.stats.trails')}</div>
                  </Col>
                  <Col>
                    <div className="fw-bold text-primary fs-4">200+</div>
                    <div className="small text-muted">{t('about.story.stats.hikers')}</div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={{ span: 8, offset: 2 }}>
              <h2 className="display-5 fw-bold">
                {t('about.features.sectionTitle')}
              </h2>
              <p className="text-muted">
                {t('about.features.sectionSubtitle')}
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {features.map((feat, idx) => (
              <Col key={idx} lg={4} md={6}>
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

      {/* Team Section */}
      <section id="team" className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={{ span: 8, offset: 2 }}>
              <h2 className="display-5 fw-bold">
                {t('about.team.sectionTitle')}
              </h2>
              <p className="text-muted">
                {t('about.team.sectionSubtitle')}
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {teamMembers.map((member, idx) => (
              <Col key={idx} lg={4} md={6}>
                <PersonCard
                  name={t(member.nameKey)}
                  role={t(member.roleKey)}
                  bio={t(member.bioKey)}
                  imageUrl={member.imageUrl}
                  socialLinks={member.socialLinks}
                  onSocialClick={handleCardAction}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <UnderConstructionModal show={showModal} onClose={() => setShowModal(false)} />
    </div >
  );
};

export default About;