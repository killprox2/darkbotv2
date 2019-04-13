const Command = require("../../modules/Command.js");
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
})
const Settings = require("../../db/settings.js");


class Setup extends Command {
  constructor(client) {
    super(client, {
      name: "setup",
      description: "Création de la base de donnée",
      usage: "setup",
      category: "Bdd",
      permLevel: "Master Power Puissance OverCheat",
      aliases: ["st"],
      guildOnly: true
    });
  }

  run(message) {
  const settings = new Settings({
    serverID: message.guild.id,
    modLogChannel: "logs_darkbot",
    membreRole: "Membres Certifiés",
    protRole: "Protecteur [PvP]",
    pasRole: "Passeurs DJ",
    forgeRole: "forgemages",
    mod2Role: "Modérateur Discord",
    staffRole: "~ le Staff ~",
    modRole: "les Bras Droits",
    adminRole: "Meneur [Dark]",
    welcomeChannel: "Bienvenu"
  });
  settings.save().then(result => console.log(result));
  }
}

module.exports = Setup;
