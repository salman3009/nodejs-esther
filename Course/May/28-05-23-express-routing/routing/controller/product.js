

module.exports ={
    getListController:async(req,res)=>{
        try{

            res.status(200).json({
                status:'success',
                message:'fetched successfully',
                data:[]
            })

        }catch(err){
            res.status(500).json({
                status:'failed',
                message:'internal server error'
            })
        }
    }
}