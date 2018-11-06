'use strict';

module.exports = function(app) {
    var controllers = require('../controllers/Controllers');
    app.route('/').get(controllers.test);
}