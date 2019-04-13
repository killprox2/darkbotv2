const mongoose = require('mongoose');

const settingsSchema = mongoose.Schema({
    serverID: String,
    prefix: String,
    modLogChannel: String,
    membreRole: String,
    protRole: String,
    pasRole: String,
    forgeRole: String,
    mod2Role: String,
    staffRole: String,
    modRole: String,
    adminRole: String,
    welcomeChannel: String

});

module.exports = mongoose.model('Settings', settingsSchema);