var config = {
    development: {
        database: {
            name: 'demo-app',
            username: 'root',
            password: '',
            config: {
                host: 'localhost',
                dialect: 'mysql',
                pool: {
                    max: 5,
                    min: 0,
                    idle: 10000
                }
            }
        },
        pusher: {
            appId: '335120',
            key: 'a77c6db33a10e6568489',
            secret: 'b13414eb5d0f8eb9e0b2',
            cluster: 'eu',
            encrypted: true
        },
        force: true, // forcing sequelizer to drop tables
        port: 8000
    }
};

// change in case of production
module.exports = config.development;