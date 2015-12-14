var mongoose = require('mongoose');

var regaloSchema = new mongoose.Schema({
  nombre : String,
  Descripcion : String,
  destinatario : String,
  peso : Number,
  entregado : Boolean
});

module.exports = mongoose.model('regalo', regaloSchema);
