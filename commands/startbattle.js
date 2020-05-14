const t = require("../tools");

module.exports.run = async (command, target, context, msg, self, args) => {
  // make the command admin only
  if (
    context["display-name"] == "Phyerz" ||
    context["display-name"] == "DazEggins"
  )
    if (!cooldown.has(`${context["display-name"]}---${command}`)) {
      cooldown.add(`${context["display-name"]}---${command}`);

      let getAllRolls = await KothManager.check({});

      if (getAllRolls.length > 0) {
        log(`[ERROR] There is already a battle running.`);
        client.say(target, `There is already a KotH battle running!`);
      } else {
        log(`Total Rolls: ${getAllRolls.length}`);

        let addRoll = await KothManager.addRoll({
          displayName: context["display-name"],
          health: 10000
        });

        client.say(target, `Phyerz King of the Hill has now started!`);
        client.say(target, `Use !battle to become the King of the Hill!`);
      }

      setTimeout(() => {
        log(`[${context["display-name"]}] Removed !startbattle cooldown`);
        cooldown.delete(`${context["display-name"]}---${command}`);
      }, cdseconds * 1000);
    }
};

module.exports.help = {
  name: "startbattle"
};
