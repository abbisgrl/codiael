const nodeMailer = require('../config/nodemailer');

exports.newComment = (comments)=>{
    console.log('Inside the new comment mail');
    nodeMailer.transporter.sendMail({
        from:'shahgyanendra252@gmail.com',
        to:comment.user.email,
        subject:'New comment is publish',
        html:'<h1>Yup the comment is successfully published</h1>'
    },(err,info)=>{
        if(err){
            console.log('error in sending the mail');
            return;
        }
        console.log('message sent',info);
        return;
    }
    )
}