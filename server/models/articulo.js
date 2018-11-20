const mongoose = require('mongoose');
const { Schema } = mongoose;  
const ArticuloSchema = new Schema({
    IMEI:{ type: String, required: true, trim: true, lowercase: true},
    nombre:{type:String, required: true},
    categoria:{type: String, required:true},
    marca:{type: String, required: true},
    cantidad:{type: String, required:true},
    precio:{type: Number},
    especificaciones:[String],
    caracteristicas:[{
        nombre:{type: String, required:true},
        valor:{type: String, required: true}
    }],
    descripcion:{type: String, require: true},
    garantias:[String]
    
});
module.exports = mongoose.model('Articulo', ArticuloSchema);
// SELECT * FROM taarticulo WHERE fnAS_StockArticulo(idArticulo) > 0
