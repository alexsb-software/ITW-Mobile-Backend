module.exports = function (sequalize, DataTypes) {
    return sequalize.define('speakers', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bio: {
            type: DataTypes.TEXT
        },
        position: {
            type: DataTypes.STRING
        },
        avatar: {
            type: DataTypes.STRING,
            defaultValue: "http://i.imgur.com/9keRKoj.png"
        }
    });
};