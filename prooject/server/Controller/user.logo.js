const { default: mongoose } = require("mongoose");
const logomodel = require("../model/logo");
// add logo code for insert the logo
const addlogo = async (req, res) => {

    try {
        console.log(req.body)

        const { logoname, price, description, quantity, category, subcategory, size,color } = req.body;

        var arrimage = [];
        for (let i = 0; i < req.files.length; i++) {
            // arrimage.push(req.files[i].filename);
            arrimage[i] = req.files[i].filename;
        }
        console.log("dladjhjgasdsg");
        const data = await logomodel.create({
            logoname: logoname,
            price: price,
            quantity: quantity,
            description: description,
            images: arrimage,
            cid: category,
            s_cid: subcategory,
            size: size,
            color:color
        })
        console.log(req.body)
        console.log(data, "data");
        res.status(200).send({ message: "logo are added", data: data });
    } catch (error) {
        res.status(401).send(error);
    }
}



// display all logo
const alllogo = async (req, res) => {
    const data = await logomodel.find()
    res.send(data)
}
// query for update
const updatelogo = async (req, res) => {
    const { logoname, price, description, quantity } = req.body;
    const upid = req.params.id;
    var arrimage = [];
    for (let i = 0; i < req.files.length; i++) {
        // arrimage[i] = req.files[i].filename;
        arrimage.push(req.files[i].filename); // Push filename to array
    }
    const present = await logomodel.findOne({ _id: upid });
    // console.log("data find",present);
    if (present) {
        const data = await logomodel.findByIdAndUpdate({ _id: upid }, {
            images: arrimage,
            logoname: logoname,
            quantity: quantity,
            price: price,
            description: description
        }, { new: true });
        res.send(data);
    }
}

const updatelogoimg = async (req, res) => {
    const { logoname, price, description, quantity ,color,size} = req.body;
    const upid = req.params.id;

    const present = await logomodel.findOne({ _id: upid });
    // console.log("data find",present);
    if (present) {
        const data = await logomodel.findByIdAndUpdate({ _id: upid }, {
            logoname: logoname,
            quantity: quantity,
            price: price,
            color:color,
            size:size,
            description: description
        }, { new: true });
        res.send(data);
    }
}
const editproductimg = async (req, res) => {
    try {
        console.log(req.params.id, "id")
        // var img = [];
        // for (let i = 0; i < req.files?.length; i++) {
        //     img[i] = req.files[i].filename;
        // }
        const { name, price, description, qty,color ,size} = req.body;
        const upid = req.params.id;
        const exists = await product.findOne({ _id: upid });
        console.log("data find", exists);
        if (exists) {
            const up = await product.findByIdAndUpdate({ _id: upid }, {
                name: name,
                price: price,
                description: description,
                color:color,
                size:size,
                qty: qty
            }, { new: true });
            res.send({
                message: "update",
                up
            });
        }
        else {
            res.send("no products details found");
        }
        console.log("you are trying to update products");
    } catch (error) {
        console.log(error);
    }
}

// query for delete
const dellogo = async (req, res) => {
    try {
        const data = await logomodel.findByIdAndDelete(req.params.id)
        console.log(data);
        res.send(data);

    } catch (error) {
        res.send(error)
    }

}
const searchProduct = async (req, res) => {

    try {
        var search = req.params.wd;
        const products = await logomodel.find({ logoname: { $regex: search, $options: "i" } });

        res.status(200).send(products)
        // console.log(products);
        // console.log(search);


    } catch (error) {
        res.send(error)
    }
}
//GET === FINDONE
const oneProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const oneProduct = await logomodel.findOne({ _id: id });
        console.log(oneProduct, "!!!!!!!!!!!!!!!!!!!!!!");
        res.send(oneProduct);
    } catch (error) {
        // res.status(401).send(error)
        console.log("error", error);
    }
};
const categoryProduct = async (req, res) => {
    try {
        let query = {};

        if (req.params.cid) {
            query.cid = req.params.cid;
        }
        // if (req.query.keyword) {
        //     query.$or = [
        //         { product_name: { $regex: req.query.keyword, $options: "i" } },
        //     ];
        // }
        // Search for products containing the keyword in the product_name field
        const data = await logomodel
            .find(query)
            .populate("cid")
        // .populate("uid")

        console.log(data, "!!!!!!!!!1");

        // console.log("Query:", { product_name: { $regex: keyword, $options: "i" } });
        // console.log("Data:", data);

        res.status(200).send({ message: "Success", data: data });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
};

const subcategoryProduct = async (req, res) => {
    try {
        let query = {};

        if (req.params.scid) {
            query.s_cid = req.params.scid;
        }
        const data = await logomodel
            .find(query)
            // .populate("s_cid")
        // .populate("uid")

        console.log(data, "!!!!!!!!!1");

       
        res.status(200).send({ message: "Success", data: data });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
};



module.exports = {
    addlogo,
    alllogo,
    updatelogo, updatelogoimg,
    dellogo,
    searchProduct,
    categoryProduct,
    oneProduct,
    editproductimg,
    subcategoryProduct
};