// Includes
require('dotenv').load();
const fs = require('fs');
const t = require('./tools');
const tmi = require('tmi.js');
global.log = require('./logger');

// Define discord.js includes
global.Discord = require('discord.js');
let phyerzCommands = new Discord.Collection();

// Setup DB
const mongoose = require('mongoose').set('useCreateIndex', true);

mongoose.connect('mongodb://discord:$discord888@ds141248.mlab.com:41248/phyerzbot', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// // init mongoose
// global.Koth = require("./models/Koth");
// global.KothManager = require("./classes/koth");

// global.cooldown = new Set();
// global.cdseconds = 5;
global.prefix = process.env.PREFIX;

// Define configuration options
const opts = {
  identity: {
    username: 'doritoschip',
    password: `oauth:60d2mh0fdeqkob9hnleg350y491brg`,
  },
  channels: [`pandatv`],
};

// Create a client with our options
global.client = new tmi.client(opts);
client.connect();

// Intro Print
log(`----`);
log(`DoritosBot | v0.1`, 'info');
log(`Developer: Darron Eggins`, 'info');
log(`----`);

// Read all commands files, to create commands for the discords.
fs.readdir('./commands/', (err, files) => {
  if (err) console.log(err);

  let jsFile = files.filter((f) => f.split('.').pop() === 'js');

  if (jsFile <= 0) {
    log(`Couldn't find commands.`, 'error');
    return;
  }

  jsFile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    log(`${f} loaded`, 'success');
    phyerzCommands.set(props.help.name, props);
  });

  log(`----`);
});

client.on('subscription', (channel, username, method, message, userstate) => {
  console.log('subscription');
  console.log('subscription');
  console.log('subscription');
  console.log('subscription');
  console.log('subscription');
  console.log('subscription');
  console.log('subscription');
  console.log('subscription');
  console.log('subscription');
  // Do your stuff.
  console.log('----CHANNEL-----');
  console.log(channel);
  console.log('----USERNAME-----');
  console.log(username);
  console.log('----method-----');
  console.log(method);
  console.log('----message-----');
  console.log(message);
  console.log('----userstate-----');
  console.log(userstate);
  console.log('----endstate-----');

  let emoji = '';

  if (channel == '#pandatv') {
    emoji = 'dancepls';
  }

  let messageToSend = `${emoji} Welcome ${username}! ${emoji}`;
  client.say(channel, messageToSend);
});

client.on('resub', (channel, username, months, message, userstate, methods) => {
  console.log('RESUBBBBBBBBBBB');
  console.log('RESUBBBBBBBBBBB');
  console.log('RESUBBBBBBBBBBB');
  console.log('RESUBBBBBBBBBBB');
  // Do your stuff.
  console.log('----CHANNEL-----');
  console.log(channel);
  console.log('----USERNAME-----');
  console.log(username);
  console.log('----months-----');
  console.log(months);
  console.log('----message-----');
  console.log(message);
  console.log('----userstate-----');
  console.log(userstate);
  console.log('----endstate-----');
  console.log('----6-----');
  console.log(methods);

  let emoji = '';

  if (channel == '#pandatv') {
    emoji = 'dancepls';
  }

  let messageToSend = `${emoji} Welcome back ${username}! ${emoji}`;
  client.say(channel, messageToSend);
});

// Watch for all message in Twitch IRC
client.on('message', async (target, context, msg, self) => {
  //   // check if message is not a command, or is from another bot.

  log(`[${target}][${context['display-name']}] ${msg.trim()}`, 'info');
  //   if (!msg.trim().startsWith(prefix) || self) return;

  //   // log all messages sent to IRC

  //   // split the command and the arguments
  //   const args = await msg.slice(prefix.length).split(" ");
  //   console.log(args);
  //   const command = args.shift().toLowerCase();

  //   let commandFile = phyerzCommands.get(command);
  //   if (commandFile) commandFile.run(command, target, context, msg, self, args);
});

// Called every time the bot connects to Twitch chat
client.on('connected', (addr, port) => {
  log(`Successfully connected to ${addr}:${port}`, 'success');
});
