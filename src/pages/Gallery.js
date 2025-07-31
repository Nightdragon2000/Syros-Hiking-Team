import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faMountain, faRoute, faCalendar, faLeaf, faUsers, faCamera, faGlobe, faAward, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import Hero from '../components/Hero';
import { useTranslation } from 'react-i18next';

export default function Gallery() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const sharedPhotoUrl = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&crop=center";

  const categories = [
    { key: 'all', icon: faImages, label: t('gallery.categories.all') },
    { key: 'landscapes', icon: faMountain, label: t('gallery.categories.landscapes') },
    { key: 'trails', icon: faRoute, label: t('gallery.categories.trails') },
    { key: 'events', icon: faCalendar, label: t('gallery.categories.events') },
    { key: 'floraFauna', icon: faLeaf, label: t('gallery.categories.floraFauna') },
    { key: 'people', icon: faUsers, label: t('gallery.categories.people') }
  ];

  const galleryItems = [
    { id: '1', category: 'landscapes', src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center", alt: '', caption: t('gallery.items.1.caption') },
    { id: '2', category: 'landscapes', src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center", alt: '', caption: t('gallery.items.2.caption') },
    { id: '3', category: 'trails', src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center", alt: '', caption: t('gallery.items.3.caption') },
    { id: '4', category: 'trails', src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center", alt: '', caption: t('gallery.items.4.caption') },
    { id: '5', category: 'events', src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center", alt: '', caption: t('gallery.items.5.caption') },
    { id: '6', category: 'events', src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center", alt: '', caption: t('gallery.items.6.caption') },
    { id: '7', category: 'floraFauna', src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center", alt: '', caption: t('gallery.items.7.caption') },
    { id: '8', category: 'people', src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center", alt: '', caption: t('gallery.items.8.caption') },
    { id: '9', category: 'people', src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center", alt: '', caption: t('gallery.items.9.caption') }
  ];

  const shareFeatures = [
    { icon: faCamera, title: t('gallery.sharePhotos.feature1.title'), text: t('gallery.sharePhotos.feature1.text') },
    { icon: faAward, title: t('gallery.sharePhotos.feature2.title'), text: t('gallery.sharePhotos.feature2.text') },
    { icon: faGlobe, title: t('gallery.sharePhotos.feature3.title'), text: t('gallery.sharePhotos.feature3.text') }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center"
        title={t('gallery.heroTitle')}
        subtitle={t('gallery.heroSubtitle')}
        primaryButtonIcon={faImages}
        primaryButtonHref="#gallery"
        primaryButtonText={t('gallery.heroPrimaryButton')}
        secondaryButtonIcon={faShareAlt}
        secondaryButtonHref="#share-photos"
        secondaryButtonText={t('gallery.heroSecondaryButton')}
      />

      {/* Gallery Section */}
      <section id="gallery">
        <Container className="py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">{t('gallery.sectionTitle')}</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              {t('gallery.sectionSubtitle')}
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
              {categories.map(cat => (
                <Button
                  key={cat.key}
                  variant={activeCategory === cat.key ? 'primary' : 'outline-primary'}
                  onClick={() => setActiveCategory(cat.key)}
                  className="d-flex align-items-center"
                >
                  <FontAwesomeIcon icon={cat.icon} />
                  <span className="ms-2">{cat.label}</span>
                </Button>
              ))}
            </div>
          </div>
          <Row className="g-4">
            {filteredItems.map(item => (
              <Col key={item.id} md={4}>
                <div className="gallery-item">
                  <img src={item.src} alt={item.alt} className="img-fluid rounded" />
                  <p className="mt-2 text-center">{item.caption}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Share Your Photos Section */}
      <section id="share-photos">
        <Container className="py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              {t('gallery.sharePhotos.sectionTitle')}
            </h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              {t('gallery.sharePhotos.sectionSubtitle')}
            </p>
          </div>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <p className="lead mb-4">{t('gallery.sharePhotos.sectionParagraph')}</p>
              {shareFeatures.map((f, i) => (
                <div key={i} className="d-flex align-items-center mb-3">
                  <div className="me-3 " style={{ width: 50, height: 50 }}>
                    <FontAwesomeIcon icon={f.icon} style={{
                      fontSize: '2.5rem',
                      color: '#2196f3',
                      transition: 'transform 0.3s ease',
                    }} />
                  </div>
                  <div>
                    <h5 className="mb-1 fw-bold">{f.title}</h5>
                    <p className="text-muted mb-0 small">{f.text}</p>
                  </div>
                </div>
              ))}
              <Button href="#contact" size="lg" className="rounded mt-3">
                <FontAwesomeIcon icon={faShareAlt} className="me-2" />
                {t('gallery.sharePhotos.submitButton')}
              </Button>
            </Col>
            <Col lg={6}>
              <Row className="g-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Col key={i} xs={6}>
                    <div className="position-relative overflow-hidden rounded shadow-sm">
                      <img
                        src={sharedPhotoUrl}
                        alt={`Shared Photo ${i + 1}`}
                        className="img-fluid w-100"
                        style={{ height: 200, objectFit: 'cover' }}
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
