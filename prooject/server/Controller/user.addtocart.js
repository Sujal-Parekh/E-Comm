const cart= require("../model/addtocart");

const addtocart = async (req, res) =>{
    const{userid,pid,quantity}=req.body
    const data = await cart.create({
       userid:userid,
       pid:pid,
       qty:qty
    });
        res.send(data)
    }


module.exports={addtocart}