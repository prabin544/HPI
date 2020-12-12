const db = require("../models"),
  bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken"),
  auth = require("../middleware/auth");

// Defining methods for the userController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: async function (req, res) {
    const { email, password, firstName, lastName, gender, dob, passwordCheck } = req.body;

    if (!email || !password || !firstName || !lastName || !gender || !dob)
      return res
        .status(400)
        .json({ msg: "Missing required fields" });
    if (password.length < 4)
      return res
        .status(400)
        .json({ msg: "Password must be at least 4 characters" });
    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Password check does not match" });
    const existingUser = await db.User.findOne({ email: email })
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "Email already in use" });
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json({ msg: "Must be a valid email address" }));
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // delete: async function(req, res) {
  //   const deletedUser = await
  //     db.User
  //       .findByIdAndDelete(req.user)
  //       .json(deletedUser)
  //       // .findByIdAndDelete({ _id: req.params.id })
  //       // .then(dbModel => dbModel.remove())
  //       // .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  // },
  validToken: async function (req, res) {
    try {
      const token = req.header('x-auth-token');

      if (!token) return res.json(false);

      const verified = jwt.verify(token, process.env.JWT_SECRET);
      if (!verified) return res.json(false);

      const user = await db.User.findById(verified.user)
      if (!user) return res.json(false);


      return res.json(true)
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  },


  login: async function (req, res) {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ msg: "Invalid Username or Password" });

    const user = await db.User.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .json({ msg: "Email not registered. Please sign up" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ msg: "Incorrect password" });
    }

    const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET);
    //  console.log(token);
    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        gender: user.gender,
        dob: user.dob,
        userType: user.userType,
        illnessRecords: user.illnessRecords
      },
    })
    // db.User
    //   .create(req.body)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  }
};
