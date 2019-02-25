const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarioSchema = new Schema({
  correo: { type: String, unique: true, required: true },
  nombres: { type: String, required: true },
  apellidos: { type: String, required: true },
  password: { type: String, required: true },
  promociones:{ type: Boolean },
  fecha_afiliacion: { type: Date, default: Date.now },
  tipoDocumento: { type: String, default: "DNI" },
  numeroDocumento: { type: String, default: "" },
  sexo: { type: String },
  fechaNacimiento: { type: Date },
  token: { type: String },
  carrito: {type: [{url: String, tipoLinea: String, tipoPlan: String, nombrePlan: String, cuotas: String, idequipo: String, cantidad: Number, imagen: String}], default: []},
  clave: { type: String}
});
usuarioSchema.indexes({
  correo: 1
});

module.exports = mongoose.model('Usuario', usuarioSchema);