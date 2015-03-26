/**
 * IMPORTANT! DO NOT COMMIT THIS FILE TO GIT IF YOU HAVE ADDED CONFIG OPTIONS!
 */

module.exports = {

  db: process.env.MONGODB || 'mongodb://localhost:27017/infoscribe',

  sessionSecret: process.env.SESSION_SECRET || 'b5e9cf98d5d22fc337ff07a4f099af4a',

  sendgrid: {
    user: process.env.SENDGRID_USER || '',
    password: process.env.SENDGRID_PASSWORD || ''
  },

  facebook: {
    clientID: process.env.FACEBOOK_ID || '',
    clientSecret: process.env.FACEBOOK_SECRET || '',
    callbackURL: '/auth/facebook/callback',
    passReqToCallback: true
  },

  google: {
    clientID: process.env.GOOGLE_ID || '',
    clientSecret: process.env.GOOGLE_SECRET || '',
    callbackURL: '/auth/google/callback',
    passReqToCallback: true
  }
  
};
