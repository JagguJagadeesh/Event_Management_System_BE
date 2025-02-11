import { Response,Request } from "express";
import User from "../models/userModel";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const gerateToken = (userId: String) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET_KEY!,{expiresIn: '5h'});
    return token
}


const signup = async (req: Request,res: Response) => {
    const { name, mail, password} = req.body;

    const userExist = await User.findOne({mail});
    if(userExist){
        res.status(400).json({message:'User already Exist'});
        return;
    }

    const hashPassword = await bcrypt.hash(password,10);
    const user = await User.create({name,mail,password: hashPassword})
    if(user){
        const token = gerateToken(user.mail)
        // console.log("Generated Token in Response:", token); // Debugging
        // console.log("Type of Token:", typeof token); 
        res.status(200).json({
            name: name,
            token: token,
            message: 'User Created Sucessfully...'
        })
    }else{
        res.status(400).json({message: 'Invalid User data'});
    }
}

const signin = async (req: Request,res:Response) => {
    const { mail, password} = req.body

    const userExist = await User.findOne({mail});
    if(!userExist){
        res.status(400).json({massage:'User Not Found '});
        return 
    }
    if(userExist){
        const verifyPass = await bcrypt.compare(password, userExist.password);
        if(verifyPass){
            const token = gerateToken(userExist.mail)
            return res.status(200).json({
                user_id: userExist._id,
                token: token,
                message: 'Scssfully logedin'
            })
        }
    }
    return res.status(400).json({message: 'Invalid Password '})
}

export {signin , signup};