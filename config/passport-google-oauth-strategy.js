const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');

passport.use(new googleStrategy({
    clientID:"935057575604-dj1cnusla347r7tqegtrp76tdut341pb.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL:"http://localhost:8005/users/auth/google/callback"
},
    function(accessToken,refreshToken,profile,done){
        User.findOne(email,profile.emails[0].value.exec(function(err,user){
            if(err){
                console.log('error in google strategy-passport',err)
                return;
            }
            console.log(profile);
            if(user){
                return done(null,user);
            }else{
                User.create({
                    name:profile.displayName,
                    email: profile.emails[0].value,
                    password:crypto.randomBytes(20).toString('hex')
                }, function(err,user){
                    if(err){
                        console.log('error in google strategy-passport',err);
                        return;
                    }
                    return done(null,user);
                });
            }
        }))
    }
));

module.exports = passport;
