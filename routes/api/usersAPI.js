const router = require("express").Router(),
  userController = require("../../controllers/userController"),
  auth = require("../../middleware/auth"),
  { User } = require("../../models"),
  db = require('../../models')
  bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken");

// Matches with "/api/users"
// router.route("/")
//   .get(userController.findAll)
// .post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)


// Matches with "/api/users/register"
router.route("/register")
  .post(userController.create);


// Matches with "/api/users/login"
router.route("/login")
  .post(userController.login);


// Matches with "/api/users/login"  
router.route("/validToken")
  .post(userController.validToken);

router.get('/', auth, async (req, res) => {
  const user = await db.User.findById(req.user);
  // console.log('logged user:', user)
  res.json({
    id: user._id,
  })
})

module.exports = router;
