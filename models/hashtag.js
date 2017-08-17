module.exports = function (sequalize, DataTypes) {
    return sequalize.define('hashtags', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {
            hooks: {
                afterValidate: function (post, options) {
                }
            },
            name: {
                singular: "hashtag",
                plural: "hashtags"
            }
        });
}