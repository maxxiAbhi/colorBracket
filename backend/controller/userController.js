const User = require("../model/users");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
exports.signup = async(req, res) => {
    console.log(req.body)
    const {name,username,password} = req.body;
    if(!name|| !username || !password){
        res.status(400).json({message:'plz fill all filed'})
    }
    try {
        const findUser=await User.find({userId:username});
        if(findUser.length===0){
          const cuser=new User({name,userId:username,password})
          const saveUser=await cuser.save()
          console.log(saveUser)
          if(saveUser){
            res.status(200).json({message:'User created successfully'})
          }
        }else{
            res.status(400).json({message:'user already exists'})
        }
    } catch (error) {
        res.status(500).json({message:'Something went wrong'}) 
    }
}


exports.signin = async(req, res) => {
    console.log(req.body)
    const {username,password} = req.body;
    if(!username || !password){
        res.status(400).json({message:'plz fill all filed'})
    }
    try {
        const findUser=await User.findOne({userId:username});
        console.log(findUser)
        if(findUser){
         const isMatch= await bcrypt.compare(password,findUser.password);
         if(isMatch){
            var token = jwt.sign({ _id: findUser._id }, `asadsadsad44646464`);
            res.status(200).json({message:'login success', token: token})
         }else{
            res.status(400).json({message:'username or password incorrect'})
         }
        
        }else{
            res.status(400).json({message:'username or password incorrect'})
        }
    } catch (error) {
        res.status(500).json({message:'Something went wrong'}) 
    }
}