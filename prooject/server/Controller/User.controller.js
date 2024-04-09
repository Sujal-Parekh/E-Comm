const studmodel = require("../model/Model")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const secretkey = "2924jfijnr9394_@"
const nodemailer =require("nodemailer")

const registration = async (req, res) => {

    const pss = await bcrypt.hash(req.body.password, 10)
    const data1 = await studmodel.findOne({ email: req.body.email })
    if (data1) {
        return res.send("email id is already ex ists")
    }
    const data = await studmodel.create({
        name: req.body.name,
        email: req.body.email,
        password: pss,
        address: req.body.address
    });
    res.send(data)
}


const login = async (req, res) => {

    const exists = await studmodel.findOne({ email: req.body.email });
    console.log(exists);
    if (exists) {
        if (await bcrypt.compare(req.body.password, exists.password)) {
            if (exists) {
                const tok = await jwt.sign({ id: exists._id, email: req.body.email }, secretkey, {
                    expiresIn: 3 * (60 * 60)
                })
                res
                    .status(200)
                    .send({ message: "user log successfully", data: exists, tok });
            }

        }
        else {
            res.status(401).send({ message: "password is incorrect..." });
        }

    }
    else {
        res.status(401).send({ message: "email id is incorrect..." });

    }
}
const alluser = async (req, res) => {
    const alldata = await studmodel.find()
    res.send(alldata)
}
const auth = async (req, res) => {
    try {
        const tok = req.params.tok;
        if (tok == null || tok == "null") {
            return res.send("please login first");
        }
        else {
            // console.log(tok,"tok11111111111111");
            try {
                jwt.verify(tok, secretKey, async (err, decode) => {
                    try {
                        if (err) {
                            console.log("token err",err);
                            res.send("Token is expired ")
                        }
                        var _id = decode._id;
                        const find = await studmodel.findOne({ _id: _id });
                        res.send(find);
                    } catch (error) {
                        res.send("Token is expired else")
                    }   
                }) 
            } catch (error) {
                res.send("Token is expired ")
                
            }
           
        }
    } catch (error) {
        console.log("profile error=>" + error);
    }
}


const sendotp = async (req, res) => {
    try {
        console.log("req body", req.body);
        const _otp = Math.floor(100000 + Math.random() * 900000);
        console.log(_otp, "otp");

        let user = await studmodel.findOne({ email: req.body.email });
        console.log("---------->", user);
        
        if (!user) {
            console.log("user not found");
            return res.status(500).send({ code: 500, message: "User not found" });
        }

        const up = await studmodel.findByIdAndUpdate({ _id: user._id }, { otp: _otp }, { new: true });
        console.log("user found");

        let transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "sujalparekh816@gmail.com",
                pass: "hvtpoywyokqcrvtt"
            }
        });

        let mailop = {
            from: "sujalparekh816@gmail.com",
            to: req.body.email,
            subject: "Application OTP",
            text: `Your OTP is ${_otp}`
        };

        transport.sendMail(mailop, (err, info) => {
            if (err) {
                console.log("error sending mail", err);
                return res.status(500).send("Something went wrong");
            } else {
                console.log("info", info);
                return res.status(200).send({ msg: "Email sent", info, up });
            }
        });
        console.log("email sent");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send(error);
    }
};

const submitotp =async (req,res)=>{
    try {
        const {email,otp} = req.body;
        const notp = Number(otp);
        const find = await studmodel.findOne({email:email});

        console.log("fin ======--------",find.otp);
        if(find.otp === notp)
        {
                res.send("otp verified");
            
        }else{
            res.send("wrong otp");
        }   
    } catch (error) {
        console.log("submit otp error",error);
    }
}

// const sendotp = async (req, res) => {
//     try {
//       console.log("req body",req.body);
//       // const { email } = req.body;
//       const _otp = Math.floor(100000 + Math.random() * 900000);
//       console.log(_otp,"otp");
//       let user = await users.findOne({ email: req.body.email });
//       // send to user mail
//       console.log("---------->", user);
//       if (!user) {
//         console.log("user not found");
//         res.send({ code: 500, message: "user not found" });
//       }
//       const up = await users.findByIdAndUpdate({_id:user._id},
//         {
//             otp:_otp
//         },{new:true});
       
//       console.log("user found");
//       let transport = nodemailer.createTransport({
//         service:"gmail",
//         service: "gmail",
//         auth: {
//              user: "chauhanjanak10000@gmail.com",
//              pass: "uiodtwczajemtxba"     
//         }
//    });
//    let mailop = {
//         from: "chauhanjanak10000@gmail.com", 
//         to: req.body.email, 
//         subject: "Application otp",
//         text: Your otp is ${_otp} 
        
//    }
   
//    transport.sendMail(mailop,(err,info)=>{
//         if(err)
//         {
//              console.log("error mail",err);
//              res.send("something went wrong")
//         }
//         else{
//              console.log("info",info);
//              res.send({msg:"email sended",info,up});
//         }
//    })
//    console.log("email sended");
    
//     //   let transporter = nodemailer.createTransport({
//     //     service: "gmail",
//     //     auth: {
//     //         user: "chauhanjanak10000@gmail.com",
//     //         pass: "uiodtwczajemtxba"
//     //     },
//     //   });
//     //     console.log("trnsporter")
//     //   let info = await transporter.sendMail({
//     //     from: "chauhanjanak10000@gmail.com",
//     //     to: req.body.email, // list of receivers
//     //     subject: "OTP", // Subject line
//     //     text: _otp,
//     //     // html: `<h1>${_otp}</h1>
//     //     // <p>Please Verify And Do Not share this otp</p>`,
//     //   });
//       console.log("info")
//     //   if (info.messageId) {
//     //     console.log(info, 84);
//     //     users.updateOne({ email: req.body.email }, { otp: _otp })
//     //       .then((result) => {
//     //         res.send({ code: 200, message: "otp send" });
//     //       })
//     //       .catch((err) => {
//     //         res.send({ code: 500, message: "Server err" });
//     //       });
//     //   } else {
//     //     res.send({ code: 500, message: "Server err" });
//     //   }
//     } catch (error) {
//       res.send(error);
//     }
//   };
const updatepass = async (req, res) => {
    try {
        const {pass,uppass,id} = req.body;
        const hashpass = await bcrypt.hash(uppass, 10);
        const ragis = await studmodel.findOne({_id:id});
        if(ragis)
        {
            console.log("data found-----------------");
            const matchpass = await bcrypt.compare(pass, ragis.password);
            console.log("hashed pass-----------------",matchpass);
            if(matchpass)
            {
                const updata = await studmodel.findByIdAndUpdate({_id:id},{
                    password:hashpass                            
                },{new:true});
                if(updata)
                {
                    res.send(updata);         
                }
            }
            else{
                res.send("Password is incorrect");         
            }
        }
        
    } catch (error) {
        console.log("error back", error);
    }

}
const updatepassword =async (req,res) =>{
    try {
        const {email,pass} = req.body;
        const password = await bcrypt.hash(pass, 10);
        const f1 = await studmodel.findOne({email:email});
        if(f1)
        {
            const f2=await studmodel.findByIdAndUpdate({_id:f1._id},
                {
                    password:password
                });
            if(f2)
            {
                res.send("password is updated");
            }
            else{
                res.send("something went wrong");
            }
        }
        else
        {
            res.send("something went wrong");
        }            
    } catch (error) {
        console.log("update password error",error);
    }
    
}
module.exports = {
    registration,
    login,
    alluser, auth,
    updatepass,sendotp,submitotp,updatepassword
}
