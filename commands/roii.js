const t = require("../tools");

module.exports.run = async (command, target, context, msg, self, args) => {
  if (!cooldown.has(`${context["display-name"]}---${command}`)) {
    cooldown.add(`${context["display-name"]}---${command}`);

    let num = 100;

    let emote =
      "PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp phyerzHot phyerzHot phyerzHot phyerzHot";

    client.say(target, `${context["display-name"]} rolled a ${num} ${emote}`);

    setTimeout(() => {
      log(`[${context["display-name"]}] Removed !roii cooldown`);
      cooldown.delete(`${context["display-name"]}---${command}`);
    }, cdseconds * 1000);
  }
};

module.exports.help = {
  name: "roii"
};
