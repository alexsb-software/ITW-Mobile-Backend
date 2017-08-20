var seedSessions = function () {

    /* Database and models setup */
    const Session = require('../models/main')('session');
    const Category = require('../models/main')('category');

    /* Definitions */
    const lecture_type = 'lecture';
    const gallery_type = 'gallery';
    const workshop_type = 'workshop';
    const adv_session_type = 'advanced session';

    const game_dev_type = 'game development';
    const bim_type = 'BIM';
    const aerodynamics_type = 'aerodynamics';
    const rov_type = 'ROV';
    const iot_type = 'IOT';
    const ros_type = 'ROS';
    const crypt_type = 'cryptography';


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
            number_of_seats: session.number_of_seats,
            reservation_type: session.reservation_type
        }).then(function (created_session) {
            // insert categories
            var categories = session.categories;

            Category.findAll({
                where: { name: { $in: categories } }
            }).then(function (cats) {
                created_session.setCategories(cats);
            });
        });
    }


    // Day 1
    {
        const day1 = 1;
        createSession({
            name: 'Registration',
            start: '09:15',
            end: '10:00',
            day: day1,
            type: lecture_type,
            place: bibliotheca_alexandrina_place,
            categories: ['General']
        });

        createSession({
            name: 'How to make your journey through ITW useful',
            start: '10:00',
            end: '10:15',
            day: day1,
            type: lecture_type,
            place: great_hall_place,
            categories: ['General']
        });

        createSession({
            name: 'NTRA Talk',
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
            name: 'Wireless Communications (Vodafone)',
            start: '11:30',
            end: '12:15',
            day: day1,
            type: lecture_type,
            place: great_hall_place,
            categories: ['Communications']
        });

        createSession({
            name: 'Break',
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
            name: 'ITIDA Talk',
            start: '13:30',
            end: '13:50',
            day: day1,
            type: lecture_type,
            place: great_hall_place,
            categories: ['General']
        });

        createSession({
            name: 'NTRA (Communications in Egypt)',
            start: '14:00',
            end: '14:45',
            day: day1,
            type: lecture_type,
            place: great_hall_place,
            categories: ['General', 'Communications']
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
            name: 'Break',
            start: '15:45',
            end: '16:15',
            day: day1,
            type: lecture_type,
            place: plaza_place,
            categories: ['General']
        });

        createSession({
            name: 'Cloud Computing',
            start: '16:20',
            end: '17:00',
            day: day1,
            type: lecture_type,
            place: great_hall_place,
            categories: ['Computer']
        });

        createSession({
            name: 'Robotics Market',
            start: '17:10',
            end: '17:50',
            day: day1,
            type: lecture_type,
            place: great_hall_place,
            categories: ['Electronics']
        });

        createSession({
            name: 'Vodafone HR Talk',
            start: '18:00',
            end: '18:15',
            day: day1,
            type: lecture_type,
            place: great_hall_place,
            categories: ['General']
        });

        createSession({
            name: 'Game Development',
            start: '12:45',
            end: '13:50',
            day: day1,
            type: adv_session_type,
            reservation_type: game_dev_type,
            place: delegates_hall_place,
            number_of_seats: 60,
            categories: ['Computer']
        });

        createSession({
            name: 'BIM',
            start: '13:30',
            end: '13:50',
            day: day1,
            type: workshop_type,
            reservation_type: bim_type,
            place: room_c_place,
            number_of_seats: 60,
            categories: ['Power (Electrical)']
        });

        createSession({
            name: 'Aerodynamics',
            start: '16:20',
            end: '17:50',
            day: day1,
            type: workshop_type,
            reservation_type: aerodynamics_type,
            place: room_c_place,
            number_of_seats: 25,
            categories: ['Power (Electrical)', 'Mechanical']
        });

        createSession({
            name: 'Cryptography',
            start: '16:20',
            end: '17:50',
            day: day1,
            type: workshop_type,
            reservation_type: crypt_type,
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
            start: '09:15',
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
            end: '11:30',
            day: day2,
            type: lecture_type,
            place: great_hall_place,
            categories: ['Mechanical', 'Electronics']
        });

        createSession({
            name: 'Smart Cities (NTRA)',
            start: '11:30',
            end: '12:00',
            day: day2,
            type: lecture_type,
            place: great_hall_place,
            categories: ['Communications', 'Electronics']
        });

        createSession({
            name: 'Break',
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
            name: 'ITIDA',
            start: '13:30',
            end: '14:10',
            day: day2,
            type: lecture_type,
            place: great_hall_place,
            categories: ['General']
        });

        createSession({
            name: 'Internet of Things',
            start: '14:30',
            end: '15:15',
            day: day2,
            type: lecture_type,
            place: great_hall_place,
            categories: ['Computer', 'Communications', 'Electronics']
        });

        createSession({
            name: 'Break',
            start: '15:15',
            end: '15:40',
            day: day2,
            type: lecture_type,
            place: plaza_place,
            categories: ['General']
        });

        createSession({
            name: 'Motivational Talk',
            start: '15:40',
            end: '16:25',
            day: day2,
            type: lecture_type,
            place: great_hall_place,
            categories: ['General']
        });

        createSession({
            name: 'Embedded system in automotive',
            start: '16:30',
            end: '17:15',
            day: day2,
            type: lecture_type,
            place: great_hall_place,
            categories: ['Computer', 'Electronics']
        });

        createSession({
            name: 'Smart Materials',
            start: '17:20',
            end: '18:30',
            day: day2,
            type: lecture_type,
            place: great_hall_place,
            categories: ['General']
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

        createSession({
            name: 'ROV',
            start: '10:45',
            end: '12:00',
            day: day2,
            type: adv_session_type,
            reservation_type: rov_type,
            place: delegates_hall_place,
            categories: ['Power (Electrical), Mechanical', 'Electronics'],
            number_of_seats: 60
        });

        createSession({
            name: 'IOT',
            start: '15:40',
            end: '17:15',
            day: day2,
            type: adv_session_type,
            reservation_type: iot_type,
            place: delegates_hall_place,
            categories: ['Computer', 'Communications'],
            number_of_seats: 60
        });

        createSession({
            name: 'ROS / RTOS',
            start: '13:30',
            end: '14:10',
            day: day2,
            type: adv_session_type,
            reservation_type: ros_type,
            place: great_hall_place,
            categories: ['Computer', 'Electronics'],
            number_of_seats: 60
        });

        createSession({
            name: 'Gallery Slot 1',
            start: '10:45',
            end: '11:30',
            day: day2,
            type: gallery_type,
            reservation_type: gallery_type,
            place: great_hall_place,
            categories: ['General'],
            number_of_seats: 60
        });

        createSession({
            name: 'Gallery Slot 2',
            start: '11:30',
            end: '12:00',
            day: day2,
            type: gallery_type,
            reservation_type: gallery_type,
            place: great_hall_place,
            categories: ['General'],
            number_of_seats: 60
        });

        createSession({
            name: 'Gallery Slot 3',
            start: '12:40',
            end: '13:30',
            day: day2,
            type: gallery_type,
            reservation_type: gallery_type,
            place: great_hall_place,
            categories: ['General'],
            number_of_seats: 60
        });

        createSession({
            name: 'Gallery Slot 4',
            start: '13:30',
            end: '14:10',
            day: day2,
            type: gallery_type,
            reservation_type: gallery_type,
            place: great_hall_place,
            categories: ['General'],
            number_of_seats: 60
        });

        createSession({
            name: 'Gallery Slot 5',
            start: '14:30',
            end: '15:15',
            day: day2,
            type: gallery_type,
            reservation_type: gallery_type,
            place: great_hall_place,
            categories: ['General'],
            number_of_seats: 60
        });

        createSession({
            name: 'Gallery Slot 6',
            start: '15:40',
            end: '16:25',
            day: day2,
            type: gallery_type,
            reservation_type: gallery_type,
            place: great_hall_place,
            categories: ['General'],
            number_of_seats: 60
        });

        createSession({
            name: 'Gallery Slot 7',
            start: '16:30',
            end: '17:15',
            day: day2,
            type: gallery_type,
            reservation_type: gallery_type,
            place: great_hall_place,
            categories: ['General'],
            number_of_seats: 60
        });
    }

};

module.exports = seedSessions;