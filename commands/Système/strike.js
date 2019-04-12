const Command = require("../../modules/Command.js");
const ms = require("ms");

class Warn extends Command {
  constructor(client) {
    super(client, {
      name: "strike",
      description: "Commande pour avertir un utilisateur.",
      usage: "strike",
      category: "Système",
      permLevel: "Master Power Puissance OverCheat"
    });
  }

  async run(message, args) {
    try {
      const warnedUser = message.guild.member(
        message.mentions.users.first() || message.guild.members.get(args[0])
      );
      if (!warnedUser)
        return message.channel.send("L'utilisateur n'existe pas.");
      const warnToAdd = 1;
      const reason = args.join(" ").slice(22);
      this.client.strike.ensure(`${warnedUser.id}`, {
        warnings: 0
      });
      let userWarnings = this.client.strike.get(`${warnedUser.id}`, "warnings");
      userWarnings += warnToAdd;

      this.client.strike.set(`${warnedUser.id}`, userWarnings, "warnings");

      message.delete();

      if (this.client.strike.get(`${warnedUser.id}`, "warnings") == 1) {
        message.channel.send(
          `${warnedUser}, premier avertissement (raison: ${reason})`
        );
      } else if (this.client.strike.get(`${warnedUser.id}`, "warnings") == 2) {
        const muteRole = message.guild.roles.find(x => x.name === "Muted");
        message.channel.send(
          `${warnedUser}, deuxième avertissement (raison: ${reason})`
        );
        const muteTime = "1h";
        await warnedUser.addRole(muteRole.id);
        message.guild.member(warnedUser).kick()
        message.channel.send(
          `${warnedUser} est muté pendant ${muteTinodeme} (raison: ${reason})`
        );

        setTimeout(function() {
          warnedUser.removeRole(muteRole.id);
          message.channel.send(`L'utilisateur ${warnedUser} n'est plus muté !`);
        }, ms(muteTime));
      }
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Warn;