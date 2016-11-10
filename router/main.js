var express = require('express'),
    router = express.Router(),
    authenticationController = require('./controllers/authentication');
    timesheet = require('./controllers/timesheet'),
    // invoiceAdmin = require('../controllers/client');

// AUTH ROUTES -----------------------------------------------------------------
// Method to allow a user to login from a form
router.route("/login")
  .post(authenticationController.login);

// Method to allow a user to register from a form
router.route("/register")
  .post(authenticationController.register);
// -----------------------------------------------------------------------------

// USERS ROUTES ----------------------------------------------------------------
// -----------------------------------------------------------------------------
// PROFILES ROUTES -------------------------------------------------------------
// -----------------------------------------------------------------------------

// TIMESHEET ROUTES ------------------------------------------------------------
// To display all timesheets
router.route("/timesheet")
	.get(timesheet.index)
	.put(timesheet.create);

// router.route("/spartan/:id")
// 	.get(spartan.show)
// 	.put(spartan.update)
// 	.delete(spartan.delete);

// router.route("/spartan/available/:type")
//   .get(spartan.available);

// router.route("/spartan/name/:name")
//   .get(spartan.name);

// CLIENT ROUTES ------------------------------------------------------------
// To display all client
// router.route("/client")
// 	.get(client.index);

// router.route("/client/:id")
// 	.get(client.show)
// 	.put(client.update)
// 	.delete(client.delete);

// router.route("/client/name/:name")
//   .get(client.name);

// ADMIN ROUTES ------------------------------------------------------------
// To display all admins


module.exports = router;
