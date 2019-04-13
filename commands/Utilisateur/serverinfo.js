/* eslint-disable */

const Command = require("../../modules/Command.js");
const Discord = require("discord.js");


class Serverinfo extends Command {
  constructor(client) {
    super(client, {
      name: "serverinfo",
      description: "Information serveur",
      usage: "serverinfo",
      permLevel: "Débutant",
      aliases: ["si"]
    });
  }


  async run(message) {
    try {
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server Information")
        .setColor("#15f153")
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name)
        .addField("Discord créer le", message.guild.createdAt)
        .addField("Vous avez rejoind le", message.member.joinedAt)
        .addField("Membre total", message.guild.memberCount);
    
        message.channel.send(serverembed);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Serverinfo;