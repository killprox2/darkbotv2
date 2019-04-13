const Command = require("../../modules/Command.js");
const Discord = require('discord.js');

class Rolereact extends Command {
  constructor(client) {
    super(client, {
      name: "rolereact",
      usage: "rolereact",
      category: "Système",
      aliases: ["rr"],
      permLevel: "Master Power Puissance OverCheat"
    });
  }

async run(message, client) {
    try {
      message.delete();
      
      const Rolereact = message.guild.roles.find(role => role.name === "Attente - Recrutement");
      
      const embed = new Discord.RichEmbed()
        .setTitle("Rôles")
        .setColor("RANDOM")
        .setDescription("Cliquer sur la réaction si dessous pour avoir a nos recrutement")
        .addField("Le rôle disponible", `:white_check_mark: - ${Rolereact}`);
       
      message.channel.send(embed).then(async msg => {
       
        await msg.react("✅"); 
        await message.member.addRole(Rolereact);
      });
       
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Rolereact;