// require("./connection.js");
const client = require("./connection.js");

client.on("message", (channel, userstate, message, self) => {
	console.log(
		`Channel: ${channel}, Userstate: ${userstate.username}: Message: ${message}`
	);
});

client.on("resub", (channel, username, months, message, userstate, methods) => {
	console.log("RESUBBBBBBBBBBB");
	console.log("RESUBBBBBBBBBBB");
	console.log("RESUBBBBBBBBBBB");
	console.log("RESUBBBBBBBBBBB");
	// Do your stuff.
	console.log("----CHANNEL-----");
	console.log(channel);
	console.log("----USERNAME-----");
	console.log(username);
	console.log("----months-----");
	console.log(userstate["msg-param-cumulative-months"]);
	console.log("----message-----");
	console.log(message);
	console.log("----userstate-----");
	console.log(userstate);
	console.log("----endstate-----");
	console.log("----6-----");
	console.log(methods);

	let emoji = "";

	if (channel == "#pandatv") {
		emoji = "dancepls";
	}

	let messageToSend = `/me ${emoji} Welcome back ${username}! ${emoji}, Thank you for your ${userstate["msg-param-cumulative-months"]}`;
	client.say(channel, messageToSend);
});