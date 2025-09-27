import axios from "axios";
import { User } from "../models/user.model";
export const GetUserByID =(req,res)=>{

}
export const SetUserByID =(req,res)=>{

}
export const SignUpUser= async (req,res)=>{
try {
    const { uid, username, token } = req.body;
        const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });
console.log(response)

} catch (error) {
    
}
}