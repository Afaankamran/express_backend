const passport = require('passport');

// Exported middleware function to authenticate users using the 'jwt' strategy
exports.userAuth = passport.authenticate('jwt', { session: false });

// Usage example:
// This middleware can be used in route handlers to protect routes that require authentication
// e.g., router.get('/protected', userAuth, (req, res) => { ... });
