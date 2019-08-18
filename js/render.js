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