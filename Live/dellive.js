const Command = require("../../modules/Command.js");
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
})
const Livesetup = require("../../db/villes.js");

class Dellive extends Command {
  constructor(client) {
    super(client, {
      name: "dellive",
      description: "Supprimé un joueur et sa ville de la BDD",
      usage: "dellive",
      category: "Bdd",
      permLevel: "Master Power Puissance OverCheat",
      guildOnly: true
    });
  }

  async run(message, args) {

    await message.delete();
  if (message.author.id !== '351809725513465867') return;
  let member = message.mentions.members.first();
  if (!member) return message.reply("Il faut mentionné le joueur a supprimé");

  Livesetup.findOneAndDelete({
    userID: member.id,
    serverID: message.guild.id
  }, (err) => {
    if(err) console.log(err)
    console.log("Utilisateur avec ID " + member.id + " a été supprimé de la base de données.");
  });
  
  }
}

module.exports = Dellive;
