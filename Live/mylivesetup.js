const Command = require("../../modules/Command.js");
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
})
const Livesetup = require("../../db/villes.js");


class Mylivesetup extends Command {
  constructor(client) {
    super(client, {
      name: "setuplive",
      description: "Création de votre base de donnée",
      usage: "setuplive",
      category: "Live",
      permLevel: "Débutant",
      aliases: ["st"],
      guildOnly: true
    });
  }

  run(message) {
  const villes = new Livesetup({
    userID: message.author.id,
    serverID: message.guild.id,
    pseudo: message.author.id,
    prenom: "Aucune information",
    ville: "Aucune information"
  });
  villes.save().then(result => console.log(result));
  message.channel.send("Votre bdd a était crée avec succès fait _live edit pour ajouté vos information");
  }
  
}

module.exports = Mylivesetup;
