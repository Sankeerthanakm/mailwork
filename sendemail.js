
const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'sankeerthana2000km@gmail.com', 
        pass: 'vfyk nyvu paqe egfx' 
    },
    tls:{
        rejectUnauthorized: false
    }
});


let mailOptions = {
    from: 'sankeerthana2000km@gmail.com',
    to: 'sankeerthana2000km@gmail.com', 
    subject: 'Test Email',
    text: 'This is a test email sent using Nodemailer.'
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error occurred:', error);
    }
    console.log('Email sent successfully:', info.response);
});