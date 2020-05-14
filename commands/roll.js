const t = require("../tools");

module.exports.run = async (command, target, context, msg, self, args) => {
  if (!cooldown.has(`${context["display-name"]}---${command}`)) {
    cooldown.add(`${context["display-name"]}---${command}`);

    console.log(cooldown);

    let num =
      context["display-name"] == "Phyerz" ? t.rollDice(50, 100) : t.rollDice();

    let emote = "phyerzHot";

    if (num < 71) {
      emote = "phyerzHI";
    }

    if (num < 31) {
      emote = "phyerzCRY";
    }

    if (num == 100) {
      emote =
        "PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp PogChamp phyerzHot phyerzHot phyerzHot phyerzHot";

      client.say(target, `${context["display-name"]} rolled a ${num} ${emote}`);
      client.say(target, `${context["display-name"]} rolled a ${num} ${emote}`);
    }

    client.say(target, `${context["display-name"]} rolled a ${num} ${emote}`);

    setTimeout(() => {
      log(`[${context["display-name"]}] Removed !roll cooldown`);
      cooldown.delete(`${context["display-name"]}---${command}`);
    }, cdseconds * 1000);
  }
};

module.exports.help = {
  name: "roll"
};
