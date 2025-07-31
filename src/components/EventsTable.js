import React from 'react';
import { Button, Table, Badge } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './EventsTable.css';

const getDifficultyColor = (difficulty = '') => {
  const normalized = difficulty.trim().toLowerCase();
  switch (normalized) {
    case 'easy':
    case 'εύκολη':
      return 'success';
    case 'moderate':
    case 'μέτρια':
      return 'warning';
    case 'challenging':
    case 'δύσκολη':
    case 'hard':
      return 'danger';
    default:
      return 'success'; 
  }
};

const EventsTable = ({ events }) => {
  const { t } = useTranslation();

  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="events-table-container table-responsive">
      <Table hover className="events-table mb-0">
        <thead>
          <tr>
            <th>{t('events.calendar.table.date')}</th>
            <th>{t('events.calendar.table.event')}</th>
            <th>{t('events.calendar.table.location')}</th>
            <th>{t('events.calendar.table.difficulty')}</th>
            <th>{t('events.calendar.table.duration')}</th>
            <th>{t('events.calendar.table.action')}</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td>{event.date}</td>
              <td>
                <a href={event.link}>{event.name}</a>
              </td>
              <td>{event.location}</td>
              <td>
                <Badge bg={getDifficultyColor(event.difficulty)}>
                  {event.difficulty}
                </Badge>
              </td>
              <td>{event.duration}</td>
              <td>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => scrollTo(event.id)}
                >
                  {t('events.calendar.table.details')}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EventsTable;
