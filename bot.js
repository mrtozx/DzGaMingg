const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});







client.login('NDYyOTAxNjIxNzY5MzcxNjQ4.DhwMHA.-MIXnmf_UvGEocmfBkMAfY88610');
