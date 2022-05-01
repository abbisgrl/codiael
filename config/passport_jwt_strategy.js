const passport = require('passport');
const { ExtractJwt } = require('passport-jwt');
const JWTStrategy =require('passport-jwt').Strategy;
const Extract = require('passport-jwt').ExtractJwt;
const env = require('./environment');

const User = require('../models/user');

let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : env.jwt_secret
}

passport.use(new JWTStrategy(opts, function(jwtPayload,done){
    User.findById(jwtPayload._id, function(err,user){
        if(err){console.log('error in finding the user');return;}
        if(user){
            return done(null,user);
        }else{
            return done(null,false);
        }
    })
}));


module.exports = passport;