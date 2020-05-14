const app = require("express")();
const bodyParser = require("body-parser").json();
const cors = require("cors")();
const log = require("./utils/logger.js");

const port = process.env.PORT || 1234;

app.listen(port, () => {
  console.log(`Connected to server on port ${port}`);
});

require("./twitch-client/main-client.js");

log("----");
log("DoritosBot | v0.1", "info");
log("Developer: Darron Eggins", "info");
log("----");
