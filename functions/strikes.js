const bot = require('../main')

module.exports = (guildid, userid) => {

    let strikes = bot.config.getStrike(guildid)
    if (!strikes.users) strikes.users = {}
    if (!strikes.users[userid]) strikes.users[userid] = 0
    let kmax = strikes.kick || 0
    let bmax = strikes.ban || 0
    strikes.users[userid] = strikes.users[userid] + 1
    bot.config.setStrike(guildid, strikes)
    let guild = bot.guilds.get(guildid)
    let user = bot.users.get(userid)
    if (kmax !== 0) {
        if (strikes.users[userid] === kmax - 1 && kmax !== 1) {
            return user.send("**Vous êtes `1` être expulsé de `" + guild.name + "`**")
        }
        if (strikes.users[user.id] === kmax) {
            return user.send("**Vous avez été expulsé de `" + guild.name + "`**").then(u => guild.member(userid).kick().catch())
        }
    }

    if (bmax !== 0) {
        if (strikes.users[userid] === bmax - 1 && bmax !== 1) {
            return user.send("**Vous êtes `1` strike `" + guild.name + "`**")
        }
        if (strikes.users[userid] >= bmax) {
            return user.send("**Vous avez été banni de`" + guild.name + "`**").then(u => guild.ban(userid).catch())
        }
    }
}