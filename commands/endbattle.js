const t = require("../tools");

module.exports.run = async (command, target, context, msg, self, args) => {
  if (
    context["display-name"] == "Phyerz" ||
    context["display-name"] == "DazEggins"
  )
    if (!cooldown.has(`${context["display-name"]}---${command}`)) {
      cooldown.add(`${context["display-name"]}---${command}`);

      let getAllRolls = await KothManager.check({});

      if (getAllRolls.length > 0) {
        client.say(target, `King of the Hill Battle has now ended.`);

        let sortWinner = await KothManager.sortedAll({});

        client.say(
          target,
          `${
            sortWinner[0].displayName
          } won King of the Hill with ${t.numberWithCommas(
            sortWinner[0].health
          )} health. ${context["display-name"]}`
        );

        client.say(
          target,
          `${
            sortWinner[0].displayName
          } won King of the Hill with ${t.numberWithCommas(
            sortWinner[0].health
          )} health. ${context["display-name"]}`
        );

        client.say(
          target,
          `${
            sortWinner[0].displayName
          } won King of the Hill with ${t.numberWithCommas(
            sortWinner[0].health
          )} health. ${context["display-name"]}`
        );

        console.log(sortWinner);

        let deleteAll = await KothManager.deleteAll();

        console.log(deleteAll);
      } else {
        client.say(target, `There is currently no battle running! phyerzCRY`);
      }

      setTimeout(() => {
        log(`[${context["display-name"]}] Removed !endbattle cooldown`);
        cooldown.delete(`${context["display-name"]}---${command}`);
      }, cdseconds * 1000);
    }
};

module.exports.help = {
  name: "endbattle"
};
