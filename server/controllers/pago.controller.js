const Pago =require('../models/pago');

const pagoController={};

pagoController.GuardarPago=async(req,res)=>{
    try{
        const pago =new Pago(req.body);
        console.log(req.body);
        if(pago){
            await pago.save();
            res.json({
                mensaje:"Se guardo el pago"
            });
        }
        else{
            res.json({
                mensaje:"ERROR"
            });
        }
    } catch(e){
        res.json({
            mensaje:"ERROR:"+e
        })
    }
}

module.exports=pagoController;