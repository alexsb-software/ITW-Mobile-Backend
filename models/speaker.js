module.exports = function (sequalize, DataTypes) {
    return sequalize.define('speakers', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        phone: {
            type: DataTypes.STRING,
            unique: true
        },
        linkedin: {
            type: DataTypes.STRING,
            unique: true
        }, 
        bio: {
            type: DataTypes.TEXT
        }
    });
};