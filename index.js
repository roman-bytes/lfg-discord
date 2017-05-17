'use strict';

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('MzA5NTA0NzA2OTkxMDk1ODIw.C-wYTg.H3Fgc76b7_txjrO1qy_4AQojNps');

bot.on('message', (message) => {
  if (message.content === '!lfg') {
    var pong = 'You have started a group';
    message.channel.send('', {embed: {
      color: 3447003,
      description: pong
    }});
  }
});
