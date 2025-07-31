import React from 'react';
import Hero from '../components/Hero';
import EventsTable from '../components/EventsTable';
import { EventDetailCard } from '../components/Card';
import { faCalendarCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Events() {
  const { t } = useTranslation();

  const calendarKeys = ['event1', 'event2', 'event3'];
  const featuredKeys = ['event1', 'event2', 'event3'];

  // Pull in the translated data *and* stash the key as `id`
  const calendarEvents = calendarKeys.map(key => {
    const data = t(`events.calendar.data.${key}`, { returnObjects: true });
    return { ...data, id: key };
  });
  const featuredEvents = featuredKeys.map(key => {
    const data = t(`events.featureEvents.data.${key}`, { returnObjects: true });
    return { ...data, id: key };
  });

  return (
    <div>
      {/* Hero Section */}
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=2070&q=80"
        title={t('events.heroTitle')}
        subtitle={t('events.heroSubtitle')}
        primaryButtonIcon={faCalendarCheck}
        primaryButtonHref="#calendar"
        primaryButtonText={t('events.heroPrimaryButton')}
        secondaryButtonIcon={faStar}
        secondaryButtonHref="#featured-events"
        secondaryButtonText={t('events.heroSecondaryButton')}
      />

      {/* Calendar Section */}
      <section id="calendar">
        <Container className="py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              {t('events.calendar.sectionTitle')}
            </h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              {t('events.calendar.sectionSubtitle')}
            </p>
          </div>
          <EventsTable events={calendarEvents} />
        </Container>
      </section>

      {/* Featured Events Section */}
      <section id="featured-events">
        <Container className="py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              {t('events.featureEvents.sectionTitle')}
            </h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              {t('events.featureEvents.sectionSubtitle')}
            </p>
          </div>

          {/* Wrap each card in a div with the matching id */}
          {featuredEvents.map(event => (
            <div id={event.id} key={event.id} className="mb-5">
              <EventDetailCard
                title={event.title}
                date={event.date}
                time={event.time}
                meetingPoint={event.meetingPoint}
                distance={event.distance}
                elevation={event.elevation}
                groupSize={event.groupSize}
                difficulty={event.difficulty}
                descriptionParagraphs={event.descriptionParagraphs}
                whatToBring={event.whatToBring}
                image={event.image}
                orientation={featuredKeys.indexOf(event.id) % 2 === 0 ? 'left' : 'right'}
              />
            </div>
          ))}
        </Container>
      </section>
    </div>
  );
}

export default Events;
