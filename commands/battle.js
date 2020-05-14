const t = require("../tools");

module.exports.run = async (command, target, context, msg, self, args) => {
  if (!cooldown.has(`${context["display-name"]}---${command}`)) {
    cooldown.add(`${context["display-name"]}---${command}`);

    let getAllRolls = await KothManager.sortedAll({});

    log(`Total Rolls: ${getAllRolls.length}`);

    if (getAllRolls.length > 0) {
      let playerRoll = t.rollDice(0, 100000);

      let addRoll = await KothManager.addRoll({
        displayName: context["display-name"],
        health: playerRoll
      });

      log(`Player: ${playerRoll} | Health: ${getAllRolls[0].health}`);

      if (playerRoll > getAllRolls[0].health) {
        client.say(
          target,
          `${context["display-name"]} has attacked for ${t.numberWithCommas(
            playerRoll
          )}. phyerzHype`
        );

        if (getAllRolls[0].displayName == context["display-name"]) {
          client.say(
            target,
            `${
              context["display-name"]
            } has improved their health as King of the Hill! phyerzHype`
          );
        } else {
          client.say(
            target,
            `${context["display-name"]} is now King of the Hill! phyerzHype`
          );
        }
      } else {
        if (getAllRolls[0].displayName == context["display-name"]) {
          client.say(
            target,
            `${context["display-name"]} has attacked for ${t.numberWithCommas(
              playerRoll
            )}. They did not increase their HP.`
          );
        } else {
          let knockDown = t.rollDice(1000, 3000);

          let addRoll = await KothManager.update(
            {
              displayName: getAllRolls[0].displayName,
              health: getAllRolls[0].health
            },
            {
              health: getAllRolls[0].health - knockDown
            }
          );

          client.say(
            target,
            `${context["display-name"]} has attacked for ${t.numberWithCommas(
              playerRoll
            )}. Knocked down the King of the Hill by ${knockDown} HP. Their HP is now ${getAllRolls[0]
              .health - knockDown}`
          );
        }
      }
    } else {
      client.say(target, `There is currently no battle running! phyerzCRY`);
    }

    setTimeout(() => {
      log(`[${context["display-name"]}] Removed !battle cooldown`);
      cooldown.delete(`${context["display-name"]}---${command}`);
    }, cdseconds * 1000);
  }
};

module.exports.help = {
  name: "battle"
};
