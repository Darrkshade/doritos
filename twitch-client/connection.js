const tmi = require("tmi.js");

const opts = {
  identity: {
    username: "doritoschip",
    password: `oauth:60d2mh0fdeqkob9hnleg350y491brg`
  },
  channels: [`pandatv`]
};

const client = tmi.Client(opts);

client.connect().then(connection => {
  console.log("Connected to twitch chat");
});

module.exports = client;
