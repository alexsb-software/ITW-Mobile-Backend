var seedSessions = function () {

    /* Database and models setup */
    const Session = require('../models/main')('session');

    /* Definitions */
    const lecture_type = 'lecture';
    const gallery_type = 'gallery';
    const workshop_type = 'workshop';

    // Day 1
    {
        const day1 = '2017-08-21';
        Session.create({
            name: 'Registration',
            start: '09:00',
            end: '10:00',
            day: day1,
            type: lecture_type,
            categories: ['General']
        });

        Session.create({
            name: 'IEEE Talk',
            start: '10:00',
            end: '10:15',
            day: day1,
            type: lecture_type,
            categories: ['General']
        });

        Session.create({
            name: 'How to make your journey through ITW useful',
            start: '10:15',
            end: '10:30',
            day: day1,
            type: lecture_type,
            categories: ['General']
        });

        Session.create({
            name: 'Vodafone R&D Talk',
            start: '10:30',
            end: '10:45',
            day: day1,
            type: lecture_type,
            categories: ['Communications']
        });

        Session.create({
            name: 'Augmented Reality (5D)',
            start: '10:45',
            end: '11:30',
            day: day1,
            type: lecture_type,
            categories: ['Computer']
        });

        Session.create({
            name: 'Vodafone Talk',
            start: '11:30',
            end: '12:15',
            day: day1,
            type: lecture_type,
            categories: ['Communications']
        });

        Session.create({
            name: 'Break 1',
            start: '12:15',
            end: '12:45',
            day: day1,
            type: lecture_type,
            categories: ['General']
        });

        Session.create({
            name: 'BIM Civil',
            start: '12:45',
            end: '13:25',
            day: day1,
            type: lecture_type,
            categories: ['Civil']
        });

        Session.create({
            name: '3D Printing / Biomedical',
            start: '13:30',
            end: '14:15',
            day: day1,
            type: lecture_type,
            categories: ['Electronics']
        });

        Session.create({
            name: 'NTRA Talk',
            start: '14:25',
            end: '14:45',
            day: day1,
            type: lecture_type,
            categories: ['General']
        });

        Session.create({
            name: 'Journey to Mars',
            start: '14:45',
            end: '15:45',
            day: day1,
            type: lecture_type,
            categories: ['General']
        });

        Session.create({
            name: 'Break 2 (Catering)',
            start: '15:45',
            end: '16:15',
            day: day1,
            type: lecture_type,
            categories: ['General']
        });

        Session.create({
            name: 'Computer Vision',
            start: '16:20',
            end: '17:00',
            day: day1,
            type: lecture_type,
            categories: ['Computer']
        });

        Session.create({
            name: 'Robotics Market / Smart Material',
            start: '17:10',
            end: '17:50',
            day: day1,
            type: lecture_type,
            categories: ['Electronics']
        });

        Session.create({
            name: 'Motivational Talk',
            start: '18:00',
            end: '19:00',
            day: day1,
            type: lecture_type,
            categories: ['General']
        });

        Session.create({
            name: 'Tech Workshop (Room C)',
            start: '12:15',
            end: '12:45',
            day: day1,
            type: workshop_type,
            categories: ['General']
        });

        Session.create({
            name: 'Game Development Workshop(D.H.)',
            start: '13:30',
            end: '14:15',
            day: day1,
            type: workshop_type,
            categories: ['Computer']
        });

        Session.create({
            name: 'Solar Energy Workshop (Room C)',
            start: '13:30',
            end: '14:15',
            day: day1,
            type: workshop_type,
            categories: ['Power (Electrical)']
        });

        Session.create({
            name: 'Game Development (D.H.) 2',
            start: '14:45',
            end: '15:45',
            day: day1,
            type: workshop_type,
            categories: ['Computer']
        });

        Session.create({
            name: 'Cryptography Workshop (D.H.)',
            start: '16:20',
            end: '17:00',
            day: day1,
            type: workshop_type,
            categories: ['Computer']
        });

        Session.create({
            name: 'Aerodynamics/ROV Workshop (Room C)',
            start: '16:20',
            end: '17:00',
            day: day1,
            type: workshop_type,
            categories: ['Power (Electrical)', 'Mechanical']
        });

        Session.create({
            name: 'Cryptography Workshop (D.H.) 2',
            start: '17:10',
            end: '17:50',
            day: day1,
            type: workshop_type,
            categories: ['Computer']
        });
    }

    // Day 2
    {
        const day2 = '2017-08-22';
        Session.create({
            name: 'Registration',
            start: '09:00',
            end: '10:00',
            day: day2,
            type: lecture_type,
            categories: ['General']
        });

        Session.create({
            name: 'Chat Bots',
            start: '10:00',
            end: '10:40',
            day: day2,
            type: lecture_type,
            categories: ['Computer']
        });

        Session.create({
            name: 'Hybrid Cars',
            start: '10:45',
            end: '',
            day: day2,
            type: lecture_type,
            categories: []
        });

        // TODO: check schedule after hybrid cars session to ROS/RTOS

        Session.create({
            name: 'ROS / RTOS',
            start: '11:20',
            end: '12:00',
            day: day2,
            type: lecture_type,
            categories: ['Computer', 'Electronics']
        });

        Session.create({
            name: 'Break 3',
            start: '12:00',
            end: '12:30',
            day: day2,
            type: lecture_type,
            categories: ['General']
        });

        Session.create({
            name: 'Shaping Today\'s Youth Into Tomorrow\'s Leaders',
            start: '12:40',
            end: '13:30',
            day: day2,
            type: lecture_type,
            categories: ['General']
        });

        Session.create({
            name: 'Energy Automation',
            start: '13:30',
            end: '14:10',
            day: day2,
            type: lecture_type,
            categories: ['Power (Electrical)']
        });

        Session.create({
            name: 'Voice Search and Artificial Intelligence / Brain Chips',
            start: '14:30',
            end: '15:15',
            day: day2,
            type: lecture_type,
            categories: ['Computer']
        });

        Session.create({
            name: 'Break 4 (Catering)',
            start: '15:15',
            end: '15:40',
            day: day2,
            type: lecture_type,
            categories: ['General']
        });

        Session.create({
            name: 'Silicon Photonics / Optical Cloaks',
            start: '15:40',
            end: '16:25',
            day: day2,
            type: lecture_type,
            categories: ['Communications']
        });

        Session.create({
            name: 'Embedded Linux',
            start: '16:30',
            end: '17:15',
            day: day2,
            type: lecture_type,
            categories: ['Computer']
        });

        Session.create({
            name: 'Smart Materials',
            start: '17:20',
            end: '18:30',
            day: day2,
            type: lecture_type,
            categories: [] // TODO: add category
        });

        Session.create({
            name: 'Chairman Talk',
            start: '18:30',
            end: '19:00',
            day: day2,
            type: lecture_type,
            categories: ['General']
        });

        // TODO: checkout time here (1st workshop)

        Session.create({
            name: 'ROV Gallery (D.H.)',
            start: '',
            end: '',
            day: day2,
            type: workshop_type,
            categories: ['Power (Electrical), Mechanical']
        });

        Session.create({
            name: 'ROV Gallery (D.H.) 2',
            start: '11:20',
            end: '12:00',
            day: day2,
            type: workshop_type,
            categories: ['Power (Electrical), Mechanical']
        });

        Session.create({
            name: 'Tech Workshop (Room C)',
            start: '12:00',
            end: '12:30',
            day: day2,
            type: workshop_type,
            categories: [''] // TODO: add category
        });

        Session.create({
            name: 'IOT Gallery (D.H.)',
            start: '15:40',
            end: '16:25',
            day: day2,
            type: workshop_type,
            categories: ['Computer', 'Communications']
        });

        Session.create({
            name: 'Chat Bots Workshop',
            start: '15:40',
            end: '16:25',
            day: day2,
            type: workshop_type,
            categories: ['Computer']
        });

        Session.create({
            name: 'IOT Gallery (D.H.) 2',
            start: '16:30',
            end: '17:15',
            day: day2,
            type: workshop_type,
            categories: ['Computer', 'Communications']
        });

        Session.create({
            name: 'Chat Bots Workshop',
            start: '16:30',
            end: '17:15',
            day: day2,
            type: workshop_type,
            categories: ['Computer']
        });
    }

};

module.exports = seedSessions;