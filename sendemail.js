// Import nodemailer
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'apmajmal52@gmail.com', // Your Gmail email address
        pass: 'svpl qiaz lpwp knos' // Your Gmail password or app-specific password
    },
    tls:{
        rejectUnauthorized: false
    }
});

// Define email options
let mailOptions = {
    from: 'apmajmal52@gmail.com',
    to: 'apmajmal52@gmail.com', // Friend's email address
    subject: 'Test Email',
    text: 'This is a test email sent using Nodemailer.'
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error occurred:', error);
    }
    console.log('Email sent successfully:', info.response);
});