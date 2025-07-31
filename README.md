# Hiking Syros Team – React Web Application

## Overview
Hiking Syros Team is a responsive, multilingual single-page application built with React to showcase hiking trails, upcoming events, photo galleries, and contact details for hikers visiting Syros Island.

The platform provides a seamless user experience, combining dynamic UI components with internationalization support for both English and Greek.

**[Live Site – Visit the Website](https://nightdragon2000.github.io/Syros-Hiking-Team)**

## Features

### Global Layout
- Responsive **Navbar** with language switcher and animated menu
- **Hero Section** with background image, overlay, and call-to-action buttons
- **Footer** with logo, slogan, navigation links, and social icons

### Reusable UI Components
- `FeatureCard`, `TrailCard`, `EventCard`, `PersonCard`, and `EventDetailCard` (with Google Calendar integration)
- **EventsTable**: Interactive table view of upcoming events with smooth scrolling to details
- **UnderConstructionModal**: Placeholder modal for upcoming features

### Pages
- **Home**: Hero banner with featured trails and upcoming events
- **Trails**: Filterable and sortable trail listings
- **Events**: Calendar overview with detailed event sections
- **Gallery**: Photo gallery with category filters and “share your photo” form
- **About**: Team story, mission, and member profiles
- **Contact**: Contact cards, validated form, and embedded map

### Internationalization
- Full translation support with `react-i18next` for English and Greek

### Design & UX
- Built using **React Bootstrap** grid and components
- Font Awesome icons throughout

## System Architecture
- **Framework**: React (Create React App)
- **Routing**: React Router DOM
- **Styling**: React Bootstrap & Bootstrap 5
- **Internationalization**: react-i18next
- **Icons**: Font Awesome
- **Additional Libraries**:
  - react-router-hash-link
  - Local static data (trails, events, gallery)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or Yarn

### Setup
```bash
git clone https://github.com/afroditikalantzi/Syros-Hiking-Team.git
cd Syros-Hiking-Team
npm install
npm start
```
App will be available at: [http://localhost:3000](http://localhost:3000)
