const Command = require("../../modules/Command.js");
const Discord = require('discord.js');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
})
const Livesetup = require("../../db/villes.js");

class Mylive extends Command {
  constructor(client) {
    super(client, {
      name: "mylive",
      description: "Affiché sa ville",
      usage: "mylive",
      category: "Live",
      permLevel: "Débutant",
      guildOnly: true
    });
  }

  async run(message) {

  Livesetup.findOne({
      userID: message.author.id
  }, (err, villes) => {
  if(err) console.log(err);
  let embed = new Discord.RichEmbed()
  .setTitle("Information")
  .setColor('0xB40404')
  .setThumbnail(message.author.displayAvatarURL)
  .addField("Pseudo", message.author.username, true)
  .addField("Prénom", villes.prenom, true)
  .addField("Ville", villes.ville, true);
     return message.channel.sendEmbed(embed);
  
  })
  
  }
}

module.exports = Mylive;
