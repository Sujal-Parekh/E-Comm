const jwt=require('jsonwebtoken');
const secretkey="2924jfijnr9394_@"

const verifytoken = async (req,res,next)=>{
    try {
        const token=await req.headers.authorization;
        const verify=jwt.verify(token,secretkey);
        if(verify){
            next();
        }
    } catch (error) {
        res.status(401).send(error)
    }
};
module.exports=verifytoken;