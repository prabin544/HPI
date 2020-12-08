const jwt = require('jsonwebtoken');

// Passing in the req and res parameters along with a callback to the next function to run after this one
const auth = (req, res, next) => {
    try {
        //Get token from header of the request
        const token = req.header('x-auth-token');

        //Check if no token exists
        if (!token) {
            return res.status(401).json({
                msg: 'No token, authorization denied'
            });
        }


        // If a token is found, decode it using the JWT_SECRET 
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified) {
            return res.status(401).json({
                msg: 'Token verification failed, authorization denied'
            });
        }
        // Creating a new value in the req parameter for the user id from token (The payload passed when successfully logged in/registered)
        // to be stored in and used in the next function to get the user information with (Look at Authentication check route)
        console.log("auth.js: ", verified.user)
        req.user = verified.user;
        // Move on to the next function
        next();
    } catch (err) {
        res.status(401).json({
            msg: 'Token is not valid'
        });
    }
};

module.exports = auth;