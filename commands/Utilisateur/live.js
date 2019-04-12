const Command = require("../../modules/Command.js");
const mysql = require('mysql');
const Discord = require('discord.js');

let connection;

function handleDisconnect() {
  connection = mysql.createConnection({
    host: 'sql3.cluster1.easy-hebergement.net',
    user: 'darkpandore3',
    password: 'alizee',
    database: 'darkpandore3'
  }); // Recreate the connection, since
  // the old one cannot be reused.

  connection.connect((err) => { // The server is either down
    if (err) { // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    } // to avoid a hot loop, and to allow our node script to
  }); // process asynchronous requests in the meantime.
  // If you're also serving http, display a 503 error.
  connection.on('error', (err) => {
    console.log('db error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect(); // lost due to either server restart, or a
    } else { // connnection idle timeout (the wait_timeout
      throw err; // server variable configures this)
    }
  });
}

handleDisconnect();

class Live extends Command {
  constructor(client) {
    super(client, {
      name: "live",
      description: "Enregistrer votre ville",
      usage: "live",
      category: "Utilisateur",
      permLevel: "Débutant",
      guildOnly: true
    });
  }


async run(message) {
  if (message.author.bot || message.channel.type == 'dm') return;
  const args = message.content.slice("_").trim().split(/ +/g);
  const pseudo = args[1];
  const ville = args[2];
    if (!ville) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription("Tu n\'as pas précisé ta ville!")
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else {
  try {
    const code = new Discord.RichEmbed()
    .setTitle('Succès :')
    .setDescription(':white_check_mark: Votre ville à bien était enregistré')
    .setColor('#8e44ad');

    message.channel.send("Voici la liste des villes: http://www.darkpandore.com/ville.php");
  const sql = `INSERT INTO ville (member, ville) VALUES ('${pseudo}', '${ville}')`;

  connection.query(sql, (result) => {
    console.log(result);
    console.log(`Number of records inserted: ${result}`);
    message.channel.send(code);
  });
  } catch (e) {
    console.log(e);
  }
}
}
}

module.exports = Live;
