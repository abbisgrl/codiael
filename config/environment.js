const development = {
    name:'development',
    asset_path :'./assets',
    session_cookie_key:'blahsomething',
    db:'codeial_development',
    smtp:{
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'alchemy.cn18',
            pass: 'codingninjas'
        }
    },
    google_clientID:"935057575604-dj1cnusla347r7tqegtrp76tdut341pb.apps.googleusercontent.com",
    google_clientSecret:"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",
    google_callbackURL:"http://localhost:8005/users/auth/google/callback",
    jwt_secret:'codial'
}
const production = {
    name:'production'
}

module.exports = development