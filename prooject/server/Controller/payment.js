const Razorpay = require('razorpay');
const crypto = require('crypto');
const KEY_ID = 'rzp_test_dBUhnvelCNNpac'
const SECRET_KEY = 'al5dbnOt0etOP1EPANgtMOXk'

const orders = (req, res) => {
     var instance = new Razorpay({ key_id: KEY_ID, key_secret: SECRET_KEY })


     var options = {
          amount: req.body.amount * 100,  // amount in the smallest currency unit
          currency: "INR"
     };
     instance.orders.create(options, function (err, order) {
          if (err) {
               console.log("server err", err);
               return res.send("internel server error");
          }
          else {
               return res.send(order);
          }
          console.log(order);
     });

}


// const verify = (req, res) => {
//      let body =
//     req.body.response.razorpay_order_id +
//     "|" +
//     req.body.response.razorpay_payment_id;


//      var generated_signature = crypto
//     .createHmac("sha256", SECRET_KEY)
//     .update(body.toString())
//     .digest("hex");
//      // generated_signature = crypto.hmac_sha256(req.body.response.order_id + "|" + req.body.response.razorpay_payment_id, SECRET_KEY);
//      if (generated_signature == req.body.response.razorpay_signature) {
//           res.send(generated_signature);
//      }
//      else {
//           res.send("invalid sign");
//      }
// }


const verify = (req, res) => {
     let body =
       req.body.response.razorpay_order_id +
       "|" +
       req.body.response.razorpay_payment_id;
   
     var expectedSignature = crypto
       .createHmac("sha256", SECRET_KEY)
       .update(body.toString())
       .digest("hex");
   
     console.log(expectedSignature);
   
     if (expectedSignature === req.body.response.razorpay_signature) {
       res.send({ code: 200, message: "Sign Valid" });
     } else {
       res.send({ code: 500, message: "Sign Invalid" });
     }
   };
module.exports = { orders, verify };