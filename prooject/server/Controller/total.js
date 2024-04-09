const users = require('../model/Model');
const product = require('../model/logo');
const cate = require('../model/category');
const ord = require('../model/order');
// const subcat = require('../model/subcategory')
const total = async (req, res) => {
     try {
          var { tuser, tproduct, tcat,tsubcat, tadmin, pen, dis, ari } = [];
          var { totuser, totproduct, totcat,totsubcat, totadmin, tpen, tdis, tari } = 0;
          
          tadmin = await users.find({ isadmin: true });
          tuser = await users.find({ isadmin: false });
          tproduct = await product.find();
          tcat = await cate.find();
          // tsubcat=await subcat.find();
          pen = await ord.find({ orderstatus: "pending" });
          dis = await ord.find({ orderstatus: "dispatch" });//TOTAL DISPATCH ORDER
          ari = await ord.find({ orderstatus: "arrived" });//TOTAL ARRIVED ORDER

          totadmin = tadmin.length;
          totuser = tuser.length;
          totproduct = tproduct.length;
          totcat = tcat.length;
          // totsubcat=subcat.length;
          tpen = pen.length;
          tdis = dis.length;
          tari = ari.length;
          res.send({ totuser, totproduct, totcat, totadmin, tpen, tdis, tari,totsubcat });
     } catch (error) {
          console.log("total error", error);
     }
}

module.exports = { total };
// const users = require('../model/users');
// const product = require('../model/product');
// const cate = require('../model/category');
// const ord = require('../model/order');
// const moment = require('moment');

// const total = async (req,res) =>{
//      try {
//           var {tuser,tproduct,tcat,tadmin,torder,pen,dis,ari,logeduser} = [];
//           var {totuser,totproduct,totcat,totadmin,totorder,tpen,tdis,tari,tlogeduser} = 0;
//           //find
//           var date = moment().format('DD-MM-YY');

//           tadmin = await users.find({isAdmin:true}); //TOTAL ADMIN
//           tuser = await users.find({isAdmin:false});//TOTAL USER
//           tproduct = await product.find();//TOTAL PRODUCT
//           tcat = await cate.find();//TOTAL CATEGORY
//           torder = await ord.find();//TOTAL ORDER
//           pen = await ord.find({orderstatus:"pending"});//TOTAL PENDING ORDER
//           dis = await ord.find({orderstatus:"dispatch"});//TOTAL DISPATCH ORDER
//           ari = await ord.find({orderstatus:"arrived"});//TOTAL ARRIVED ORDER
//           logeduser = await users.find({logedin:date});


//           //TOTAL CALCULATION
//           totuser = tuser.length;
//           totproduct = tproduct.length;
//           totcat = tcat.length;
//           totadmin = tadmin.length;
//           totorder = torder.length;
//           tpen = pen.length;
//           tdis = dis.length;
//           tari = ari.length;
//           tlogeduser = logeduser.length;
//           res.send({totuser,totproduct,totcat,totadmin,totorder,tpen,tdis,tari,tlogeduser});
//      } catch (error) {
//           console.log("total error",error);
//      }
// }

// module.exports = {total};