const Discord = require("discord.js");
const mongoose = require('mongoose');
const Command = require("../../modules/Command.js");
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
});
const Livesetup = require("../../db/villes.js");

class Listlive extends Command {
    constructor(client) {
      super(client, {
        name: "listlive",
        description: "Affiché la liste des ville de tous le monde",
        usage: "listlive",
        category: "Live",
        permLevel: "Débutant",
        guildOnly: true
      });
    }

run(message) {
  Livesetup.findOne({
    userID: message.author.id
}, (err, villes, i) => {
if(err) console.log(err);

    let embed = new Discord.RichEmbed()
      .setTitle("Liste des villes")
    if (villes.length === 0) {
      embed.setColor("RED")
    } else if (villes.length < 10) {
      embed.setColor("BLURPLE");
      for (i = 0; i < villes.length; i++) {
        let member = message.guild.members.get(villes.userID) || "Gauche"
        if (member === "Gauche") {
          embed.addField(`${i + 1}. ${member}`, `**Ville**: ${villes.ville}`);
        } else {
          embed.addField(`${i + 1}. ${member.user.username}`, `**villes**: ${villes.ville}`);
        }
      }
    } else {
      embed.setColor("BLURPLE");
      for (i = 0; i < 10; i++) {
        let member = message.guild.members.get(villes.userID) || "Gauche"
        if (member === "Gauche") {
          embed.addField(`${i + 1}. ${member}`, `**Ville**: ${villes.ville}`);
        } else {
          embed.addField(`${i + 1}. ${member.user.username}`, `**Ville**: ${villes.ville}`);
        }
      }
    }

    message.channel.send(embed);
})
  
}
}

module.exports = Listlive;