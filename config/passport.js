const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');   //Require your User Model here!

// configuring Passport
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK
},
  // callback function
  function (accessToken, refreshToken, profile, cb) {
    // a user has logged in via OAuth!
    // refer to the lesson plan from earlier today in order to set this up
    User.findOne({ googleId: profile.id }).then(async function (user) {
      if (user) return cb(null, user);
      // new user on the OAuth
      try {
        user = await User.create({
          name: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value,
          admin: false,
        });
        return cb(null, user);
      } catch (err) {
        cb(err);
      }
    });
  }
)
);
passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function (id, done) {
  // finding the user, then calling cb
  // When you call this done function passport assigns the user document to req.user, which will 
  // be availible in every Single controller function, so you always know the logged in user
  User.findById(id).then(function (user) {
    done(null, user);
  });
});



