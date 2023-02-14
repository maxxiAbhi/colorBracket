const RecProcess = require("../model/process");

exports.addProcess = async(req,res) => {
    console.log(req.body)
    const {steps,recipe_id}=req.body;
    if(!steps||!recipe_id){
        res.status(400).json({message:'plz fill all filed'})
    }else{
      try {
        const createProcess=new RecProcess({steps,recipe_id});
        const addProcess=await createProcess.save();
        if(addProcess){
            res.status(200).json({message:'Process added successfully'})
          }
      } catch (error) {
        console.log(error)
      }
    }
}