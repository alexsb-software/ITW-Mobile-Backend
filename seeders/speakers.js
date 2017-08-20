var seedSpeakers = function () {

    /* Database and models setup */
    const Speaker = require('../models/main')('speaker');
    const Session = require('../models/main')('session');

    // Day 1
    {
        Speaker.create({
            name: 'Ravi Margasahayam',
            position: 'International Public Speaker, NASA',
            bio: `Dr. Ravi was the Co-Chair Ground Safety Review Panel (GSRP) - International Space Station (NASA). <br> <br>
            Now Dr. Ravi works as the V.I.P. Tour Guide & International Public Speaker at NASA.`
        }).then(function (speaker) {
            Session.findOne({ where: { name: { $like: '%Journey to Mars%' } } })
                .then(function (session) {
                    speaker.addSession(session);
                });

            Session.findOne({ where: { name: { $like: '%Shaping Today\'s Youth Into Tomorrow\'s Leaders%' } } })
                .then(function (session) {
                    speaker.addSession(session);
                });
        });

        Speaker.create({
            name: 'Maged Farrag',
            position: 'Digital Media Evangelist',
            bio: `Maged Farrag is a digital media evangelist, founded his first company Mega Media in 1994 to become Egypt’s leading multimedia service provider. 
            Being the first to introduce touch screens and interactive multimedia solutions to the Egyptian market, his work extended to cover innovative 
            use of technology in advertising, communication and cultural heritage documentation. He has received numerous advertising and content awards. <br> <br>

            In 2013 he co-founded Fifth Dimension–5d, a merger of 5 companies working in complementing aspects of digital and marketing domains to become a 
            one stop digital marketing agency. Being the creative and innovation director of 5d, he introduced augmented reality applications, game development, 
            hologram projection and Virtual Reality, as well as many innovative digital installations for the first time in Egypt.He recently co-founded 5d VR, 
            a company specialized in creating VR/AR content and solutions. <br> <br>
 
            He has published many papers and has made a lot of contributions to numerous international conferences focusing on using technology in cultural 
            heritage documentation. He's also a founding member of the world association for protection of tangible cultural heritage during times of armed 
            conflict; WATCH. He's currently the president of the e-games work-group in the Chamber of Information Technology and Telecommunications-CIT.`
        }).then(function (speaker) {
            Session.findOne({ where: { name: { $like: '%Augmented Reality (5D)%' } } })
                .then(function (session) {
                    speaker.addSession(session);
                });
        });

        Speaker.create({
            name: 'Ahmed Moharm',
            bio: `Mohram holds more than 5 years of experience in various fields such as: teaching and research. In addition to consulting in structural 
            engineering with major projects in Middle-East, Far East and Gulf Area. <br> <br>

            Ahmed was also able to attain high professional experience and extensive knowledge in the fields of Finite Element Modelling, 
            Structural analysis, and Design. <br> <br>
            
            He has notably been very active in his career as a Structural Engineer for FACB for nearly a year while being a research 
            assistant in the Faculty of Engineering, Alexandria University. <br> <br>

            Being a teacher assistant, Mohram was able to leave a mark in every place he worked in, such as JAMES CUBBIT & PARTENERS and AAST. <br> <br>

            Mohram graduated from the Faculty of Engineering, Alexandria University, with a bachelor degree in Civil Engineering. 
            He pursued his Masters degree late on in September 2012.`
        }).then(function (speaker) {
            Session.findOne({ where: { name: { $like: '%BIM Civil%' } } })
                .then(function (session) {
                    speaker.addSession(session);
                });
        });

        Speaker.create({
            name: 'Wessam Sedik'
        }).then(function (speaker) {
            Session.findOne({ where: { name: { $like: '%NTRA (Communications in Egypt)%' } } })
                .then(function (session) {
                    speaker.addSession(session);
                });
        });

        Speaker.create({
            name: 'Ayman Ragab',
        }).then(function (speaker) {
            Session.findOne({ where: { name: { $like: '%NTRA Talk%' } } })
                .then(function (session) {
                    speaker.addSession(session);
                });
        });

        Speaker.create({
            name: 'Abdelrahman Samir',
            bio: `Abdulrahman currently works as a cloud computing engineer at Cloudnexa,a cloud organization dedicated to helping clients achieve their business 
            and IT objectives utilizing AWS. He is passionate about Junior information security and information gathering. Samir graduated from the faculty of Engineering, 
            Electronics & Communications, Minia University. He has worked as an intern at Trend Micro, specializing in Threat analysis, Malware overview, Ransomware protection.`
        }).then(function (speaker) {
            Session.findOne({ where: { name: { $like: '%Cloud Computing%' } } })
                .then(function (session) {
                    speaker.addSession(session);
                });
        });

        Speaker.create({
            name: 'Pegasus',
            bio: `Pegasus team is one of the scientific teams in Faculty of Engineering, Alexandria University, in addition to being the representative 
            team of Egypt and the Arab world in SAE Aerodesign West Competition, in which the team ranked ninth out of 34 participating teams. <br> <br>

            Pegasus team’s main interest is Aviation Science in all its scientific and research fields. <br> <br>

            Their vision is continuity and sustainability in order to establish a stable scientific base in Aviation Science.`
        }).then(function (speaker) {
            Session.findOne({ where: { name: { $like: 'Aerodynamics Workshop' } } })
                .then(function (session) {
                    speaker.addSession(session);
                });
        });
    }

    // Day 2

    {
        Speaker.create({
            name: 'Moatassem Desouky',
            position: 'Embedded systems engineer at Penirium',
            bio: `Moatassem is an Embedded systems engineer at Penirium. He studies computer science and communications at the 
            faculty of Engineering, Alexandria university. In addition to being the ROV’17 competition local first place winner, regional second place winner 
            and international gROVer award winner.`
        }).then(function (speaker) {
            Session.findOne({ where: { name: { $like: '%Chat Bots%' } } })
                .then(function (session) {
                    speaker.addSession(session);
                });
        });

        Speaker.create({
            name: 'Shady ElSafty',
            position: 'Regional Quality Manager',
            bio: `Mr. Shady is currently working as Regional Quality Manager for General Motors North Africa, based in Cairo, Egypt. 
            He is ASQ senior member who is volunteering to support several ASQ activities as the Regional Director of ASQ Quality Management Division (QMD) in 
            the Middle East since 2013, as well as a reviewer of technical paper in ASQ Quality Conferences on 2015 and 2016. <br> <br>

            During his career, he led several cross function teams to develop the quality systems in several manufacturing startups at Asia and Africa, 
            as well as lean transformation in “Brown Field”. In addition, he led flawless quality launches for several brands: Isuzu, Opel, Chevrolet, BMW, VW, and FAW. 
            Shady coached more than 60 Red X & Six Sigma projects resulting in savings of more than 20 million US $. <br> <br>

            His research is focused on continuous improvement process, Quality Culture, Six-sigma, and Lean transformation. He had published several manuscripts in 
            refereed journals and conferences. In 2013, he published his book “Critical Success Factors of Six-sigma in Automotive Industry”. <br> <br>

            El Safty earned a Bachelor Degree in Mechanical Engineering and Master Degree in Business Administration. 
            Moreover, he is a certified Six-sigma Master Black Belt from Arizona State University (USA-2012), Shainin Red X Master (Brazil-2007), 
            and Certified Lean Manufacturing Coach from. Sungkynkwan University (South Korea-2010).`
        }).then(function (speaker) {
            Session.findOne({ where: { name: { $like: '%Hybrid Cars%' } } })
                .then(function (session) {
                    speaker.addSession(session);
                });
        });

        Speaker.create({
            name: 'Ahmed Abdelaziz',
        }).then(function (speaker) {
            Session.findOne({ where: { name: { $like: '%Smart Cities%' } } })
                .then(function (session) {
                    speaker.addSession(session);
                });
        });

        Speaker.create({
            name: 'Hossam Fahmy',
            bio: `Hossam is the Managing Partner of QtMatters Technologies, a technology company that builds Social, Mobile, Analytics and Cloud (SMAC) solutions 
            for different sectors and industries, that relies on its team's extensive experience in software development and design. He is also the Program Manager 
                of Egypt Internet of Things (IoT) Challenge, a national initiative for senior university students, startups, small and medium businesses that have 
            innovative ideas in the area of Internet of Things (IoT) and related fields. Formerly, Hossam acted as the Egypt Corporate Affairs 
            Manager at Intel Corporation, where he was responsible for the implementation of the Corporate Affairs Programs in Egypt and managing the 
            governmental relations helping to drive policy, education, entrepreneurship, corporate social responsibility and community programs to enhance 
            Intel reputation and business. <br><br>
            
            Hossam is also the Secretary of the IEEE Technology and Engineering Management Society (TEMS) Egypt Chapter.. In 2011, he was assigned as a member
             of the IEEE Day organizing team; then the global IEEE Day 2012 team leader. For 3 successive years, Hossam served as the Student Representative of 
             IEEE Egypt Section helping 25+ student branches in different universities all over Egypt.`
        }).then(function (speaker) {
            Session.findOne({ where: { name: { $like: '%Internet of Things%' } } })
                .then(function (session) {
                    speaker.addSession(session);
                });
        });

        Speaker.create({
            name: 'Mohamed Farahat',
            bio: `We gladly anounce that Dr. Mohamed Farhat will be our speaker in ITW'17 about "Smart Materials".
            Dr Mohamed Farhat Hameed is an associate professor at Center for photonics and smart materials, Zewail City of Science and Technology.
            His main research interests are focused on the areas of computational modelling of smart photonic devices such as photonic crystal applications, biosensors, liquid crystals and solar cells.
            He is working in the area of “Computational Photonics , with good track records of publications. Based on his research, 73 journal papers, mostly in IEEE, OSA and IEE journals, have been published, 1 authored book published by Wiley, many chapters on book and 70 conference papers have been presented in the best national and international meetings.
            He got his PhD in 2010 through a channel scheme between Leeds University, South Wales University (UK), and Mansoura University, Egypt. 
            He got many national and international awards such as Incentive State Award for Engineering Sciences from the Egyptian Government for the years 2014/2015.`
        }).then(function (speaker) {
            Session.findOne({ where: { name: { $like: '%Smart Materials%' } } })
                .then(function (session) {
                    speaker.addSession(session);
                });
        });

        Speaker.create({
            name: 'Vortex',
            bio: `Driven by the dream of winning an ROV competition, Vortex was founded back in 2015 by 8 electromechanical engineers in Alexandria University. <br> <br>

            Coming in third place  in the international ROV competition organized by MATE organization in United States of America this year, 
            they were able to break both the Egyptian and Arabic records. Vortex rapidly succeeded not only in ROV competitions but also in other national forums. <br> <br>

            The team was ranked 1st in the  Egyptian regional competition. Furthermore, they came in third place as “The Best Robotic Project” in 2016 edition 
            of  EED(Egyptian Engineering Day) -annually organized by IEEE Egypt-Vortex have set their sails towards starting  their own startup in the 
            ROV industry in Egypt, plus they’re working on  utilizing their technical knowledge and experience to enrich the Egyptian market in the marine field.
`
        }).then(function (speaker) {
            Session.findOne({ where: { name: { $like: '%ROV Gallery%' } } })
                .then(function (session) {
                    speaker.addSession(session);
                });
        });
    }

    Speaker.create({
        name: '5dVR',
        bio: `5dVR is an Egyptian startup that specializes in creating highly engaging augmented and virtual reality experiences for different 
            industry sectors. Driven by the spirit of innovation, their mission is to bring the mesmerizing experience of VR and AR to many people in the region, 
            raising their awareness of this new technology’s benefits and capabilities. They are focused primarily on technologies, platforms and content-creation 
            for the VR world.`
    }).then(function (speaker) {
        // Session.findOne({ where: { name: { $like: '%%' } } })
        // .then(function (session) {
        // speaker.addSession(session);
        // });
    });

    Speaker.create({
        name: 'VoxEra',
        bio: `Voxera is a newly founded startup that aims to help travelers use their phones without keeping an eye on roaming. 
            Simply, travelers will be able to call and receive calls with zero roaming fees. VoxEra has launched a crowdfunding campaign on ‘Indiegogo’ 
            and has raised more than 79 thousand dollars from more than 43 countries.`
    }).then(function (speaker) {
        // Session.findOne({ where: { name: { $like: '' } } })
        // .then(function (session) {
        // speaker.addSession(session);
        // });
    });

    Speaker.create({
        name: 'Ziad Aly',
    }).then(function (speaker) {
        Session.findOne({ where: { name: { $like: '%Motivational Talk%' } } })
            .then(function (session) {
                speaker.addSession(session);
            });
    });

};

module.exports = seedSpeakers;