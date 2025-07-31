import React, { useState } from 'react'
import Hero from '../components/Hero'
import { Container, Row, Col, Form, Button, Accordion, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faPhone, faMapMarkerAlt, faEnvelope, faUser, faTag } from '@fortawesome/free-solid-svg-icons'
import UnderConstructionModal from "../components/UnderConstructionModal";
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()

  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      {/** Hero Section **/}
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=2070&q=80"
        title={t('contact.heroTitle')}
        subtitle={t('contact.heroSubtitle')}
        primaryButtonIcon={faPaperPlane}
        primaryButtonText={t('contact.heroPrimaryButton')}
        primaryButtonHref="#contact-form"
        secondaryButtonIcon={faPhone}
        secondaryButtonText={t('contact.heroSecondaryButton')}
        secondaryButtonHref="#contact-cards"
      />

      {/** Contact Cards **/}
      <section id="contact-cards" className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">{t('contact.cards.sectionTitle')}</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: 600 }}>
              {t('contact.cards.sectionSubtitle')}
            </p>
          </div>
          <Row className="g-4">
            <Col md={4}>
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  size="2x"
                  className="text-primary mb-3"
                />
                <h5 className="fw-bold mb-2">{t('contact.cards.visit.title')}</h5>
                <p className="text-muted mb-1">{t('contact.cards.visit.line1')}</p>
                <p className="text-muted mb-3">{t('contact.cards.visit.line2')}</p>
                <Button
                  variant="outline-primary"
                  className="btn-sm d-block mx-auto"
                  style={{ maxWidth: 140 }}
                  onClick={() => setShowModal(true)}
                >
                  {t('contact.cards.visit.mapButton')}
                </Button>

              </div>
            </Col>

            <Col md={4}>
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <FontAwesomeIcon
                  icon={faPhone}
                  size="2x"
                  className="text-primary mb-3"
                />
                <h5 className="fw-bold mb-2">{t('contact.cards.call.title')}</h5>
                <p className="text-muted mb-1">
                  {t('contact.cards.call.phoneLabel')}: {t('contact.cards.call.phone')}
                </p>
                <p className="text-muted mb-3">{t('contact.cards.call.hours')}</p>
                <Button
                  variant="outline-primary"
                  href={`tel:${t('contact.cards.call.phone')}`}
                  className="btn-sm d-block mx-auto"
                  style={{ maxWidth: 140 }}
                  onClick={e => {
                    e.preventDefault();
                    setShowModal(true);
                  }}
                >
                  {t('contact.cards.call.callButton')}
                </Button>
              </div>
            </Col>

            <Col md={4}>
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className="text-primary mb-3"
                />
                <h5 className="fw-bold mb-2">{t('contact.cards.email.title')}</h5>
                <p className="text-muted mb-1">
                  {t('contact.cards.email.generalLabel')}:<br />
                  <a href={`mailto:${t('contact.cards.email.general')}`}>
                    {t('contact.cards.email.general')}
                  </a>
                </p>
                <p className="text-muted mb-3">
                  {t('contact.cards.email.eventsLabel')}:<br />
                  <a href={`mailto:${t('contact.cards.email.events')}`}>
                    {t('contact.cards.email.events')}
                  </a>
                </p>
                <Button
                  variant="outline-primary"
                  href={`mailto:${t('contact.cards.email.general')}`}
                  className="btn-sm d-block mx-auto"
                  style={{ maxWidth: 140 }}
                  onClick={e => {
                    e.preventDefault();
                    setShowModal(true);
                  }}
                >
                  {t('contact.cards.email.emailButton')}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/** Form + Map **/}
      <section id="contact-form" className="py-5">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <div className="card border-0 shadow-sm p-4">
                <h3 className="fw-bold mb-3">{t('contact.form.title')}</h3>
                {/* new intro paragraph */}
                <p className="text-muted mb-4">{t('contact.form.introText')}</p>

                <Form
                  onSubmit={e => {
                    e.preventDefault();
                    setShowModal(true);
                  }}
                >
                  {/* Name */}
                  <Row className="mb-3">
                    <Col>
                      <Form.Label className="fw-bold">{t('contact.form.nameLabel')}</Form.Label>
                      <InputGroup>
                        <InputGroup.Text className="bg-light">
                          <FontAwesomeIcon icon={faUser} />
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder={t('contact.form.namePlaceholder')}
                          required
                        />
                      </InputGroup>
                    </Col>
                  </Row>

                  {/* Email */}
                  <Row className="mb-3">
                    <Col>
                      <Form.Label className="fw-bold">{t('contact.form.emailLabel')}</Form.Label>
                      <InputGroup>
                        <InputGroup.Text className="bg-light">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </InputGroup.Text>
                        <Form.Control
                          type="email"
                          placeholder={t('contact.form.emailPlaceholder')}
                          required
                        />
                      </InputGroup>
                    </Col>
                  </Row>

                  {/* Subject */}
                  <Row className="mb-3">
                    <Col>
                      <Form.Label className="fw-bold">{t('contact.form.subjectLabel')}</Form.Label>
                      <InputGroup>
                        <InputGroup.Text className="bg-light">
                          <FontAwesomeIcon icon={faTag} />
                        </InputGroup.Text>
                        <Form.Select required>
                          <option value="">
                            {t('contact.form.subjectPlaceholder')}
                          </option>
                          <option value="general">{t('contact.form.subject.general')}</option>
                          <option value="join">{t('contact.form.subject.join')}</option>
                          <option value="other">{t('contact.form.subject.other')}</option>
                        </Form.Select>
                      </InputGroup>
                    </Col>
                  </Row>

                  {/* Message */}
                  <Row className="mb-3">
                    <Col>
                      <Form.Label className="fw-bold">{t('contact.form.messageLabel')}</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder={t('contact.form.messagePlaceholder')}
                        required
                      />
                    </Col>
                  </Row>

                  {/* Consent Checkbox with link */}
                  <Form.Group className="mb-4" controlId="contactConsent">
                    <Form.Check
                      type="checkbox"
                      label={
                        <span>
                          I agree to the{' '}
                          <a
                            href="/privacy-policy"
                            className="text-primary text-decoration-underline"
                            onClick={e => {
                              e.preventDefault()
                              setShowModal(true)
                            }}
                          >
                            {t('contact.form.privacyPolicy')}
                          </a>{' '}
                          and consent to the processing of my personal data.
                        </span>
                      }
                      required
                    />
                  </Form.Group>

                  <Button type="submit" variant="primary">
                    <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                    {t('contact.form.submitButton')}
                  </Button>
                </Form>
              </div>
            </Col>

            <Col lg={6}>
              <div className="card border-0 shadow-sm p-4">
                <h3 className="fw-bold mb-4">{t('contact.map.title')}</h3>
                <p className="text-muted mb-3">{t('contact.map.subtitle')}</p>

                {/* new map container */}
                <div className="map-container rounded shadow-sm overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25356.97613779196!2d24.93136688290468!3d37.44458738313295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a6f9f8f9034473%3A0x6d0b1338603e3d19!2sErmoupoli%2C%20Greece!5e0!3m2!1sen!2sus!4v1623158936547!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Syros Hiking Team Office Location"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/** FAQ Section **/}
      <section id="faq" className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">{t('contact.faq.title')}</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: 600 }}>
              {t('contact.faq.subtitle')}
            </p>
          </div>

          {/* flush removes borders between items; inline style overrides focus shadow */}
          <Accordion
            flush
            className="rounded p-3"
            style={{ '--bs-accordion-btn-focus-box-shadow': 'none' }}
          >
            {t('contact.faq.items', { returnObjects: true }).map((item, idx) => (
              <Accordion.Item eventKey={String(idx)} key={idx}>
                <Accordion.Header>{item.question}</Accordion.Header>
                <Accordion.Body>{item.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>
      <UnderConstructionModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}

export default Contact
