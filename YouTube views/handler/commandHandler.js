const fs = require('fs');
const Discord = require('discord.js');

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

module.exports = {
    loadCommands: (client) => {
        for (const file of commandFiles) {
            const command = require(`./commands/${file}`);
            client.commands.set(command.name, command);
        }
    }
};
