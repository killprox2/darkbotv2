const mongoose = require("mongoose");

const myliveSchema = mongoose.Schema({
  userID: String,
  serverID: String,
  pseudo: String,
  prenom: String,
  ville: String
});

module.exports = mongoose.model("villes", myliveSchema)