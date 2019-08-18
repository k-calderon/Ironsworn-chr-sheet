var roll = {
  actionRoll: function(stat, adds) {
    if (!isNaN(stat) && typeof stat !== "string") {
      let roll = {
        challengeDie1: utils.randIntBetween(1, 10),
        challengeDie2: utils.randIntBetween(1, 10),
        actionDie: utils.randIntBetween(1, 6),
        stat: stat || 0,
        adds: adds || 0,
        match: false,
        result: {
          isStrongHit: false,
          isWeakHit: false,
          isMiss: false
        }
      };
      roll.actionScore = roll.actionDie + (stat || 0) + (adds || 0);
      if (roll.actionScore > roll.challengeDie1 && roll.actionScore > roll.challengeDie2) {
        roll.textResult = "Strong Hit";
        roll.result.isStrongHit = true;
      } else if (roll.actionScore > roll.challengeDie1 || roll.actionScore > roll.challengeDie2) {
        roll.textResult = "Weak Hit";
        roll.result.isWeakHit = true;
      } else {
        roll.textResult = "Miss";
        roll.result.isMiss = true;
      }
      if (roll.challengeDie1 === roll.challengeDie2) {
        roll.match = true;
      }
      return roll;
    }
    log("A non-number was passed into actionScore", stat);
  }
};