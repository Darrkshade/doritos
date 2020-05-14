const app = require('express')();
const bodyParser = require('body-parser').json();
const cors = require('cors')();
const tmi = require('tmi.js');

const opts = {
  identity: {
    username: 'doritoschip',
    password: `oauth:60d2mh0fdeqkob9hnleg350y491brg`,
  },
  channels: [`pandatv`],
};

const client = tmi.Client(opts);

const port = process.env.PORT || 1234;

app.listen(port, () => {
  console.log(`Connected to server on port ${port}`);
});

client.connect().then((connection) => {
  console.log('Connected to twitch chat');
});

client.on('message', (channel, userstate, message, self) => {
  console.log(`Channel: ${channel}, Userstate: ${userstate.username}: Message: ${message}`);
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
