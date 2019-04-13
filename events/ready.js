module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run() {
    await this.client.wait(1000);

    this.client.appInfo = await this.client.fetchApplication();
    setInterval(async () => {
      this.client.appInfo = await this.client.fetchApplication();
    }, 60000);

    //this.client.user.setActivity("with Darkvince");
    this.client.on("ready", async () => {
      var jeuxs = [
        "modérer le discord ", 
        `faire des crêpes`, 
        "améliorer mes commandes",
        `faire régner l'ordre`, 
        `?help || ${client.guilds.size} servers`, 
        `se perdre sur youtube`,
      ];
    
        setInterval(function(){
        var jeux = jeuxs[Math.floor(Math.random()*jeuxs.length)];
            
        this.client.user.setPresence({ 
            game:{ 
            name: jeux, 
            type: 0
            } 
          });
      }, 60000);
     
      this.client.user.setActivity("regarder une vidéo", {type: "WATCHING"});
      this.client.user.setActivity("modérer le serveur", {type: "STREAMING"});
    });

    const channel = this.client.channels.get("565522527338627082");
    channel.send(":gear: Le bot est redémarré !");

    this.client.logger.log(
      `DarkBot est prêt à espionner ${
        this.client.users.size
      } utilisateurs sur ${this.client.channels.size} salons.`,
      "ready"
    );
  }
};
