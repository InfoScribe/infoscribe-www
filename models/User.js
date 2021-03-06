var mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs');
    crypto = require('crypto'),
    slug = require('slug');

var config = {
  secrets: require('../config/secrets')
};

var schema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true, required : true},
  password: String,
  picture: String,
  
  facebook: String,
  twitter: String,
  google: String,
  github: String,
  tokens: Array,

  profile: {
    name: { type: String, default: '' },
    organization: { type: String, default: '' },
    location: { type: String, default: '' },
    website: { type: String, default: '' }
  },
  
  permissions: {
    verified: { type: Boolean, default: false },
    moderator: { type: Boolean, default: false },
    admin: { type: Boolean, default: false }
  },

  resetPasswordToken: String,
  resetPasswordExpires: Date,
  emailVerificationToken: String
});

/**
 * Hash the password for security.
 * "Pre" is a Mongoose middleware that executes before each user.save() call.
 */

schema.pre('save', function(next) {
  var user = this;
  
  if (!user.isModified('password')) return next();
  
  // @todo Handle updating posts when a user changes their email address
  
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

/**
 * Validate user's password.
 * Used by Passport-Local Strategy for password validation.
 */
schema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

/**
 * Get URL to a user's gravatar.
 * Used in Navbar and Account Management page.
 */
schema.methods.gravatar = function(size) {
  if (!size) size = 200;

  if (!this.email) {
    return 'https://gravatar.com/avatar/?s=' + size + '&d=retro';
  }

  var md5 = crypto.createHash('md5').update(this.email).digest('hex');
  return 'https://gravatar.com/avatar/' + md5 + '?s=' + size + '&d=retro';
};

module.exports = mongoose.model('User', schema);