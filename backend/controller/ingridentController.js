const Ingrident = require("../model/ingrident");

exports.addIngredient =async (req,res) => {
    const {items,amount,unit,recipe_id}=req.body;
    if(!items||!amount||!unit||!recipe_id){
        res.status(400).json({message:'plz fill all filed'})
    }else{
      try {
        const createIngrident=new Ingrident({items,amount,unit,recipe_id});
        const addIngrident=await createIngrident.save();
        if(addIngrident){
            res.status(200).json({message:'Ingrident added successfully'})
          }
      } catch (error) {
        console.log(error)
      }
    }
}