const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const { SECRET } = require('../constants');
const { db } = require('../db');

const cookieExtractor = function (req) {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['token'];
    }
    return token;
};

const opts = {
    secretOrKey: SECRET,
    jwtFromRequest: cookieExtractor,
};

passport.use(new Strategy(opts, async (jwtPayload, done) => {
    try {
        const { id } = jwtPayload; // Extract user ID from JWT payload

        const { rows } = await db.query(
            'SELECT user_id, email FROM users WHERE user_id = $1',
            [id]
        );

        if (!rows.length) {
            return done(null, false); // User not found in database
        }

        const user = {
            id: rows[0].user_id,
            email: rows[0].email,
        };

        return done(null, user); // Authentication successful
    } catch (error) {
        console.error('Error during authentication:', error.message);
        return done(error, false); // Pass error to done callback
    }
}));

// Example route usage:
// This middleware will authenticate requests using the 'jwt' strategy
// and make the authenticated user available as req.user
// You can use this middleware in your route handlers as needed
// e.g., router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => { ... });

module.exports = passport; // Export configured passport for use in other parts of your application
