// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            navbar: {
                home: "Home",
                about: "About Us",
                trails: "Hiking Trails",
                events: "Events",
                gallery: "Gallery",
                contact: "Contact",
                language: "Language",
                en: "English",
                gr: "Greek"
            },
            footer: {
                brand: "Syros Hiking Team",
                slogan: "Exploring Syros since 2005",
                home: "Home",
                about: "About",
                trails: "Hiking Trails",
                events: "Events",
                gallery: "Gallery",
                contact: "Contact",
                rights: "All rights reserved."
            },
            home: {
                heroTitle: "Discover Syros on Foot",
                heroSubtitle: "Experience the authentic beauty of Syros island through carefully curated hiking trails that reveal hidden gems and breathtaking panoramic views",
                heroPrimaryButton: "Explore Trails",
                heroSecondaryButton: "Join Events",

                features: {
                    card1: {
                        title: "Expert Guided Hikes",
                        description: "Join our certified guides with 15+ years of experience for safe and enriching hiking adventures across Syros' diverse landscapes.",
                    },
                    card2: {
                        title: "Vibrant Community",
                        description: "Connect with like-minded adventurers in our welcoming community of 500+ active members who share a passion for nature.",
                    },
                    card3: {
                        title: "Nature Immersion",
                        description: "Discover Syros' unique Mediterranean ecosystem, rare endemic plants, and pristine landscapes away from the crowds.",
                    }
                },


                trails: {
                    sectionTitle: "Featured Hiking Trails",
                    sectionSubtitle: "Explore our most beloved trails, each offering unique perspectives of Syros' natural beauty and cultural heritage.",
                    viewAllButton: "View All Trails",
                    exploreBtn: "Explore Trail",

                    trail1: {
                        title: "Ano Syros Medieval Trail",
                        description: "This popular trail takes you from Ermoupoli up to the medieval settlement of Ano Syros, offering panoramic views of the Aegean Sea.",
                        difficulty: "Easy",
                        distance: "3.5 km",
                        elevation: "200 m",
                        duration: "2h",
                        trailType: "Loop",
                        start: "Ermoupoli",
                        season: "Spring, Fall"
                    },

                    trail2: {
                        title: "Kini to Delfini Coastal Path",
                        description: "A stunning coastal trail connecting two of Syros' most picturesque beaches with crystal-clear waters and dramatic cliffs.",
                        difficulty: "Moderate",
                        distance: "3 km",
                        elevation: "120 m",
                        duration: "3h",
                        trailType: "One-way",
                        start: "Kini Beach",
                        season: "Summer, Fall"
                    },

                    trail3: {
                        title: "Ermoupoli Heritage Trail",
                        description: "Discover the architectural and cultural heritage of Syros' neoclassical capital with its elegant mansions and historic squares.",
                        difficulty: "Easy",
                        distance: "2.5 km",
                        elevation: "80 m",
                        duration: "1.5h",
                        trailType: "Loop",
                        start: "Ermoupoli Town Hall",
                        season: "Year-round"
                    },

                },

                events: {
                    sectionTitle: "Upcoming Adventures",
                    sectionSubtitle: "Join our community events and discover Syros with fellow hiking enthusiasts.",
                    viewAllButton: "View All Events",
                    joinButton: "Join This Adventure",

                    event1: {
                        title: "Full Moon Hike to Agia Pakou",
                        description: "Experience the magic of Syros under the full moon with this special evening hike to the historic Agia Pakou chapel, featuring stunning night views.",
                        date: "June 24, 2024",
                        time: "19:30",
                        location: "Starting point: Ermoupoli Town Square",
                        difficulty: "Easy",
                        participants: "Max 15 participants"
                    },

                    event2: {
                        title: "Family-Friendly Hike & Picnic",
                        description: "A gentle hike perfect for all ages, followed by a traditional Greek picnic featuring local Syros delicacies and homemade treats.",
                        date: "July 2, 2024",
                        time: "09:00",
                        location: "Starting point: Galissas Beach",
                        difficulty: "Easy",
                        participants: "All ages welcome"
                    }
                },


            },
            about: {
                heroTitle: "About Syros Hiking Trails",
                heroSubtitle: "Discover the passion behind our mission to showcase the natural beauty and cultural heritage of Syros through unforgettable hiking experiences",
                heroPrimaryButton: "Our Journey",
                heroSecondaryButton: "Meet the Team",

                story: {
                    sectionTitle: "The Story Behind Our Passion",
                    sectionSubtitle: "From humble beginnings to becoming Syros' premier hiking community",

                    beginningTitle: "2018 - The Beginning",
                    beginningSubtitle: "Founded by passionate local hikers",
                    beginningText: "What started as informal weekend hikes among friends has grown into a comprehensive platform that connects adventurers with the hidden gems of Syros. We believe that every trail tells a story, and every step reveals a new perspective of this beautiful Cycladic island.",

                    missionTitle: "Our Mission",
                    missionSubtitle: "Sustainable tourism & community support",
                    missionText: "Our mission is to promote sustainable tourism while preserving the natural environment and supporting local communities. Through our carefully curated trails and guided experiences, we aim to create lasting memories while fostering a deeper appreciation for Syros' natural and cultural treasures.",

                    stats: {
                        years: "Years",
                        trails: "Trails",
                        hikers: "Hikers"
                    }
                },

                features: {
                    sectionTitle: "What Drives Us Forward",
                    sectionSubtitle: "The principles that guide everything we do and shape our approach to sustainable hiking tourism",

                    card1: {
                        title: "Environmental Stewardship",
                        description: "We are committed to preserving Syros' natural beauty for future generations through responsible hiking practices and environmental education."
                    },
                    card2: {
                        title: "Community Connection",
                        description: "We foster meaningful connections between visitors and local communities, supporting local businesses and cultural traditions."
                    },
                    card3: {
                        title: "Safety First",
                        description: "Your safety is our top priority. All our trails are carefully maintained and our guides are certified in wilderness first aid."
                    }
                },

                team: {
                    sectionTitle: "Our Expert Team",
                    sectionSubtitle: "Meet the passionate individuals who make every hiking experience unforgettable.",

                    members: {
                        nikos: {
                            name: "Nikos Papadopoulos",
                            role: "Founder & Lead Guide",
                            bio: "Born and raised in Syros, Nikos has been exploring the island's trails for over 20 years."
                        },
                        maria: {
                            name: "Maria Kontou",
                            role: "Senior Naturalist",
                            bio: "Maria brings the island’s rich biodiversity to life with her insightful commentary."
                        },
                        dimitris: {
                            name: "Dimitris Antoniou",
                            role: "Adventure Photographer",
                            bio: "Dimitris captures the beauty of Syros from unique perspectives and shares it with the world."
                        }
                    }
                },
            },
            trails: {
                heroTitle: "Discover Amazing Hiking Routes",
                heroSubtitle: "Explore the most beautiful trails and paths across the magical island of Syros",
                heroPrimaryButton: "View all Trails",
                heroSecondaryButton: "Hiking Tips",

                filters: {
                    sectionTitle: "Find Your Perfect Trail",
                    difficulty: {
                        label: "Difficulty",
                        all: "All Levels",
                        easy: "Easy",
                        moderate: "Moderate",
                        hard: "Hard"
                    },
                    duration: {
                        label: "Duration",
                        any: "Any Duration",
                        short: "Short (< 2 hours)",
                        medium: "Medium (2–4 hours)",
                        long: "Long (> 4 hours)"
                    },
                    region: {
                        label: "Region",
                        all: "All Regions",
                        north: "North Syros",
                        central: "Central Syros",
                        south: "South Syros"
                    },
                },


                sort: {
                    label: "Sort by:",
                    default: "Default",
                    distanceAsc: "Distance (Short → Long)",
                    distanceDesc: "Distance (Long → Short)",
                    durationAsc: "Duration (Short → Long)",
                    durationDesc: "Duration (Long → Short)",
                    alphaAsc: "Alphabetical (A → Z)",
                    alphaDesc: "Alphabetical (Z → A)"
                },

                trails: {
                    sectionTitle: "Our Hiking Trails",
                    exploreBtn: "Explore Trail",

                    trail1: {
                        title: "Ano Syros Medieval Trail",
                        description: "This popular trail takes you from Ermoupoli up to the medieval settlement of Ano Syros, offering panoramic views of the Aegean Sea.",
                        difficulty: "Easy",
                        distance: "3.5 km",
                        elevation: "200 m",
                        duration: "2h",
                        trailType: "Loop",
                        start: "Ermoupoli",
                        season: "Spring, Fall"
                    },

                    trail2: {
                        title: "Kini to Delfini Coastal Path",
                        description: "A stunning coastal trail connecting two of Syros' most picturesque beaches with crystal-clear waters and dramatic cliffs.",
                        difficulty: "Moderate",
                        distance: "3 km",
                        elevation: "120 m",
                        duration: "3h",
                        trailType: "One-way",
                        start: "Kini Beach",
                        season: "Summer, Fall"
                    },

                    trail3: {
                        title: "Ermoupoli Heritage Trail",
                        description: "Discover the architectural and cultural heritage of Syros' neoclassical capital with its elegant mansions and historic squares.",
                        difficulty: "Easy",
                        distance: "2.5 km",
                        elevation: "80 m",
                        duration: "1.5h",
                        trailType: "Loop",
                        start: "Ermoupoli Town Hall",
                        season: "Year-round"
                    },

                    trail4: {
                        title: "Azolimnos to Vari Trail",
                        description: "This trail connects the eastern beaches of Azolimnos and Vari, taking hikers through coastal paths and rural countryside.",
                        difficulty: "Moderate",
                        distance: "7 km",
                        elevation: "250 m",
                        duration: "3.5h",
                        trailType: "One-way",
                        start: "Azolimnos Beach",
                        season: "Spring, Fall"
                    },

                    trail5: {
                        title: "Syringas Valley Trail",
                        description: "This challenging trail takes you through the remote and beautiful Syringas Valley in the northern part of Syros.",
                        difficulty: "Hard",
                        distance: "10 km",
                        elevation: "400 m",
                        duration: "5h",
                        trailType: "Loop",
                        start: "Richopo",
                        season: "Spring",
                    },

                },

                features: {
                    sectionTitle: "Hiking Tips for Syros",
                    sectionSubtitle: "Essential information to make your hiking experience safe, enjoyable, and memorable on the beautiful island of Syros.",


                    card1: {
                        title: "Weather Considerations",
                        description:
                            "\u2713 Summer (June-August): Very hot with temperatures often exceeding 30°C. Hike early morning or late afternoon and bring plenty of water.\n" +
                            "\u2713 Spring (March-May) and Fall (September-November): Ideal hiking seasons with mild temperatures and beautiful landscapes.\n" +
                            "\u2713 Winter (December-February): Mild but can be rainy and windy. Trails may be muddy and slippery.\n" +
                            "\u2713 Always check the weather forecast before setting out, especially in winter when conditions can change rapidly.",
                    },
                    card2: {
                        title: "Essential Equipment",
                        description:
                            "\u2713 Sturdy hiking shoes or boots with good grip\n" +
                            "\u2713 Hat, sunglasses, and sunscreen (essential in summer)\n" +
                            "\u2713 Sufficient water (at least 1.5 liters per person for a half-day hike)\n" +
                            "\u2713 Snacks or packed lunch\n" +
                            "\u2713 Mobile phone with emergency numbers\n" +
                            "\u2713 Basic first aid kit\n",

                    },
                    card3: {
                        title: "Local Etiquette & Safety",
                        description:
                            "\u2713 Respect private property and close any gates you pass through\n" +
                            "\u2713 Stay on marked trails to protect the natural environment\n" +
                            "\u2713 Take all trash with you - leave no trace\n" +
                            "\u2713 Be cautious of loose rocks on steep sections\n" +
                            "\u2713 Emergency number in Greece: 112\n" +
                            "\u2713 Syros Hiking Team emergency contact: +30 22810 12345\n",
                    },

                },

            },
            events: {
                heroTitle: "Upcoming Events",
                heroSubtitle: "Join us for guided hikes and special outdoor activities across the magical island of Syros",
                heroPrimaryButton: "View Calendar",
                heroSecondaryButton: "Upcoming Events",

                calendar: {
                    sectionTitle: "Upcoming Events",
                    sectionSubtitle: "Join guided hikes and unique outdoor adventures across Syros.",

                    table: {
                        date: "Date",
                        event: "Event",
                        location: "Location",
                        difficulty: "Difficulty",
                        duration: "Duration",
                        action: "Action",
                        details: "Details"
                    },

                    data: {
                        event1: {
                            date: "6 July, 2025",
                            name: "Full Moon Hike to Agia Pakou",
                            location: "Ermoupoli to Agia Pakou",
                            difficulty: "Easy",
                            duration: "3 hours",
                            link: "#"
                        },
                        event2: {
                            date: "13 July, 2025",
                            name: "Family-Friendly Hike & Picnic",
                            location: "Galissas",
                            difficulty: "Easy",
                            duration: "2.5 hours",
                            link: "#"
                        },
                        event3: {
                            date: "20 July, 2025",
                            name: "Coastal Adventure: Kini to Lotos",
                            location: "Kini Beach",
                            difficulty: "Moderate",
                            duration: "4 hours",
                            link: "#"
                        },
                    },
                },

                featureEvents: {
                    sectionTitle: "Featured Events",
                    sectionSubtitle: "Discover our most popular and unique hiking experiences designed for adventurers of all levels.",

                    addToCalendarButton: "Add to Calendar",
                    whatToBringTitle: "What to Bring",

                    labels: {
                        date: "Date",
                        time: "Time",
                        meetingPoint: "Meeting Point",
                        distance: "Distance",
                        elevation: "Elevation",
                        groupSize: "Group Size"
                    },

                    data: {
                        event1: {
                            title: "Full Moon Hike to Agia Pakou",
                            date: "6 July 2025",
                            time: "7:30 PM – 10:30 PM",
                            meetingPoint: "Miaouli Square, Ermoupoli",
                            distance: "4 km",
                            elevation: "180m",
                            groupSize: "Max 20 people",
                            difficulty: "Easy",
                            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
                            descriptionParagraphs: [
                                "Experience the magic of Syros under the full moon with this special evening hike to Agia Pakou chapel. We'll start from Ermoupoli as the sun begins to set and make our way up to one of the best viewpoints on the island.",
                                "As darkness falls, we'll be guided by the light of the full moon, creating a magical atmosphere. From Agia Pakou, we'll enjoy panoramic views of the illuminated Ermoupoli and the surrounding Aegean Sea under the moonlight.",
                                "Our guide will share stories about local traditions related to the full moon and point out constellations visible in the night sky. Don't forget to bring a camera to capture the stunning night views!"
                            ],
                            whatToBring: [
                                "Comfortable walking shoes",
                                "Water bottle",
                                "Light jacket or sweater (for evening breeze)",
                                "Camera",
                                "Headlamp or flashlight (as backup)"
                            ],
                        },

                        event2: {
                            title: "Family-Friendly Hike & Picnic",
                            date: "13 July 2025",
                            time: "10:00 AM – 2:30 PM",
                            meetingPoint: "Galissas Beach Parking",
                            distance: "3 km",
                            elevation: "50m",
                            groupSize: "No limit",
                            difficulty: "Easy",
                            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
                            descriptionParagraphs: [
                                "A gentle hike suitable for all ages, followed by a traditional Greek picnic with local products. This event is specially designed for families with children who want to enjoy nature together and introduce kids to the joy of hiking.",
                                "We'll follow an easy coastal path with beautiful views, plenty of stops for rest and exploration, and fun activities for children along the way. Our guides will engage the little ones with nature-based games, scavenger hunts, and interesting facts about local plants and animals.",
                                "The hike concludes with a delicious picnic featuring local Syros products, including cheese, olives, traditional sweets, and refreshments. Parents can relax while children play in a safe natural environment."
                            ],
                            whatToBring: [
                                "Comfortable walking shoes",
                                "Hat and sunscreen",
                                "Water bottle",
                                "Swimwear and towel (optional for beach time after)",
                                "Camera"
                            ],
                        },

                        event3: {
                            title: "Coastal Adventure: Kini to Lotos",
                            date: "20 July 2025",
                            time: "9:00 AM – 1:00 PM",
                            meetingPoint: "Kini Beach",
                            distance: "6 km",
                            elevation: "150m",
                            groupSize: "Max 10 people",
                            difficulty: "Moderate",
                            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
                            descriptionParagraphs: [
                                "Explore the stunning western coastline of Syros on this moderate hike from Kini to the secluded Lotos Beach. This trail offers some of the most beautiful coastal views on the island, with crystal-clear waters and dramatic rock formations.",
                                "The path follows the coastline, occasionally climbing up for panoramic views and then descending to hidden coves. We'll make several stops for swimming in secluded spots that are only accessible by foot. Our guide will share information about the coastal ecosystem and the geological formation of this part of the island.",
                                "The hike ends at the beautiful Lotos Beach, where we'll have time for swimming and relaxation before returning to Kini by boat."
                            ],
                            whatToBring: [
                                "Hiking shoes with good grip",
                                "Hat, sunglasses, and sunscreen",
                                "Water (at least 1.5 liters)",
                                "Swimwear and towel",
                                "Snacks",
                                "Camera (waterproof if possible)"
                            ],
                        },


                    },
                },



            },
            gallery: {
                heroTitle: "Gallery",
                heroSubtitle: "Explore stunning photos from our hiking adventures across Syros",
                heroPrimaryButton: "View All Photos",
                heroSecondaryButton: "Share Your Photos",
                sectionTitle: "Explore Our Hiking Moments",
                sectionSubtitle: "Browse through our collection of photos showcasing the stunning landscapes, memorable events, and beautiful moments from our hiking adventures on Syros island.",

                categories: {
                    all: "All Photos",
                    landscapes: "Landscapes",
                    trails: "Trails",
                    events: "Events",
                    floraFauna: "Flora & Fauna",
                    people: "People"
                },

                items: {
                    1: { caption: "Landscape 1" },
                    2: { caption: "Landscape 2" },
                    3: { caption: "Trail 1" },
                    4: { caption: "Trail 2" },
                    5: { caption: "Event 1" },
                    6: { caption: "Event 2" },
                    7: { caption: "Flora & Fauna" },
                    8: { caption: "People 1" },
                    9: { caption: "People 2" },
                },

                viewAllButton: "View All Gallery",

                sharePhotos: {
                    sectionTitle: "Share Your Hiking Photos",
                    sectionSubtitle: "Have you hiked with us and captured some beautiful moments? We'd love to feature your photos in our gallery!",
                    sectionParagraph: "Send us your best hiking photos from Syros, along with a brief description of when and where they were taken. Selected photos will be featured in our gallery and social media channels, with full credit to the photographer.",
                    submitButton: "Submit Your Photos",

                    feature1: {
                        title: "High Quality Images",
                        text: "Share your unique perspective of Syros' trails and landscapes with our community.",
                    },
                    feature2: {
                        title: "Get Featured",
                        text: "Selected photos will be showcased in our gallery and credited to you.",
                    },
                    feature3: {
                        title: "Join the Adventure",
                        text: "Your photos inspire others to explore the beauty of Syros on foot.",
                    },
                },
            },
            contact: {
                heroTitle: "Contact Us",
                heroSubtitle: "Ready to explore Syros? We're here to help you plan your next adventure",
                heroPrimaryButton: "Send Message",
                heroSecondaryButton: "Call Us",

                cards: {
                    sectionTitle: "We'd Love to Hear From You",
                    sectionSubtitle: "Whether you have questions about our hiking routes, want to join an event, or are interested in becoming a member, we're here to help.",

                    visit: {
                        title: "Visit Us",
                        line1: "Syros Hiking Team Office",
                        line2: "25 Miaouli Street, Ermoupoli, Syros 84100, Greece",
                        mapLink: "https://goo.gl/maps/your‑office‑location",
                        mapButton: "View on Map"
                    },

                    call: {
                        title: "Call Us",
                        phoneLabel: "Phone",
                        phone: "+30 22810 12345",
                        hours: "Mon–Fri: 9:00 AM – 6:00 PM\nSat: 9:00 AM – 2:00 PM",
                        callButton: "Call Now"
                    },

                    email: {
                        title: "Email Us",
                        generalLabel: "General Inquiries",
                        general: "info@syroshikingteam.gr",
                        eventsLabel: "Events & Tours",
                        events: "events@syroshikingteam.gr",
                        emailButton: "Send Email"
                    }
                },

                form: {
                    title: "Get in Touch",
                    nameLabel: "Your Name *",
                    namePlaceholder: "Enter your full name",
                    emailLabel: "Email Address *",
                    emailPlaceholder: "your@email.com",
                    subjectLabel: "Subject *",
                    subjectPlaceholder: "Choose a topic…",

                    introText:
                        "Have a question or want to join our next adventure? Drop us a message and we'll get back to you as soon as possible.",
                    privacyPolicy: "privacy policy",

                    subject: {
                        general: "General Question",
                        join: "Membership",
                        other: "Other"
                    },

                    messageLabel: "Your Message *",
                    messagePlaceholder: "Tell us how we can help you…",
                    consent: "I agree to the privacy policy and consent to the processing of my personal data.",
                    submitButton: "Send Message"
                },

                map: {
                    title: "Find Us on the Map",
                    subtitle: "Located in the heart of Ermoupoli, we’re easily accessible and ready to help you plan your Syros hiking adventure.",
                    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!…"
                },

                faq: {
                    title: "Frequently Asked Questions",
                    subtitle: "Find answers to common questions about our hiking activities, membership, and services.",
                    items: [
                        {
                            question: "How do I join a guided hike?",
                            answer: "You can join our guided hikes by simply showing up at the meeting point on the scheduled day. No booking or payment is required – it’s completely free! Anyone is welcome to join. Check our Events page for the schedule of upcoming hikes."
                        },
                        {
                            question: "What should I bring on a hike?",
                            answer: "Comfortable walking shoes, water bottle, hat and sunscreen, snacks, and a lightweight jacket for changing weather."
                        },
                        {
                            question: "How difficult are your hiking routes?",
                            answer: "Our routes range from easy coastal walks to challenging mountain trails. Each trail card shows distance, duration, and elevation gain so you can pick the best fit."
                        },
                        {
                            question: "How do I become a member of the Syros Hiking Team?",
                            answer: "Just drop us a line via this form or email events@syroshikingteam.gr. We’ll send you membership details and upcoming activities."
                        },
                        {
                            question: "Can I hike the trails on my own without a guide?",
                            answer: "Yes! All our trail maps are publicly available under Hiking Trails. Guided hikes are optional but offer local insights and safety support."
                        }
                    ]
                }
            },
        },
    },
    gr: {
        translation: {
            navbar: {
                home: "Αρχική",
                about: "Σχετικά με εμάς",
                trails: "Διαδρομές",
                events: "Εκδηλώσεις",
                gallery: "Συλλογή",
                contact: "Επικοινωνία",
                language: "Γλώσσα",
                en: "Αγγλικά",
                gr: "Ελληνικά"
            },
            footer: {
                brand: "Ομάδα Πεζοπορίας Σύρου",
                slogan: "Εξερευνούμε τη Σύρο από το 2005",
                home: "Αρχική",
                about: "Σχετικά με εμάς",
                trails: "Διαδρομές",
                events: "Εκδηλώσεις",
                gallery: "Συλλογή",
                contact: "Επικοινωνία",
                rights: "Όλα τα δικαιώματα διατηρούνται."
            },

            home: {
                // Hero Section
                heroTitle: "Ανακαλύψτε τη Σύρο με τα πόδια",
                heroSubtitle: "Ζήστε την αυθεντική ομορφιά του νησιού της Σύρου μέσα από επιλεγμένες πεζοπορικές διαδρομές που αποκαλύπτουν κρυμμένους θησαυρούς και μαγευτικές πανοραμικές θέες",
                heroPrimaryButton: "Εξερευνήστε Διαδρομές",
                heroSecondaryButton: "Συμμετοχή σε Εκδηλώσεις",

                features: {
                    card1: {
                        title: "Πεζοπορίες με Έμπειρους Ξεναγούς",
                        description: "Συμμετέχετε με πιστοποιημένους ξεναγούς με εμπειρία άνω των 15 ετών για ασφαλείς και εμπλουτισμένες πεζοπορικές περιηγήσεις στα ποικίλα τοπία της Σύρου.",
                    },
                    card2: {
                        title: "Ζωντανή Κοινότητα",
                        description: "Συνδεθείτε με άλλους λάτρεις της φύσης στην ενεργή κοινότητά μας με πάνω από 500 μέλη που μοιράζονται το ίδιο πάθος.",
                    },
                    card3: {
                        title: "Βύθιση στη Φύση",
                        description: "Ανακαλύψτε το μοναδικό μεσογειακό οικοσύστημα της Σύρου, σπάνια ενδημικά φυτά και παρθένα τοπία μακριά από τα πλήθη.",
                    }
                },


                trails: {
                    sectionTitle: "Προτεινόμενες Πεζοπορικές Διαδρομές",
                    sectionSubtitle: "Εξερευνήστε τις αγαπημένες μας διαδρομές που προσφέρουν μοναδικές οπτικές στην ομορφιά και την πολιτιστική κληρονομιά της Σύρου.",
                    viewAllButton: "Δείτε Όλες τις Διαδρομές",
                    exploreBtn: "Εξερεύνηση Διαδρομής",

                    trail1: {
                        title: "Μεσαιωνική Διαδρομή Άνω Σύρου",
                        description: "Μια δημοφιλής διαδρομή που σας οδηγεί από την Ερμούπολη στο μεσαιωνικό οικισμό της Άνω Σύρου, με πανοραμική θέα στο Αιγαίο.",
                        difficulty: "Εύκολη",
                        distance: "3.5 χλμ",
                        elevation: "200 μ",
                        duration: "2 ώρες",
                        trailType: "Κυκλική",
                        start: "Ερμούπολη",
                        season: "Άνοιξη, Φθινόπωρο"
                    },

                    trail2: {
                        title: "Παραλιακή Διαδρομή Κινίου - Δελφινίου",
                        description: "Μια μαγευτική διαδρομή που ενώνει δύο γραφικές παραλίες της Σύρου με κρυστάλλινα νερά και εντυπωσιακά βράχια.",
                        difficulty: "Μέτρια",
                        distance: "3 χλμ",
                        elevation: "120 μ",
                        duration: "3 ώρες",
                        trailType: "Μονής Κατεύθυνσης",
                        start: "Παραλία Κινίου",
                        season: "Καλοκαίρι, Φθινόπωρο"
                    },

                    trail3: {
                        title: "Πολιτιστική Διαδρομή Ερμούπολης",
                        description: "Ανακαλύψτε την αρχιτεκτονική και την πολιτιστική κληρονομιά της νεοκλασικής Ερμούπολης, με τα αρχοντικά και τις ιστορικές πλατείες.",
                        difficulty: "Εύκολη",
                        distance: "2.5 χλμ",
                        elevation: "80 μ",
                        duration: "1.5 ώρες",
                        trailType: "Κυκλική",
                        start: "Δημαρχείο Ερμούπολης",
                        season: "Όλο τον Χρόνο"
                    }
                },

                events: {

                    sectionTitle: "Επερχόμενες Εκδρομές",
                    sectionSubtitle: "Συμμετέχετε στις εκδηλώσεις της κοινότητάς μας και ανακαλύψτε τη Σύρο μαζί με άλλους λάτρεις της πεζοπορίας.",
                    viewAllButton: "Δείτε Όλες τις Εκδρομές",
                    joinButton: "Συμμετοχή",

                    event1: {
                        title: "Πεζοπορία Πανσελήνου στην Αγία Πακού",
                        description: "Ζήστε τη μαγεία της Σύρου κάτω από το φως της πανσελήνου με μια βραδινή πεζοπορία στο ιστορικό εκκλησάκι της Αγίας Πακού.",
                        date: "24 Ιουνίου 2024",
                        time: "19:30",
                        location: "Σημείο εκκίνησης: Πλατεία Ερμούπολης",
                        difficulty: "Εύκολη",
                        participants: "Μέγιστο 15 άτομα"
                    },

                    event2: {
                        title: "Οικογενειακή Πεζοπορία & Πικνίκ",
                        description: "Μια ήπια διαδρομή ιδανική για όλες τις ηλικίες, ακολουθούμενη από παραδοσιακό ελληνικό πικνίκ με τοπικές λιχουδιές της Σύρου.",
                        date: "2 Ιουλίου 2024",
                        time: "09:00",
                        location: "Σημείο εκκίνησης: Παραλία Γαλησσά",
                        difficulty: "Εύκολη",
                        participants: "Κατάλληλο για όλες τις ηλικίες"
                    }
                },
            },
            about: {
                // Hero Section
                heroTitle: "Σχετικά με τις πεζοπορικές διαδρομές της Σύρου",
                heroSubtitle: "Ανακαλύψτε το πάθος πίσω από την αποστολή μας να αναδείξουμε τη φυσική ομορφιά και την πολιτιστική κληρονομιά της Σύρου μέσα από αξέχαστες πεζοπορικές εμπειρίες",
                heroPrimaryButton: "Το ταξίδι μας",
                heroSecondaryButton: "Γνωρίστε την ομάδα",

                story: {
                    sectionTitle: "Η Ιστορία πίσω από το πάθος μας",
                    sectionSubtitle: "Από ταπεινές αρχές στην κορυφαία πεζοπορική κοινότητα της Σύρου",

                    beginningTitle: "2018 - Η Αρχή",
                    beginningSubtitle: "Ίδρυση από παθιασμένους τοπικούς πεζοπόρους",
                    beginningText: "Αυτό που ξεκίνησε ως ανεπίσημες πεζοπορίες το Σαββατοκύριακο μεταξύ φίλων, εξελίχθηκε σε μια ολοκληρωμένη πλατφόρμα που συνδέει εξερευνητές με τα κρυμμένα διαμάντια της Σύρου. Πιστεύουμε ότι κάθε διαδρομή αφηγείται μια ιστορία και κάθε βήμα αποκαλύπτει μια νέα οπτική του όμορφου αυτού Κυκλαδίτικου νησιού.",

                    missionTitle: "Η Αποστολή μας",
                    missionSubtitle: "Βιώσιμος τουρισμός & στήριξη της κοινότητας",
                    missionText: "Η αποστολή μας είναι να προωθήσουμε τον βιώσιμο τουρισμό διατηρώντας το φυσικό περιβάλλον και στηρίζοντας τις τοπικές κοινότητες. Μέσα από επιλεγμένες διαδρομές και ξεναγήσεις, δημιουργούμε αξέχαστες εμπειρίες και ενισχύουμε την αγάπη για τη φύση και την πολιτιστική κληρονομιά της Σύρου.",

                    stats: {
                        years: "Χρόνια",
                        trails: "Διαδρομές",
                        hikers: "Πεζοπόροι"
                    }
                },

                features: {
                    sectionTitle: "Τι μας κινεί μπροστά",
                    sectionSubtitle: "Οι αρχές που καθοδηγούν ό,τι κάνουμε και διαμορφώνουν την προσέγγισή μας στον βιώσιμο πεζοπορικό τουρισμό",

                    card1: {
                        title: "Περιβαλλοντική υπευθυνότητα",
                        description: "Δεσμευόμαστε να διατηρήσουμε τη φυσική ομορφιά της Σύρου για τις μελλοντικές γενιές μέσω υπεύθυνων πρακτικών πεζοπορίας και περιβαλλοντικής εκπαίδευσης."
                    },
                    card2: {
                        title: "Σύνδεση με την κοινότητα",
                        description: "Καλλιεργούμε ουσιαστικές συνδέσεις μεταξύ επισκεπτών και τοπικών κοινοτήτων, υποστηρίζοντας τις τοπικές επιχειρήσεις και πολιτιστικές παραδόσεις."
                    },
                    card3: {
                        title: "Ασφάλεια πρώτα",
                        description: "Η ασφάλειά σας είναι η απόλυτη προτεραιότητά μας. Όλες οι διαδρομές μας είναι προσεκτικά συντηρημένες και οι οδηγοί μας είναι πιστοποιημένοι στην παροχή πρώτων βοηθειών σε φυσικό περιβάλλον."
                    }
                },
                team: {
                    sectionTitle: "Η Εξειδικευμένη Ομάδα μας",
                    sectionSubtitle: "Γνωρίστε τα παθιασμένα άτομα που κάνουν κάθε πεζοπορική εμπειρία αξέχαστη.",

                    members: {
                        nikos: {
                            name: "Νίκος Παπαδόπουλος",
                            role: "Ιδρυτής & Κύριος Ξεναγός",
                            bio: "Γεννημένος και μεγαλωμένος στη Σύρο, ο Νίκος εξερευνά τα μονοπάτια του νησιού για πάνω από 20 χρόνια."
                        },
                        maria: {
                            name: "Μαρία Κόντου",
                            role: "Ανώτερη Φυσιογνώστρια",
                            bio: "Η Μαρία αναδεικνύει τον πλούτο της βιοποικιλότητας της Σύρου μέσα από τα εμπνευσμένα σχόλιά της."
                        },
                        dimitris: {
                            name: "Δημήτρης Αντωνίου",
                            role: "Φωτογράφος Περιπέτειας",
                            bio: "Ο Δημήτρης αποτυπώνει την ομορφιά της Σύρου από μοναδικές οπτικές γωνίες και τη μοιράζεται με τον κόσμο."
                        }
                    }
                },
            },
            trails: {
                heroTitle: "Ανακαλύψτε Εκπληκτικές Πεζοπορικές Διαδρομές",
                heroSubtitle: "Εξερευνήστε τα ομορφότερα μονοπάτια και διαδρομές στο μαγευτικό νησί της Σύρου",
                heroPrimaryButton: "Προβολή όλων των Διαδρομών",
                heroSecondaryButton: "Συμβουλές Πεζοπορίας",

                filters: {
                    sectionTitle: "Βρείτε τη Ιδανική Διαδρομή",
                    difficulty: {
                        label: "Δυσκολία",
                        all: "Όλες οι Βαθμίδες",
                        easy: "Εύκολη",
                        moderate: "Μέτρια",
                        hard: "Δύσκολη"
                    },
                    duration: {
                        label: "Διάρκεια",
                        any: "Οποιαδήποτε Διάρκεια",
                        short: "Σύντομη (< 2 ώρες)",
                        medium: "Μέτρια (2–4 ώρες)",
                        long: "Μεγάλη (> 4 ώρες)"
                    },
                    region: {
                        label: "Περιοχή",
                        all: "Όλες οι Περιοχές",
                        north: "Βόρεια Σύρος",
                        central: "Κεντρική Σύρος",
                        south: "Νότια Σύρος"
                    },
                },

                sort: {
                    label: "Ταξινόμηση κατά:",
                    default: "Προεπιλογή",
                    distanceAsc: "Απόσταση (Αύξουσα)",
                    distanceDesc: "Απόσταση (Φθίνουσα)",
                    durationAsc: "Διάρκεια (Αύξουσα)",
                    durationDesc: "Διάρκεια (Φθίνουσα)",
                    alphaAsc: "Αλφαβητικά (Α → Ω)",
                    alphaDesc: "Αλφαβητικά (Ω → Α)"
                },


                trails: {
                    sectionTitle: "Οι Διαδρομές μας",
                    exploreBtn: "Εξερεύνηση Διαδρομής",

                    trail1: {
                        title: "Μεσαιωνική Διαδρομή Άνω Σύρου",
                        description: "Αυτή η δημοφιλής διαδρομή σε οδηγεί από την Ερμούπολη στον μεσαιωνικό οικισμό της Άνω Σύρου, προσφέροντας πανοραμική θέα στο Αιγαίο Πέλαγος.",
                        difficulty: "Εύκολη",
                        distance: "3.5 χλμ",
                        elevation: "200 μ",
                        duration: "2 ώρες",
                        trailType: "Κυκλική",
                        start: "Ερμούπολη",
                        season: "Άνοιξη, Φθινόπωρο"
                    },

                    trail2: {
                        title: "Παραλιακή Διαδρομή Κινί – Δελφίνι",
                        description: "Μια εντυπωσιακή παραλιακή διαδρομή που ενώνει δύο από τις πιο γραφικές παραλίες της Σύρου με κρυστάλλινα νερά και εντυπωσιακούς γκρεμούς.",
                        difficulty: "Μέτρια",
                        distance: "3 χλμ",
                        elevation: "120 μ",
                        duration: "3 ώρες",
                        trailType: "Μονής κατεύθυνσης",
                        start: "Παραλία Κινί",
                        season: "Καλοκαίρι, Φθινόπωρο"
                    },

                    trail3: {
                        title: "Διαδρομή Πολιτιστικής Κληρονομιάς Ερμούπολης",
                        description: "Ανακάλυψε την αρχιτεκτονική και πολιτιστική κληρονομιά της νεοκλασικής πρωτεύουσας της Σύρου με τα αρχοντικά και τις ιστορικές πλατείες.",
                        difficulty: "Εύκολη",
                        distance: "2.5 χλμ",
                        elevation: "80 μ",
                        duration: "1.5 ώρες",
                        trailType: "Κυκλική",
                        start: "Δημαρχείο Ερμούπολης",
                        season: "Όλο τον χρόνο"
                    },

                    trail4: {
                        title: "Διαδρομή Αζόλιμνος – Βάρη",
                        description: "Αυτή η διαδρομή ενώνει τις ανατολικές παραλίες της Αζολίμνου και της Βάρης, περνώντας μέσα από παραλιακά μονοπάτια και αγροτικό τοπίο.",
                        difficulty: "Μέτρια",
                        distance: "7 χλμ",
                        elevation: "250 μ",
                        duration: "3.5 ώρες",
                        trailType: "Μονής κατεύθυνσης",
                        start: "Παραλία Αζόλιμνος",
                        season: "Άνοιξη, Φθινόπωρο"
                    },

                    trail5: {
                        title: "Διαδρομή Κοιλάδας Συρίγγας",
                        description: "Αυτή η απαιτητική διαδρομή σε οδηγεί μέσα από την απομονωμένη και πανέμορφη κοιλάδα της Συρίγγας στο βόρειο τμήμα της Σύρου.",
                        difficulty: "Δύσκολη",
                        distance: "10 χλμ",
                        elevation: "400 μ",
                        duration: "5 ώρες",
                        trailType: "Κυκλική",
                        start: "Ρίχοπο",
                        season: "Άνοιξη"
                    },
                },
            },
            events: {
                heroTitle: "Επερχόμενες Εκδηλώσεις",
                heroSubtitle: "Συμμετάσχετε σε οργανωμένες πεζοπορίες και μοναδικές υπαίθριες δραστηριότητες σε όλη τη μαγευτική Σύρο",
                heroPrimaryButton: "Προβολή Ημερολογίου",
                heroSecondaryButton: "Επερχόμενες Εκδηλώσεις",

                calendar: {
                    sectionTitle: "Επερχόμενες Εκδηλώσεις",
                    sectionSubtitle: "Συμμετέχετε σε οργανωμένες πεζοπορίες και μοναδικές υπαίθριες περιπέτειες στη Σύρο.",

                    table: {
                        date: "Ημερομηνία",
                        event: "Εκδήλωση",
                        location: "Τοποθεσία",
                        difficulty: "Δυσκολία",
                        duration: "Διάρκεια",
                        action: "Ενέργεια",
                        details: "Λεπτομέρειες"
                    },

                    data: {
                        event1: {
                            date: "6 Ιουλίου 2025",
                            name: "Πεζοπορία Πανσελήνου στην Αγία Πακού",
                            location: "Ερμούπολη προς Αγία Πακού",
                            difficulty: "Εύκολη",
                            duration: "3 ώρες",
                            link: "#"
                        },
                        event2: {
                            date: "13 Ιουλίου 2025",
                            name: "Οικογενειακή Πεζοπορία & Πικνίκ",
                            location: "Γαλησσάς",
                            difficulty: "Εύκολη",
                            duration: "2.5 ώρες",
                            link: "#"
                        },
                        event3: {
                            date: "20 Ιουλίου 2025",
                            name: "Παραθαλάσσια Περιπέτεια: Κίνι προς Λωτός",
                            location: "Παραλία Κινίου",
                            difficulty: "Μέτρια",
                            duration: "4 ώρες",
                            link: "#"
                        }
                    }
                },

                featureEvents: {
                    sectionTitle: "Προτεινόμενες Εκδηλώσεις",
                    sectionSubtitle: "Ανακαλύψτε τις πιο δημοφιλείς και μοναδικές πεζοπορικές εμπειρίες για εξερευνητές κάθε επιπέδου.",

                    addToCalendarButton: "Προσθήκη στο Ημερολόγιο",
                    whatToBringTitle: "Τι να φέρετε",

                    labels: {
                        date: "Ημερομηνία",
                        time: "Ώρα",
                        meetingPoint: "Σημείο Συνάντησης",
                        distance: "Απόσταση",
                        elevation: "Υψομετρική Διαφορά",
                        groupSize: "Μέγεθος Ομάδας"
                    },

                    data: {
                        event1: {
                            title: "Πεζοπορία Πανσελήνου στην Αγία Πακού",
                            date: "2025-07-26",
                            time: "7:30 μ.μ. – 10:30 μ.μ.",
                            meetingPoint: "Πλατεία Μιαούλη, Ερμούπολη",
                            distance: "4 χλμ",
                            elevation: "180μ",
                            groupSize: "Έως 20 άτομα",
                            difficulty: "Εύκολη",
                            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
                            descriptionParagraphs: [
                                "Ζήστε τη μαγεία της Σύρου κάτω από την πανσέληνο με αυτή την ιδιαίτερη απογευματινή πεζοπορία στο εκκλησάκι της Αγίας Πακού. Θα ξεκινήσουμε από την Ερμούπολη καθώς δύει ο ήλιος και θα κατευθυνθούμε προς ένα από τα καλύτερα σημεία θέας στο νησί.",
                                "Καθώς πέφτει το σκοτάδι, θα καθοδηγούμαστε από το φως της πανσελήνου, δημιουργώντας μια μαγική ατμόσφαιρα. Από την Αγία Πακού, θα απολαύσουμε πανοραμική θέα της φωτισμένης Ερμούπολης και του Αιγαίου κάτω από το φεγγαρόφωτο.",
                                "Ο οδηγός μας θα μοιραστεί ιστορίες για τις τοπικές παραδόσεις που σχετίζονται με την πανσέληνο και θα μας δείξει αστερισμούς στον νυχτερινό ουρανό. Μην ξεχάσετε να πάρετε φωτογραφική μηχανή για να απαθανατίσετε τη μαγευτική θέα!"
                            ],
                            whatToBring: [
                                "Άνετα παπούτσια πεζοπορίας",
                                "Μπουκάλι νερού",
                                "Ελαφρύ μπουφάν ή ζακέτα (για τη βραδινή δροσιά)",
                                "Φωτογραφική μηχανή",
                                "Φακός ή φακός κεφαλής (ως εφεδρικός)"
                            ]
                        },

                        event2: {
                            title: "Οικογενειακή Πεζοπορία & Πικνίκ",
                            date: "2025-07-26",
                            time: "10:00 π.μ. – 2:30 μ.μ.",
                            meetingPoint: "Χώρος στάθμευσης παραλίας Γαλησσά",
                            distance: "3 χλμ",
                            elevation: "50μ",
                            groupSize: "Χωρίς περιορισμό",
                            difficulty: "Εύκολη",
                            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
                            descriptionParagraphs: [
                                "Μια ήπια πεζοπορία κατάλληλη για όλες τις ηλικίες, που καταλήγει σε ένα παραδοσιακό ελληνικό πικνίκ με τοπικά προϊόντα. Η εκδήλωση έχει σχεδιαστεί ειδικά για οικογένειες με παιδιά που θέλουν να απολαύσουν τη φύση και να γνωρίσουν την πεζοπορία.",
                                "Θα ακολουθήσουμε ένα εύκολο παραθαλάσσιο μονοπάτι με όμορφη θέα, πολλές στάσεις για ξεκούραση και διασκέδαση για τα παιδιά. Οι οδηγοί μας θα απασχολήσουν τα μικρά με παιχνίδια στη φύση, κυνήγι θησαυρού και ενδιαφέροντα στοιχεία για τη χλωρίδα και πανίδα.",
                                "Η πεζοπορία ολοκληρώνεται με ένα νόστιμο πικνίκ με προϊόντα της Σύρου: τυριά, ελιές, παραδοσιακά γλυκά και αναψυκτικά. Οι γονείς μπορούν να χαλαρώσουν ενώ τα παιδιά παίζουν με ασφάλεια στο φυσικό περιβάλλον."
                            ],
                            whatToBring: [
                                "Άνετα παπούτσια πεζοπορίας",
                                "Καπέλο και αντηλιακό",
                                "Μπουκάλι νερού",
                                "Μαγιό και πετσέτα (προαιρετικά για μπάνιο)",
                                "Φωτογραφική μηχανή"
                            ]
                        },

                        event3: {
                            title: "Παραθαλάσσια Περιπέτεια: Κίνι προς Λωτός",
                            date: "2025-07-26",
                            time: "9:00 π.μ. – 1:00 μ.μ.",
                            meetingPoint: "Παραλία Κινίου",
                            distance: "6 χλμ",
                            elevation: "150μ",
                            groupSize: "Έως 10 άτομα",
                            difficulty: "Μέτρια",
                            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
                            descriptionParagraphs: [
                                "Εξερευνήστε την εντυπωσιακή δυτική ακτή της Σύρου με αυτή τη μέτριας δυσκολίας πεζοπορία από το Κίνι έως την απομονωμένη παραλία Λωτός. Το μονοπάτι προσφέρει μοναδική θέα, καθαρά νερά και επιβλητικούς βράχους.",
                                "Η διαδρομή ακολουθεί την ακτογραμμή, με εναλλαγές ανηφοριών και καθόδων σε κρυφούς κόλπους. Θα κάνουμε αρκετές στάσεις για κολύμπι σε απομονωμένα σημεία που είναι προσβάσιμα μόνο με τα πόδια. Ο οδηγός μας θα εξηγήσει τα οικολογικά και γεωλογικά χαρακτηριστικά της περιοχής.",
                                "Η πεζοπορία καταλήγει στην όμορφη παραλία Λωτός, όπου θα έχετε χρόνο για χαλάρωση και κολύμπι πριν επιστρέψουμε στο Κίνι με σκάφος."
                            ],
                            whatToBring: [
                                "Παπούτσια πεζοπορίας με καλό κράτημα",
                                "Καπέλο, γυαλιά ηλίου και αντηλιακό",
                                "Νερό (τουλάχιστον 1.5 λίτρο)",
                                "Μαγιό και πετσέτα",
                                "Σνακ",
                                "Αδιάβροχη φωτογραφική μηχανή (αν είναι δυνατόν)"
                            ]
                        },
                    },
                },


            },
            gallery: {
                heroTitle: "Συλλογή",
                heroSubtitle: "Εξερευνήστε εντυπωσιακές φωτογραφίες από τις πεζοπορικές μας περιπέτειες σε όλη τη Σύρο",
                heroPrimaryButton: "Δείτε Όλες τις Φωτογραφίες",
                heroSecondaryButton: "Μοιραστείτε τις Φωτογραφίες σας",
                sectionTitle: "Εξερευνήστε τις Στιγμές μας από την Πεζοπορία",
                sectionSubtitle: "Ξεφυλλίστε τη συλλογή μας με φωτογραφίες που παρουσιάζουν τα εκπληκτικά τοπία, αξέχαστα γεγονότα και όμορφες στιγμές από τις πεζοπορικές μας περιπέτειες στη Σύρο.",

                categories: {
                    all: "Όλες οι Φωτογραφίες",
                    landscapes: "Τοπία",
                    trails: "Διαδρομές",
                    events: "Εκδηλώσεις",
                    floraFauna: "Χλωρίδα & Πανίδα",
                    people: "Άνθρωποι"
                },

                items: {
                    1: { caption: "Τοπίο 1" },
                    2: { caption: "Τοπίο 2" },
                    3: { caption: "Διαδρομή 1" },
                    4: { caption: "Διαδρομή 2" },
                    5: { caption: "Εκδήλωση 1" },
                    6: { caption: "Εκδήλωση 2" },
                    7: { caption: "Χλωρίδα και Πανίδα" },
                    8: { caption: "Άνθρωποι 1" },
                    9: { caption: "Άνθρωποι 2" },
                },

                viewAllButton: "Δείτε όλη τη Συλλογή",

                sharePhotos: {
                    sectionTitle: "Μοιραστείτε τις Φωτογραφίες σας από την Πεζοπορία",
                    sectionSubtitle: "Έχετε πεζοπορήσει μαζί μας και τραβήξει όμορφες στιγμές; Θα χαρούμε να παρουσιάσουμε τις φωτογραφίες σας στη συλλογή μας!",
                    sectionParagraph: "Στείλτε μας τις καλύτερες φωτογραφίες από τις πεζοπορίες σας στη Σύρο, μαζί με μια σύντομη περιγραφή του πότε και πού τραβήχτηκαν. Οι επιλεγμένες φωτογραφίες θα παρουσιαστούν στη συλλογή μας και στα κανάλια κοινωνικής δικτύωσης, με πλήρη αναφορά στον φωτογράφο.",
                    submitButton: "Υποβάλετε τις Φωτογραφίες σας",

                    feature1: {
                        title: "Υψηλής Ποιότητας Εικόνες",
                        text: "Μοιραστείτε τη μοναδική σας οπτική για τις διαδρομές και τα τοπία της Σύρου με την κοινότητά μας.",
                    },
                    feature2: {
                        title: "Εμφανιστείτε",
                        text: "Οι επιλεγμένες φωτογραφίες θα παρουσιαστούν στη συλλογή μας με αναφορά σε εσάς.",
                    },
                    feature3: {
                        title: "Γίνετε Μέρος της Περιπέτειας",
                        text: "Οι φωτογραφίες σας εμπνέουν τους άλλους να εξερευνήσουν τη ομορφιά της Σύρου με τα πόδια.",
                    },
                },
            },
            contact: {
                heroTitle: "Επικοινωνήστε Μαζί Μας",
                heroSubtitle: "Έτοιμοι να εξερευνήσετε τη Σύρο; Είμαστε εδώ για να σας βοηθήσουμε να σχεδιάσετε την επόμενη περιπέτειά σας",
                heroPrimaryButton: "Αποστολή Μηνύματος",
                heroSecondaryButton: "Καλέστε μας",

                cards: {
                    sectionTitle: "Θα χαρούμε να σας ακούσουμε",
                    sectionSubtitle: "Είτε έχετε ερωτήσεις για τις διαδρομές μας, θέλετε να συμμετάσχετε σε μια εκδήλωση ή ενδιαφέρεστε να γίνετε μέλος, είμαστε εδώ για να βοηθήσουμε.",

                    visit: {
                        title: "Επισκεφθείτε μας",
                        line1: "Γραφείο Syros Hiking Team",
                        line2: "Οδός Μιαούλη 25, Ερμούπολη, Σύρος 84100, Ελλάδα",
                        mapLink: "https://goo.gl/maps/your‑office‑location",
                        mapButton: "Δείτε στο Χάρτη"
                    },

                    call: {
                        title: "Καλέστε μας",
                        phoneLabel: "Τηλέφωνο",
                        phone: "+30 22810 12345",
                        hours: "Δευ–Πα: 9:00 – 18:00\nΣαβ: 9:00 – 14:00",
                        callButton: "Καλέστε τώρα"
                    },

                    email: {
                        title: "Στείλτε Email",
                        generalLabel: "Γενικές Ερωτήσεις",
                        general: "info@syroshikingteam.gr",
                        eventsLabel: "Εκδηλώσεις & Περιηγήσεις",
                        events: "events@syroshikingteam.gr",
                        emailButton: "Αποστολή Email"
                    }
                },

                form: {
                    title: "Επικοινωνήστε Μαζί μας",
                    nameLabel: "Το Ονοματεπώνυμό σας *",
                    namePlaceholder: "Εισάγετε το πλήρες όνομά σας",
                    emailLabel: "Διεύθυνση Email *",
                    emailPlaceholder: "your@email.com",
                    subjectLabel: "Θέμα *",
                    subjectPlaceholder: "Επιλέξτε θέμα…",

                    introText: "Έχετε κάποια ερώτηση ή θέλετε να συμμετάσχετε στην επόμενη μας περιπέτεια; Στείλτε μας ένα μήνυμα και θα σας απαντήσουμε το συντομότερο δυνατό.",
                    privacyPolicy: "πολιτική απορρήτου",

                    subject: {
                        general: "Γενική Ερώτηση",
                        join: "Εγγραφή Μέλους",
                        other: "Άλλο"
                    },

                    messageLabel: "Το Μήνυμά σας *",
                    messagePlaceholder: "Πείτε μας πώς μπορούμε να βοηθήσουμε…",
                    consent: "Συμφωνώ με την πολιτική απορρήτου και συναινώ στην επεξεργασία των προσωπικών μου δεδομένων.",
                    submitButton: "Αποστολή Μηνύματος"
                },

                map: {
                    title: "Βρείτε μας στο Χάρτη",
                    subtitle: "Βρισκόμαστε στο κέντρο της Ερμούπολης, εύκολα προσβάσιμοι και έτοιμοι να σας βοηθήσουμε να σχεδιάσετε την πεζοπορική σας περιπέτεια στη Σύρο.",
                    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!…"
                },

                faq: {
                    title: "Συχνές Ερωτήσεις",
                    subtitle: "Βρείτε απαντήσεις σε κοινές ερωτήσεις για τις δραστηριότητές μας, τη συνδρομή και τις υπηρεσίες μας.",
                    items: [
                        {
                            question: "Πώς μπορώ να συμμετάσχω σε μια καθοδηγούμενη πεζοπορία;",
                            answer: "Μπορείτε να συμμετάσχετε στις καθοδηγούμενες πεζοπορίες μας απλά εμφανιζόμενοι στο σημείο συνάντησης την καθορισμένη ημέρα. Δεν απαιτείται κράτηση ή πληρωμή – είναι εντελώς δωρεάν! Όλοι είναι ευπρόσδεκτοι. Δείτε τη σελίδα Εκδηλώσεις για το πρόγραμμα των επερχόμενων πεζοποριών."
                        },
                        {
                            question: "Τι πρέπει να πάρω μαζί μου σε μια πεζοπορία;",
                            answer: "Άνετα παπούτσια πεζοπορίας, παγούρι με νερό, καπέλο και αντηλιακό, σνακ και ένα ελαφρύ μπουφάν για τις μεταβαλλόμενες καιρικές συνθήκες."
                        },
                        {
                            question: "Πόσο δύσκολες είναι οι διαδρομές μας;",
                            answer: "Οι διαδρομές μας κυμαίνονται από εύκολες παραθαλάσσιες βόλτες έως απαιτητικά ορεινά μονοπάτια. Κάθε κάρτα διαδρομής δείχνει απόσταση, διάρκεια και υψομετρική διαφορά ώστε να επιλέξετε την καλύτερη για εσάς."
                        },
                        {
                            question: "Πώς μπορώ να γίνω μέλος της ομάδας Syros Hiking Team;",
                            answer: "Απλώς στείλτε μας μήνυμα μέσω αυτής της φόρμας ή στείλτε email στο events@syroshikingteam.gr. Θα σας στείλουμε λεπτομέρειες εγγραφής και πληροφορίες για τις επερχόμενες δραστηριότητες."
                        },
                        {
                            question: "Μπορώ να πεζοπορήσω τις διαδρομές μόνος μου χωρίς οδηγό;",
                            answer: "Ναι! Όλοι οι χάρτες διαδρομών είναι διαθέσιμοι στη σελίδα Πεζοπορικές Διαδρομές. Οι καθοδηγούμενες πεζοπορίες είναι προαιρετικές αλλά προσφέρουν τοπικές γνώσεις και υποστήριξη ασφάλειας."
                        },
                    ],
                },
            },
        },
    },
};


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
