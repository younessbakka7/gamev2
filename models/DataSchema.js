const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Dataschema = new Schema({
  NomGamer: String,
  EmailGamer: String,

});
const Article = mongoose.model("Article", Dataschema);
// export the model
module.exports = Article; 