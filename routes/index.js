var router = require('express').Router();
const passport = require('passport');
const express = require('express');

/* GET home page. */
// The root route renders our only view
router.get('/', function (req, res, next) {
  // creating a root route  
  // This could be a landing page, or just redirect to your main resource page which you'll have an a tag that makes 
  // a request to `/auth/google` route below
  res.render('index', { title: 'Home & Decor - Office edition' })
});

// logins
// Google OAuth login route method
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/', // where we want the client to go after they login 
    failureRedirect: '/' // where we want the client to go if the login fails
  }
));

// OAuth logout route method
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});



module.exports = router;
