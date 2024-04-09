const category = require("../model/category");
const categorymodel = require("../model/subcategory");
const subcategory = async (req, res) => {
    try {
        const { cid,subname} = req.body;
        console.log(cid,subname,"subcategoryyy");
        const cdata =await category.find({_id:cid});
        if(cdata){
            console.log("------------------------------------------",cdata)
            const cname = cdata[0].cname;
            console.log("------------------------------------------cname",cname)

        const data = await categorymodel.create({
            cid: cid,
            subname:subname,
        cname:cname

        });
        res.status(200).send({ message: "subcategory are added", data: data });
        }
        
    //    res.send(data)
        
    } catch (error) {
        res.status(401).send(error);
    }
}
const allsubcategory = async (req, res) => {
    try {
        // const { cname } = req.body;

        const data = await categorymodel.find();
        res.status(200).send({ message: "subcategory are fineded", data: data });
    } catch (error) {
        res.status(401).send(error);
    }
}
const getsubcategory = async (req,res)=>{
    try {
         const cat= req.params.cat;
         console.log('-----------------cat',cat);
    const add = await categorymodel.find({cid:cat})
    res.send(add);    
    } catch (error) {
         console.log(error);
    }
}
const delsubcategory = async (req, res) => {
    try {
        const data = await categorymodel.findByIdAndDelete(req.params.id)
        console.log(data);
        res.send(data);

    } catch (error) {
        res.send(error)
    }

}
const onesubCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const oneCategory = await categorymodel.findOne({ _id: id })
        res.send(oneCategory)
    } catch (error) {
        // res.status(401).send(error)
        console.log("error", error)
    }
  
  }

// const subcategory = async (req, res) => {
//     try {
//         // console.log(req,"subcname");
//         const { subcname ,c_id} = req.body
//         // console.log("!!!!!!!!!!!!",subcname)
//         // console.log("helloo");
//         // if (subcname) {
//         //     console.log("this is sub-category already exist..");
//         // }
//         const data = await categorymodel.create({
//             cid: c_id,
//             subname: subcname,
//             // images: img
//         })
//         // console.log(data);
//         res.status(200).send({ message: "Sub-Category Added Successfully", data: data })
//     } catch (error) {
//         res.status(401).send(error);

//     }
// }
module.exports = {subcategory,getsubcategory,onesubCategory,allsubcategory,delsubcategory};