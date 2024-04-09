const { default: mongoose } = require("mongoose");
const nodemailer = require("nodemailer");
const ord = require('../model/order');
const detail = require('../model/orderdetail');
const fs = require('fs');
const PDFDocument = require('pdfkit');
const logomodel = require('../model/logo')
const https = require("https")
const { default: axios } = require("axios")

const getorder = async (req, res) => {
     try {
          const id = req.params.id;
          console.log(id, "email")
          var query1 = [
               {
                    $match: { user: id }
               },
               {
                    $lookup: {
                         from: "orderdetails",
                         localField: "orderid",
                         foreignField: "orderid",
                         as: "orderdetaildata"
                    }
               }
          ];
          console.log(query1[1].$lookup.localField, "---==--")
          const getod = await ord.aggregate(query1).exec();
          console.log(id, "email")
          if (getod.length > 0) {
               console.log(id, "email")
               res.send(getod);
          }
          else {
               res.send("No items you orderd");
          }
     } catch (error) {
          console.log("erooro", error);
     }
}

const generateInvoice = (product, id, email, total) => {
     const doc = new PDFDocument();
     const invoicePath = `./invoices/${id}.pdf`;
     const writeStream = fs.createWriteStream(invoicePath);

     doc.pipe(writeStream);

     doc.fontSize(10).text(`Email: ${email}`);
     // doc.fontSize(12).text(`Invoice for Order ID: ${id}`);
     for (let item of product) {
          doc.fontSize(10).text(`Product: ${item.logoname}`);
          doc.fontSize(10).text(`Price: ${item.price}`);
          doc.fontSize(10).text(`Quantity: ${item.user_qty}`);
          doc.fontSize(10).text(`size: ${item.size}`);
          doc.fontSize(10).text(`colour: ${item.color}`);


     }
     doc.fontSize(10).text(`Total Bill is: ${total / 100}`);

     doc.end();

     return invoicePath;
};
//22 const product = require('../model/product');

// const placeorder = async (req,res) =>{

//      var {product,payid,amount,email,fname,lname,phone,country,state,city} = req.body;

//      var pid = [];
//      for(let i = 0; i<product.length ; i++ ){
//           pid[i] = product[i]._id;
//      }

//      const data = await ord.create({
//           pids:pid,
//           payid:payid,
//           amount:amount             
//      }).then((res)=>{
//           console.log('res.',data);
//           pids.forEach(async (item) => {

//                const data1 = await detail.create({
//                     pid:item._id,
//                     pname:item.name,
//                     pqty:item.qty,
//                     price:item.price,
//                     orderid:res.id,
//                     email:email,
//                     fname:fname,
//                     lname:lname,
//                     phone:phone,
//                     country:country,
//                     state:state,
//                     city:city
//                }).then((res1)=>{
//                     console.log("order added",res1.data);
//                     })
//           });
//      }) 
// }
const placeorder = async (req, res) => {
     const { product, payid, amount, email, fname, lname, phone, country, state, city, orderid, signature } = req.body;
     var pid = [];
     for (let i = 0; i < product.length; i++) {
          pid[i] = product[i]._id;
     }

     try {
          const order = await ord.create({
               pids: pid,
               payid: payid,
               amount: amount,
               signature: signature,
               orderid: orderid,
               user: email
          });
          console.log('Order created:', order);

          // Loop through each product ID and create order details
          for (let item of product) {
               const productDetails = await detail.create({

                    pid: item._id,
                    pname: item.name,
                    pimg: item.images[0],
                    pqty: item.user_qty,
                    price: item.price,
                    orderid: orderid,
                    email: email,
                    fname: fname,
                    lname: lname,
                    phone: phone,
                    country: country,
                    state: state,
                    city: city
               });
               var find = await logomodel.findOne({ _id: item._id });
               console.log("find", find);
               if (find) {
                    var qtyup = find.quantity - item.user_qty;
                    console.log("qtyup", qtyup);
                    var up = await logomodel.findByIdAndUpdate(
                         { _id: item._id },
                         { quantity: qtyup }
                         , { new: true }
                    );
               }
               console.log("Product updated:", item._id);
               console.log("Order detail added:", productDetails, up);

          }
          const pdf1 = generateInvoice(product, orderid, email, amount);
          let transport = nodemailer.createTransport({
               service: "gmail",
               service: "gmail",
               auth: {
                    user: "sujalparekh816@gmail.com",
                    pass: "hvtpoywyokqcrvtt"
               }
          });
          let mailop = {
               from: "sujalparekh816@gmail.com",
               to: email,
               subject: "Your order placed",
               text: "your order placed just right now",
               attachments: [
                    {
                         filename: ` ${orderid}.pdf`,
                         path: pdf1
                    }
               ]
          }
          transport.sendMail(mailop, (err, info) => {
               if (err) {
                    console.log("error mail", err);
               }
               else {
                    console.log("info", info);
               }
          })



          let sendmsg = {
               message: JSON.stringify("Congratulations on successfully placing your order on eShopper! We're thrilled to assist you. Thank you for choosing us, and we look forward to delivering a fantastic experience"),
               media: JSON.stringify([]),
               delay: 0,
               schedule: null,
               numbers: phone,
               api_key:
                    "U2FsdGVkX197/rEAnsJ6LDe28/eX5lPKV7lg1WGP8+Q=",
          };
          const axiosConfig = {
               // Insecure HTTPS requests will be allowed since your frontend is running on HTTP
               // You may want to remove this option in production and use HTTPS for your frontend
               httpsAgent: new https.Agent({ rejectUnauthorized: false }),
               headers: {
                    Authorization: `U2FsdGVkX197/rEAnsJ6LDe28/eX5lPKV7lg1WGP8+Q=`,
               },
          };
          axios
               .post("https://api.wapmonkey.com/send-message", sendmsg, axiosConfig)
               .then((response) => {
                    console.log(response, "response");
               })
               .catch((error) => {
                    console.log(error);
               });

          console.log("email sended")
          // Send response indicating success
          res.status(200).json({ message: "Order placed successfully" });
     } catch (error) {
          // Handle errors
          console.error("Error placing order:", error);
          res.status(500).json({ error: "Failed to place order" });
     }
}
const getallpending = async (req, res) => {
     try {
          const getod = await ord.find({ orderstatus: "pending" });
          if (getod.length > 0) {
               res.send(getod);
          }
          else {
               res.send("No items you orderd");
          }
     } catch (error) {
          console.log("erooro", error);
     }
}
const orderGet = async (req, res) => {
     try {
         console.log(req.body, isNaN(req.body.search), "req");
         let orderList = [];
         const searchValueArray = [];
         const options = [
             {
                 $match: {  },
             },
         ];
         // console.log(options, "MMMMMMM");
 
         if (req.body.search != undefined && req.body.search != null && req.body.search != "") {
             // req.body.search = req.body.search.trim();
             const searchValueInteger = parseInt(req.body.search);
             console.log(searchValueInteger,"search valueee");
 
             searchValueArray.push(
                 { "fname": { $regex: new RegExp(req.body.search, 'i') } },
                 { "lname": { $regex: new RegExp(req.body.search, 'i') } },
 
                 { "email": { $regex: new RegExp(req.body.search, 'i') } },
                 // { "mobile": { $regex: new RegExp(req.body.search, 'i') } },
                 // // { "order_date": { $regex: new RegExp(startDate) } },
                 // { "total_amt": isNaN(req.body.search) ? undefined : { $eq: parseInt(req.body.search) } },
                 // { "discount": isNaN(req.body.search) ? undefined : { $eq: parseInt(req.body.search) } },
                 // { "subtotal": isNaN(req.body.search) ? undefined : { $eq: parseInt(req.body.search) } }
             )
             options[0].$match.$or = searchValueArray;
         }
         if (req.body.date != undefined && req.body.date != null && req.body.date != "") {
             searchValueArray.push(
                 { "order_date": { $regex: new RegExp(moment(req.body.date, "YYYY-MM-DD").format("DD-MM-YYYY")) } },
             )
             options[0].$match.$or = searchValueArray;
         }
 
         console.log(options[0].$match, "options");
         const orderResults = await ord.aggregate(options).exec();
         console.log(orderResults, "orderResults");
         if (orderResults.length > 0) {
          console.log(orderResults.length,"lengthhhhh");
             for (let i = 0; i < orderResults.length; i++) {
                 const singleOrder = { order: orderResults[i], details: [] };
                 console.log(singleOrder, "sssssssssssssss");
                 const orderDetailResults = await new Promise((resolve, reject) => {
                     console.log("*", singleOrder.order.orderid);
                     detail
                         .aggregate([
                             {
                                 $match: {
                                   orderid: mongoose.Types.ObjectId(singleOrder.order.orderid),
                                 },
                             },
                             {
                                 $lookup: {
                                     from: "product_details",
                                     localField: "p_id",
                                     foreignField: "_id",
                                     as: "product",
                                 },
                             },
                             {
                                 $unwind: "$product",
                             },
                         ])
                         .exec((error, result1) => {
                             console.log(result1, "result1");
                             if (error) {
                                 console.log("error", error);
                                 reject(error);
                             } else {
                                 console.log("result1", result1);
                                 resolve(result1);
                             }
                         });
                 });
                 // console.log("((((", orderDetailResults);
                 if (orderDetailResults.length > 0) {
                     singleOrder.details = orderDetailResults;
                     // console.log("", singleOrder,);
                     orderList.push(singleOrder);
                 } else {
                     singleOrder.details = [];
                     orderList.push(singleOrder);
                 }
 
                 if (orderResults.length - 1 === i) {
                     res.send({
                         status: 1,
                         result: orderList,
                         message: "Order Get....!",
                     });
                 }
             }
         } else {
             res.send({
                 status: 0,
                 result: [],
                 message: "Data Not Found",
             });
         }
     } catch (error) {
         console.log(error);
     }
 };
const getalldispatch = async (req, res) => {
     try {
          const getod = await ord.find({ orderstatus: "dispatch" });
          if (getod.length > 0) {
               res.send(getod);
          }
          else {
               res.send("No items you orderd");
          }
     } catch (error) {
          console.log("erooro", error);
     }
}

const getallarrived = async (req, res) => {
     try {
          const getod = await ord.find({ orderstatus: "arrived" });
          if (getod.length > 0) {
               res.send(getod);
          }
          else {
               res.send("No items you orderd");
          }
     } catch (error) {
          console.log("erooro", error);
     }
}
const dispatch = async (req, res) => {
     try {
          var id = req.params.id;
          const find = await ord.findOne({ orderid: id });
          if (find) {
               const up = await ord.findByIdAndUpdate(
                    { _id: find._id },
                    { orderstatus: "dispatch" },
                    { new: true }
               )
               if (up) {
                    res.send(up);
               }
               else {
                    res.send("error");
               }
          }
     } catch (error) {
          console.log(error, "error");
     }
}

const arrived = async (req, res) => {
     try {
          var id = req.params.id;
          const find = await ord.findOne({ orderid: id });
          if (find) {
               const up = await ord.findByIdAndUpdate(
                    { _id: find._id },
                    { orderstatus: "arrived" },
                    //  {orderstatus:"delevered"},

                    { new: true }
               )
               if (up) {
                    res.send(up);
               }
               else {
                    res.send("error");
               }
          }
     } catch (error) {
          console.log(error, "error");
     }

}
module.exports = { orderGet,placeorder, getorder, getallpending, getalldispatch, getallarrived, dispatch, arrived };