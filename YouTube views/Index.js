const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const commandHandler = require('./commandHandler');
const eventHandler = require('./eventHandler');

const client = new Discord.Client();
client.commands = new Discord.Collection();

// Load commands and events
commandHandler.loadCommands(client);
eventHandler.loadEvents(client);

client.login(token);
