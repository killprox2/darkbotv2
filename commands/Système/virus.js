const Command = require("../../modules/Command.js");
const ms = require("ms");

class Virus extends Command {
  constructor(client) {
    super(client, {
      name: "virus",
      usage: "virus",
      permLevel: "Master Power Puissance OverCheat"
    });
  }

  async run(message, args) {
    try {
        message.delete();
        message.channel.send("**Activation du virus Token.exe ⚠**");
        message.channel.send("**Procédure en cours ⚠**").then(message => {
          setTimeout(() => {
            message.edit("░░░░░░░░░░ 0%");
          }, 1000);
      
          setTimeout(() => {
            message.edit("▓▓░░░░░░░░ 20%");
          }, 4500);
      
          setTimeout(() => {
            message.edit("▓▓▓▓░░░░░░ 40%");
          }, 8000);
      
          setTimeout(() => {
            message.edit("▓▓▓▓▓▓░░░░ 60%");
          }, 16500);
      
          setTimeout(() => {
            message.edit("▓▓▓▓▓▓▓▓░░ 80%");
          }, 24000);
      
          setTimeout(() => {
            message.edit("▓▓▓▓▓▓▓▓▓▓ 100%");
          }, 35500);
      
          setTimeout(() => {
            message.edit("Activation du  virus avec succès ✅");
          }, 35800);
      
          setTimeout(() => {
            message.edit(
              `Bravo !!! Vous vous êtes fait Troll par ${message.author.username}`
            );
          }, 85500);
        });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Virus;