'use strict';

const Discord = require('discord.js');
const bot = new Discord.Client();

// TODO Add back bot.login() and add token to .env

bot.on('message', (message) => {
  if (message.content === '!lfg') {
    var pong = 'You have started a group';
    message.channel.send('', {embed: {
      color: 3447003,
      description: pong
    }});
  }
});
