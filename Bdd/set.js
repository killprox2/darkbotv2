const Command = require("../../modules/Command.js");
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
})
const Settings = require("../../db/settings.js");


class Set extends Command {
  constructor(client) {
    super(client, {
      name: "set",
      description: "Changer les donnée de la base de donnée",
      usage: "set",
      category: "Bdd",
      permLevel: "Master Power Puissance OverCheat",
      guildOnly: true
    });
  }

  run(message, args) {

    function keyChange(key, value){
        message.channel.send(
            `Vous avez bien changé la clé **${key}** avec la valeur **${value}**`
        );
    }

    const newValue = args[2];
    Settings.findOne({ serverID: message.guild.id}, (err, settings) =>{
        if(err) console.log(err);
        if (args[0] === "edit"){
            const keyCh = args[1]
            switch (keyCh) {     
                case "modLogChannel":
                settings.modLogChannel = newValue;
                keyChange(keyCh, newValue);
                break;
                case "membreRole":
                settings.membreRole = newValue;
                keyChange(keyCh, newValue);
                break;
                case "protRole":
                settings.protRole = newValue;
                keyChange(keyCh, newValue);
                break;
                case "pasRole":
                settings.pasRole = newValue;
                keyChange(keyCh, newValue);
                break;
                case "forgeRole":
                settings.forgeRole = newValue;
                keyChange(keyCh, newValue);
                break;
                case "mod2Role":
                settings.mod2Role = newValue;
                keyChange(keyCh, newValue);
                break;
                case "staffRole":
                settings.staffRole = newValue;
                keyChange(keyCh, newValue);
                break;
                case "modRole":
                settings.modRole = newValue;
                keyChange(keyCh, newValue);
                break;
                case "adminRole":
                settings.adminRole = newValue;
                keyChange(keyCh, newValue);
                break;
                case "welcomeChannel":
                settings.welcomeChannel = newValue;
                keyChange(keyCh, newValue);
                break;
                default:
                message.channel.send("Veuillez choisir une clé valide !");
            }
            settings.save();
        
        } else {
            return;
        }
    })

  }
}

module.exports = Set;
