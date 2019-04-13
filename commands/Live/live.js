const Command = require("../../modules/Command.js");
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
})
const Livesetup = require("../../db/villes.js");


class Set extends Command {
  constructor(client) {
    super(client, {
      name: "live",
      description: "Ajouté ces informations. Exemple: _live edit ville votreville",
      usage: "live",
      category: "Live",
      permLevel: "Débutant",
      guildOnly: true
    });
  }

  run(message, args) {

    function keyChange(key, value){
        message.channel.send(
            `Vous avez bien changé votre **${key}** la voici **${value}**`
        );
    }

    const newValue = args[2];
    Livesetup.findOne({ userID: message.author.id}, (err, villes) =>{
        if(err) console.log(err);
        if (args[0] === "edit"){
            const keyCh = args[1]
            switch (keyCh) {    
              case "prenom":
                villes.prenom = newValue;
                keyChange(keyCh, newValue);
                break; 
                case "ville":
                villes.ville = newValue;
                keyChange(keyCh, newValue);
                break;

                default:
                message.channel.send("_live edit ville ***votreville***!");
            }
            villes.save();
        
        } else {
            return;
        }
    })

  }
}

module.exports = Set;
