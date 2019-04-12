const Command = require("../../modules/Command.js");

class Ping extends Command {
  constructor(client) {
    super(client, {
      name: "ping",
      description: "Latence du bot + réponse API.",
      usage: "ping",
      category: "Utilisateur",
      permLevel: "Confirmé",
      aliases: ["p"],
      guildOnly: true
    });
  }

  async run(message) {
    try {
      const msg = await message.channel.send("Ping!");
      msg.edit(
        `Pong !\n Latence bot: ${msg.createdTimestamp -
          message.createdTimestamp}ms.\n API: ${Math.round(
          this.client.ping
        )}ms.`
      );
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Ping;
