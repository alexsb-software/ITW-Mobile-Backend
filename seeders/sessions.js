var seedSessions = function () {

    /* Database and models setup */
    const Session = require('../models/main')('session');
    const Category = require('../models/main')('category');

    /* Definitions */
    const lecture_type = 'lecture';
    const gallery_type = 'gallery';
    const workshop_type = 'workshop';

    const bibliotheca_alexandrina_place = 'Bibliotheca Alexandrina';
    const plaza_place = 'Bibliotheca Alexandrina Plaza';
    const great_hall_place = 'Great Hall';
    const delegates_hall_place = 'Delegates Hall';
    const room_c_place = 'Room C';

    function createSession(session) {
        Session.create({
            name: session.name,
            start: session.start,
            end: session.end,
            day: session.day,
            type: session.type,
            place: session.place,
            number_of_seats: session.number_of_seats
        }).then(function (created_session) {
            // insert categories
            var categories = session.categories;

            Category.findAll({
                where: { name: { $in: categories } }
            }).then(function (cats) {
                var cats_id = [];
                cats.forEach((item, index) => {
                    cats_id.push(item.id);
                });

                created_session.setCategories(cats);
            });
        });
    }


    // Day 1
    {
        const day1 = 1;
        createSession({
            name: 'Registration',
            start: '09:00',
            end: '10:00',
            day: day1,
            type: lecture_type,
            place: bibliotheca_alexandrina_place,
            categories: ['General']
        });

        createSession({
            name: 'IEEE Talk',
            start: '10:00',
            end: '10:15',
            day: day1,
            type: lecture_type,
            place: great_hall_place,
            categories: ['General']
        });

        createSession({
            name: 'How to make your journey through ITW useful',
            start: '10:15',
            end: '10:30',
            day: day1,
            type: lecture_type,
            place: great_hall_place,
            categories: ['General']
        });

        createSession({
            name: 'Vodafone R&D Talk',
            start: '10:30',
            end: '10:45',
            day: day1,
            type: lecture_type,
            place: great_hall_place,
            categories: ['Communications']
        });

        createSession({
            name: 'Augmented Reality (5D)',
            start: '10:45',
            end: '11:30',
            day: day1,
            type: lecture_type,
            place: great_hall_place,
            categories: ['Computer']
        });

        createSession({
            name: 'Vodafone Talk',
            start: '11:30',
            end: '12:15',
            day: day1,
            type: lecture_type,
            place: great_hall_place,
            categories: ['Communications']
        });

        createSession({
            name: 'Break 1',
            start: '12:15',
            end: '12:45',
            day: day1,
            type: lecture_type,
            place: plaza_place,
            categories: ['General']
        });

        createSession({
            name: 'BIM Civil',
            start: '12:45',
            end: '13:25',
            day: day1,
            type: lecture_type,
            place: great_hall_place,
            categories: ['Civil']
        });

        createSession({
            name: '3D Printing (Biomedical Applications)',
            start: '13:30',
            end: '14:15',
            day: day1,
            type: lecture_type,
            place: great_hall_place,
            categories: ['Electronics']
        });

        createSession({
            name: 'NTRA Talk',
            start: '14:25',
            end: '14:45',
            day: day1,
            type: lecture_type,
            place: great_hall_place,
            categories: ['General']
        });

        createSession({
            name: 'Journey to Mars',
            start: '14:45',
            end: '15:45',
            day: day1,
            type: lecture_type,
            place: great_hall_place,
            categories: ['General']
        });

        createSession({
            name: 'Break 2 (Catering)',
            start: '15:45',
            end: '16:15',
            day: day1,
            type: lecture_type,
            place: plaza_place,
            categories: ['General']
        });

        createSession({
            name: 'Computer Vision',
            start: '16:20',
            end: '17:00',
            day: day1,
            type: lecture_type,
            place: great_hall_place,
            categories: ['Computer']
        });

        createSession({
            name: 'Robotics Market / Smart Material',
            start: '17:10',
            end: '17:50',
            day: day1,
            type: lecture_type,
            place: great_hall_place,
            categories: ['Electronics']
        });

        createSession({
            name: 'Motivational Talk',
            start: '18:00',
            end: '19:00',
            day: day1,
            type: lecture_type,
            place: great_hall_place,
            categories: ['General']
        });

        createSession({
            name: 'Tech Workshop',
            start: '12:15',
            end: '12:45',
            day: day1,
            type: workshop_type,
            place: room_c_place,
            number_of_seats: 20,
            categories: ['General']
        });

        createSession({
            name: 'Game Development Workshop',
            start: '13:30',
            end: '14:15',
            day: day1,
            type: workshop_type,
            place: delegates_hall_place,
            number_of_seats: 20,
            categories: ['Computer']
        });

        createSession({
            name: 'Solar Energy Workshop',
            start: '13:30',
            end: '14:15',
            day: day1,
            type: workshop_type,
            place: room_c_place,
            number_of_seats: 20,
            categories: ['Power (Electrical)']
        });

        createSession({
            name: 'Game Development 2',
            start: '14:45',
            end: '15:45',
            day: day1,
            type: workshop_type,
            place: delegates_hall_place,
            number_of_seats: 20,
            categories: ['Computer']
        });

        createSession({
            name: 'Cryptography Workshop',
            start: '16:20',
            end: '17:00',
            day: day1,
            type: workshop_type,
            place: delegates_hall_place,
            number_of_seats: 20,
            categories: ['Computer']
        });

        createSession({
            name: 'Aerodynamics/ROV Workshop',
            start: '16:20',
            end: '17:00',
            day: day1,
            type: workshop_type,
            place: room_c_place,
            number_of_seats: 20,
            categories: ['Power (Electrical)', 'Mechanical']
        });

        createSession({
            name: 'Cryptography Workshop 2',
            start: '17:10',
            end: '17:50',
            day: day1,
            type: workshop_type,
            place: delegates_hall_place,
            number_of_seats: 20,
            categories: ['Computer']
        });
    }

    // Day 2
    {
        const day2 = 2;
        createSession({
            name: 'Registration',
            start: '09:00',
            end: '10:00',
            day: day2,
            type: lecture_type,
            place: great_hall_place,
            categories: ['General']
        });

        createSession({
            name: 'Chat Bots',
            start: '10:00',
            end: '10:40',
            day: day2,
            type: lecture_type,
            place: great_hall_place,
            categories: ['Computer']
        });

        createSession({
            name: 'Hybrid Cars',
            start: '10:45',
            end: '',
            day: day2,
            type: lecture_type,
            place: great_hall_place,
            categories: []
        });

        // TODO: check schedule after hybrid cars session to ROS/RTOS

        createSession({
            name: 'ROS / RTOS',
            start: '11:20',
            end: '12:00',
            day: day2,
            type: lecture_type,
            place: great_hall_place,
            categories: ['Computer', 'Electronics']
        });

        createSession({
            name: 'Break 3',
            start: '12:00',
            end: '12:30',
            day: day2,
            type: lecture_type,
            place: plaza_place,
            categories: ['General']
        });

        createSession({
            name: 'Shaping Today\'s Youth Into Tomorrow\'s Leaders',
            start: '12:40',
            end: '13:30',
            day: day2,
            type: lecture_type,
            place: great_hall_place,
            categories: ['General']
        });

        createSession({
            name: 'Energy Automation',
            start: '13:30',
            end: '14:10',
            day: day2,
            type: lecture_type,
            place: great_hall_place,
            categories: ['Power (Electrical)']
        });

        createSession({
            name: 'Voice Search and Artificial Intelligence / Brain Chips',
            start: '14:30',
            end: '15:15',
            day: day2,
            type: lecture_type,
            place: great_hall_place,
            categories: ['Computer']
        });

        createSession({
            name: 'Break 4 (Catering)',
            start: '15:15',
            end: '15:40',
            day: day2,
            type: lecture_type,
            place: plaza_place,
            categories: ['General']
        });

        createSession({
            name: 'Silicon Photonics / Optical Cloaks',
            start: '15:40',
            end: '16:25',
            day: day2,
            type: lecture_type,
            place: great_hall_place,
            categories: ['Communications']
        });

        createSession({
            name: 'Embedded Linux',
            start: '16:30',
            end: '17:15',
            day: day2,
            type: lecture_type,
            place: great_hall_place,
            categories: ['Computer']
        });

        createSession({
            name: 'Smart Materials',
            start: '17:20',
            end: '18:30',
            day: day2,
            type: lecture_type,
            place: great_hall_place,
            categories: [] // TODO: add category
        });

        createSession({
            name: 'Chairman Talk',
            start: '18:30',
            end: '19:00',
            day: day2,
            type: lecture_type,
            place: great_hall_place,
            categories: ['General']
        });

        // TODO: checkout time here (1st workshop)

        createSession({
            name: 'ROV Gallery',
            start: '',
            end: '',
            day: day2,
            type: gallery_type,
            place: delegates_hall_place,
            categories: ['Power (Electrical), Mechanical']
        });

        createSession({
            name: 'ROV Gallery 2',
            start: '11:20',
            end: '12:00',
            day: day2,
            type: gallery_type,
            place: delegates_hall_place,
            categories: ['Power (Electrical), Mechanical']
        });

        createSession({
            name: 'Tech Workshop',
            start: '12:00',
            end: '12:30',
            day: day2,
            type: workshop_type,
            place: room_c_place,
            number_of_seats: 20,
            categories: [''] // TODO: add category
        });

        createSession({
            name: 'IOT Gallery',
            start: '15:40',
            end: '16:25',
            day: day2,
            type: gallery_type,
            place: delegates_hall_place,
            categories: ['Computer', 'Communications']
        });

        createSession({
            name: 'Chat Bots Workshop',
            start: '15:40',
            end: '16:25',
            day: day2,
            type: workshop_type,
            place: bibliotheca_alexandrina_place,
            number_of_seats: 20,
            categories: ['Computer']
        });

        createSession({
            name: 'IOT Gallery 2',
            start: '16:30',
            end: '17:15',
            day: day2,
            type: gallery_type,
            place: delegates_hall_place,
            categories: ['Computer', 'Communications']
        });

        createSession({
            name: 'Chat Bots Workshop',
            start: '16:30',
            end: '17:15',
            day: day2,
            type: workshop_type,
            place: bibliotheca_alexandrina_place,
            number_of_seats: 20,
            categories: ['Computer']
        });
    }

};

module.exports = seedSessions;