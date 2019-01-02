const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('../config/config.json');

function extractProfile (profile) {
  let imageUrl = '';
  if (profile.photos && profile.photos.length) {
    imageUrl = profile.photos[0].value;
  }
  return {
    id: profile.id,
    displayName: profile.displayName,
    image: imageUrl
  };
}

// Configure the Google strategy for use by Passport.js.
//
// OAuth 2-based strategies require a `verify` function which receives the
// credential (`accessToken`) for accessing the Google API on the user's behalf,
// along with the user's profile. The function must invoke `cb` with a user
// object, which will be set at `req.user` in route handlers after
// authentication.
passport.use(new GoogleStrategy({
  clientID: config['OAUTH2_CLIENT_ID'],
  clientSecret: config['OAUTH2_CLIENT_SECRET'],
  callbackURL: config['OAUTH2_CALLBACK'],
  accessType: 'offline'
}, (accessToken, refreshToken, profile, cb) => {
    console.log('accessToken >  ');
    console.log(accessToken);
    console.log('Inside use method');
  // Extract the minimal profile information we need from the profile object
  // provided by Google
  console.log(profile);
  var profile = extractProfile(profile);
  cb(null, profile);
}));

passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

module.exports = passport;