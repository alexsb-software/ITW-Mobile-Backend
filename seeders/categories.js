var seedCategories = function () {

    /* Database and models setup */
    const Category = require('../models/main')('category');

    // seed categories
    Category.create({ name: 'General' });
    Category.create({ name: 'Computer' });
    Category.create({ name: 'Electronics' });
    Category.create({ name: 'Communications' });
    Category.create({ name: 'Power (Electrical)' });
    Category.create({ name: 'Mechanical' })
    Category.create({ name: 'Civil' });

};

module.exports = seedCategories;