module.exports = function (sequalize, DataTypes) {
    return sequalize.define('keys', {
        value: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true
        }
    }, {
            timestamps: false
        }
    );
}