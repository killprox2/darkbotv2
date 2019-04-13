const config = {
  defaultSettings: {
    prefix: "_",
    modLogChannel: "logs_darkbot",
    membreRole: "Membres Certifiés",
    protRole: "Protecteur [PvP]",
    pasRole: "Passeurs DJ",
    forgeRole: "forgemages",
    mod2Role: "Modérateur Discord",
    staffRole: "~ le Staff ~",
    modRole: "les Bras Droits",
    adminRole: "Meneur [Dark]",
    systemNotice: true
  },
  permLevels: [
    { level: 0, name: "Débutant", check: () => true },
    { level: 0, name: "Débutant", check: () => true },
    { level: 0, name: "Débutant", check: () => true },
    {
      level: 1,
      name: "Confirmé",
      check: message => {
        try {
          const pasRole = message.guild.roles.find(
            r => r.name.toLowerCase() === message.settings.pasRole.toLowerCase()
          );
          if (pasRole && message.member.roles.has(pasRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },
    {
      level: 1,
      name: "Confirmé",
      check: message => {
        try {
          const forgeRole = message.guild.roles.find(
            r => r.name.toLowerCase() === message.settings.forgeRole.toLowerCase()
          );
          if (forgeRole && message.member.roles.has(forgeRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },
    {
      level: 1,
      name: "Confirmé",
      check: message => {
        try {
          const membreRole = message.guild.roles.find(
            r => r.name.toLowerCase() === message.settings.membreRole.toLowerCase()
          );
          if (membreRole && message.member.roles.has(membreRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },
    {
      level: 1,
      name: "Confirmé",
      check: message => {
        try {
          const protRole = message.guild.roles.find(
            r => r.name.toLowerCase() === message.settings.protRole.toLowerCase()
          );
          if (protRole && message.member.roles.has(protRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },
    {
      level: 2,
      name: "Team Crew",
      check: message => {
        try {
          const modRole = message.guild.roles.find(
            r => r.name.toLowerCase() === message.settings.modRole.toLowerCase()
          );
          if (modRole && message.member.roles.has(modRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },
    {
      level: 3,
      name: "Master Power Puissance OverCheat",
      check: message => {
        try {
          const mod2Role = message.guild.roles.find(
            r => r.name.toLowerCase() === message.settings.mod2Role.toLowerCase()
          );
          if (mod2Role && message.member.roles.has(mod2Role.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },
    {
      level: 2,
      name: "Team Crew",
      check: message => {
        try {
          const staffRole = message.guild.roles.find(
            r => r.name.toLowerCase() === message.settings.staffRole.toLowerCase()
          );
          if (staffRole && message.member.roles.has(staffRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },
    {
      level: 3,
      name: "Master Power Puissance OverCheat",
      check: message => {
        try {
          const adminRole = message.guild.roles.find(
            r =>
              r.name.toLowerCase() === message.settings.adminRole.toLowerCase()
          );
          if (adminRole && message.member.roles.has(adminRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },
    {
      level: 3,
      name: "Master Power Puissance OverCheat",
      check: message => message.client.appInfo.owner.id === message.author.id
    }
  ]
};

module.exports = config;
