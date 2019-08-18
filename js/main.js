"use strict";
var loadTime = Date.now();
var d = document;
var w = Window;

var characterTemplate = {
  name: "Placeholder",
  bonds: {},
  vows: {},
  stats: {
    edge: 1,
    heart: 1,
    iron: 1,
    shadow: 1,
    wits: 1
  },
  assets: {},
  tracks: {
    momentum: {
      current: 2,
      max: 10,
      min: -6,
      reset: 2
    },
    health: {
      current: 5,
      max: 5,
      min: 0
    },
    spirit: {
      current: 5,
      max: 5,
      min: 0
    },
    supply: {
      current: 5,
      max: 5,
      min: 0
    },
    mana: {
      current: 5,
      max: 5,
      min: 0
    }
  },
  debilities: {
    conditions: {
      wounded: false,
      shaken: false,
      unprepared: false,
      encumbered: false
    },
    banes: {
      maimed: false,
      corrupted: false
    },
    burdens: {
      cursed: false,
      tormented: false
    }
  }
};

var log = function(msg, obj, name) {
  let now = Date.now();
  let timer = now - loadTime;
  name = name || "Generic";
  console.log(timer + "ms> " + name + "> " + msg, obj);
  // console.log(msg);
};

var utils = {
  uuidv4: function() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  },
  isObject: function(obj) {
    if (!Array.isArray(obj) && typeof obj === "object") {
      return true;
    } else {
      return false;
    }
  },
  randIntBetween: function(min, max) {
    // Guard against non numbers
    if (typeof min !== "number" || typeof max !== "number") {
      /* TODO: Integrate a logger
            log("A non-number was passed to randIntBetween.");
            */
      return;
    }
    // Ensure only integers remain
    min = Math.floor(min);
    max = Math.floor(max);
    // Swap min and max with recursion if min > max
    if (min > max) {
      return randIntBetween(max, min);
    }
    // Generate a number between min and max!
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  updateById: function(id, value) {
    let divToUpdate = d.getElementById(id);
    divToUpdate.innerHTML = "";
    divToUpdate.innerHTML = value;
  },
  stringToSlugLine: function(string) {
    return string
      .toLowerCase()
      .split(/\W/)
      .filter(function(item) {
        return item !== "";
      })
      .join("-");
  },
  createAndAppendDiv: function(id, parent) {
    let el = d.createElement("div");
    el.setAttribute("id", id);
    if (!parent) {
      parent = d.body;
    }
    parent.appendChild(el);
  },
  createAsset: function(character, name, text) {
    let id = utils.stringToSlugLine(name);
    character.assets[id] = {};
    character.assets[id].name = name;
    character.assets[id].text = text;
  }
};

var render = {
  characterName: function(character) {
    utils.updateById("character-name", character.name);
  },
  statEdge: function(character) {
    utils.updateById("stat-edge", character.stats.edge);
  },
  statHeart: function(character) {
    utils.updateById("stat-heart", character.stats.heart);
  },
  statIron: function(character) {
    utils.updateById("stat-iron", character.stats.iron);
  },
  statShadow: function(character) {
    utils.updateById("stat-shadow", character.stats.shadow);
  },
  statWits: function(character) {
    utils.updateById("stat-wits", character.stats.wits);
  },
  momentum: function(character) {
    utils.updateById("momentum", character.tracks.momentum.current);
  },
  health: function(character) {
    utils.updateById("health", character.tracks.health.current);
  },
  spirit: function(character) {
    utils.updateById("spirit", character.tracks.spirit.current);
  },
  supply: function(character) {
    utils.updateById("supply", character.tracks.supply.current);
  },
  mana: function(character) {
    utils.updateById("mana", character.tracks.mana.current);
  },
  assets: function(character) {
    // To-do: Add support for rendering more than the text
    let assets = character.assets;
    let assetsDiv = d.getElementById("assets-container");
    // loop through the contents of asset and render them
    assetsDiv.innerHTML = "<h2>ASSETS</h2>";
    for (let asset in assets) {
      // create a child div under assetsDiv
      let assetId = "asset-" + utils.stringToSlugLine(asset);
      utils.createAndAppendDiv(assetId, assetsDiv);
      // render the contents
      let assetDiv = d.getElementById(assetId);
      assetDiv.innerHTML = "";
      assetDiv.innerHTML =
        "<p>Name: " + assets[asset]["name"] + "</p> <p>Text:" + assets[asset]["text"] + "</p>";
    }
  },
  all: function(character) {
    if (!character) {
      return;
    }
    let keys = Object.keys(render);
    keys.forEach(function(key) {
      if (key !== "all") {
        render[key](character);
      }
    });
  }
};

var roll = {
  actionRoll: function(stat, adds) {
    if (!isNaN(stat)) {
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

function init() {
  // do stuff
}

// boot
init();
