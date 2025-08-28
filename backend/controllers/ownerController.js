




export const addCar = async ( req,res)=>{
    try {
        const {_id} = req.user;
        let car = JSON.parse(req.body.carData);

        const imageFile = req.file;

        


    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message})
        
    }
}