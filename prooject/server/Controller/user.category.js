const categorymodel = require("../model/category");
const addcategory = async (req, res) => {
    try {
        const { cname } = req.body;

        const data = await categorymodel.create({
            cname: cname,

        });
        res.status(200).send({ message: "category are added", data: data });
    } catch (error) {
        res.status(401).send(error);
    }
}
const getcategory = async (req, res) => {
    try {
        // const { cname } = req.body;

        const data = await categorymodel.find();
        res.status(200).send({ message: "category are fineded", data: data });
    } catch (error) {
        res.status(401).send(error);
    }
}
const delcategory = async (req, res) => {
    try {
        const data = await categorymodel.findByIdAndDelete(req.params.id)
        console.log(data);
        res.send(data);

    } catch (error) {
        res.send(error)
    }

}

const oneCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const oneCategory = await categorymodel.findOne({ _id: id })
        res.send(oneCategory)
    } catch (error) {
        // res.status(401).send(error)
        console.log("error", error)
    }
  
  }


module.exports = { addcategory, getcategory , oneCategory , delcategory};