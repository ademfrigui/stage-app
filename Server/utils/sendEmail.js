const nodemailer = require('nodemailer')

exports.sendEmail = ('/sendMail', (req, res) => {
    const output = `
      <p>Demande Conge</p>
      <h3>user Details</h3>
      <ul>  
        <li>username: ${req.body.username}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>conge accepted</p>
    `;
    
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: 'tstage467@gmail.com', // generated ethereal user
          pass: 'muwkjsgygtgrdguz'  // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
    });
  
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Nodemailer Contact" <tstage467@gmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject: 'Node Contact Request', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };
  
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
        res.render('contact', {msg:'Email has been sent'});
    });
    });