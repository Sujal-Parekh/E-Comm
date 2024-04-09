// require express
const express = require('express');
const app = express();
app.use(express.json());
const db = require("./Database/db");
// require for using multiple links
const mcontroller = require("./Controller/User.controller");//use to registration and login
const catagory = require("./Controller/user.category");//use to category
const subcategory = require("./Controller/user.subcategory");
const logo = require("./Controller/user.logo");
const addcart = require("./Controller/user.addtocart");
const payment = require("./Controller/payment");
// Add this middleware to enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
// display total user,product and category
const tot= require('./Controller/total')
// multer and path cdn
const multer = require('multer');
const path = require('path');
const orderdata = require("./Controller/order");
app.get('/orderlist/:id',orderdata.getorder);
// using verifytoken
const verifytoken = require("./middleware/auth");
// use backend in front end
const cors = require('cors');
const category = require('./model/category');
app.use(cors());
// multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "./public/images"));
    },
    filename: (req, file, cb) => {
        const name = file.originalname;
        cb(null, name);
    }
});
const upload = multer({ storage: storage });
// use to store the images
app.use('/public/images', express.static(path.join(__dirname, './public/images')));
// APIs
// app.post("/addcategory", upload.array("images"), catagory.addcategory);
// app.post("/subcategory", upload.array("images"), subcategory.subcategory);
// addcart API
app.post("/addcart", addcart.addtocart);
// logo API
app.post("/addlogo", upload.array("images"), logo.addlogo);
app.get("/alllogo", logo.alllogo);
app.put("/updatelogo/:id", upload.array("images"), logo.updatelogo);
app.delete("/dellogo/:id", logo.dellogo);
app.get("/search-logo/:wd", logo.searchProduct);
app.get("/oneproduct/:id",logo.oneProduct)
app.get("/one-cat/:id",catagory.oneCategory)
app.get("/total",tot.total)
// category
app.post("/addcategory", catagory.addcategory )
app.get('/getcategory', catagory.getcategory)//get all category
app.delete("/delcategory/:id", catagory.delcategory);//delete category

app.post("/allsubcategory",subcategory.allsubcategory)//get all subcategory
app.post("/subcategory",subcategory.subcategory)//category are find and then display subcategory
app.get('/getsubcategory/:cat',subcategory.getsubcategory)//get all subcategory
app.delete("/delsubcategory/:id", subcategory.delsubcategory);//delete category

// order pending arrived and dispach
app.get('/porder',orderdata.getallpending);
app.get('/dorder',orderdata.getalldispatch);
app.get('/aorder',orderdata.getallarrived);
app.get('/dispatch/:id',orderdata.dispatch);
app.get('/arrived/:id',orderdata.arrived);

app.put("/updatelogo/:id", upload.array("images"), logo.updatelogo);
app.put("/updatelogoimg/:id", logo.updatelogoimg);
app.put('/editproductimg/:id',upload.array("image"),logo.editproductimg);

// category
app.get("/category/:cid", logo.categoryProduct);
app.get('/subcategory/:scid',logo.subcategoryProduct)
// app.get('/getcategory', catagory.getcategory);
// payment
app.post("/payment", payment.orders);
app.post("/verify", payment.verify);
// bill
app.post('/order', orderdata.placeorder);
app.post('/get-order',orderdata.orderGet)//admin side order display
// registration and login with verification token
app.get("/all", mcontroller.alluser);
app.post("/registration", mcontroller.registration);
app.post("/login", mcontroller.login);
app.get('/auth/:tok', mcontroller.auth);
app.post('/sendotp',mcontroller.sendotp);
app.post('/submitotp',mcontroller.submitotp);
app.post('/uppassword',mcontroller.updatepassword);
// app.post('/uppass',mcontroller.updatepass);
// listen on port 5000
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});






// // require express
// const express = require('express')-
// const app = express();
// app.use(express.json())
// const db = require("./Database/db")
// // require for using multiple links
// const mcontroller = require("./Controller/User.controller")
// const catagory = require("./Controller/user.category")
// const subcategory=require("./Controller/user.subcategory")
// const logo=require("./Controller/user.logo")
// const addcart=require("./Controller/user.addtocart")
// const payment=require("./Controller/payment")
// // multer and path cdn
// const multer = require('multer')
// const path = require('path')
// const orderdata= require("./Controller/order")
// // using verifytoken
// const verifytoken = require("./middleware/auth")
// // use backend in front end
// const cors = require('cors')
// app.use(cors())
// //multer
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(__dirname, "./public/images"), (err) => {
//             console.log(err)
//         });
//     }, filename: (req, file, cb) => {
//         const name = file.originalname;
//         cb(null, name, (err, success) => {
//             if (err) {
//                 console.log(err);
//             }
//         })
//     }

// })
// const upload=multer({storage:storage})
// //use tostore the images
// app.use('/public/images',express.static('./public/images'))
//     //  apis
// app.post("/addcategory",upload.array("images"), catagory.addcategory )
// app.post("/subcategory",upload.array("images"),subcategory.subcategory)
// // addcart api
// app.post("/addcart",addcart.addtocart)

// //logo api
// app.post("/addlogo",upload.array("images"),logo.addlogo)
// app.get("/alllogo",upload.array("images"),logo.alllogo)
// app.put("/updatelogo/:id",upload.array("images"),logo.updatelogo)
// app.delete("/dellogo/:id",upload.array("images"),logo.dellogo)
// app.get("/search-logo/:wd",logo.searchProduct)
// // category
// app.get("/category/:cid",logo.categoryProduct)
// app.get('/getcategory',catagory.getcategory)

// // payment
// app.post("/payment",payment.orders)
// app.post("/verify",payment.verify)
//  //bill
// app.post('/order',orderdata.placeorder);
// // registaration and login with verification token
// app.get("/all", mcontroller.alluser)
// app.post("/registration", mcontroller.registration)
// app.post("/login", mcontroller.login)
// app.get('/auth',mcontroller.auth)
// app.listen(5000);           