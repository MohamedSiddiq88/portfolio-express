import express from "express"
import nodemailer from "nodemailer";

const router=express.Router();


router.post("/sendmail",async(req,res)=>{
    try {
        //is user available 
        const name =req.body.name
        const mail =req.body.email
        const subject =req.body.subject
        const message =req.body.message

        if(!(name || mail || subject || message)){
        return res.status(400).json({data:"invalid"})
        }
       
        

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASSWORD,
        },
      });
  
      let info = await transporter.sendMail({
        from: '"pizza 👻" <dingdong88700@gmail.com>', // sender address
        to: "diddiq88@gmail.com", // list of receivers
        subject: subject, // Subject line
        text: message, // plain text body
      });

    console.log("Message sent: %s", info.messageId);

    res.json(info);
  } catch (error) {
    res.status(500).json("internal server error");
  }
})


export const mailRouter = router;
