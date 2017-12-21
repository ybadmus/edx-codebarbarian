var Stripe = require('stripe');
var fx = require('./fx');
var config = require('./config')

module.exports = function(wagner) {
  var stripe = Stripe(process.env.STRIPE_API_KEY);

  wagner.factory('Stripe', function() {
    return stripe;
  });

  wagner.factory('fx', fx);

  wagner.factory('Config', config);
};
