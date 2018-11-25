"use strict";

var d = document;
var w = Window;

var characterTemplate = {
    "name": "Placeholder",
    "bonds":{},
    "vows": {},
    "stats": {
        "edge": 1,
        "heart": 1,
        "iron": 1,
        "shadow": 1,
        "wits": 1
    },
    "assets": {},
    "tracks": {
        "momentum": {
            "current": 2,
            "max": 10,
            "min": -6,
            "reset": 2
        },
        "health": {
            "current": 5,
            "max": 5,
            "min": 0
        },
        "spirit": {
            "current": 5,
            "max": 5,
            "min": 0
        },
        "supply": {
            "current": 5,
            "max": 5,
            "min": 0
        },
        "mana": {
            "current": 5,
            "max": 5,
            "min": 0
        }
    },
    "debilities": {
        "conditions": {
            "wounded": false,
            "shaken": false,
            "unprepared": false,
            "encumbered": false
        },
        "banes": {
            "maimed": false,
            "corrupted": false,
        },
        "burdens": {
            "cursed": false,
            "tormented": false
        }
    }

};

var utils = {
    "updateById": function (id, value){
        let divToUpdate = d.getElementById(id);
        divToUpdate.innerHTML = "";
        divToUpdate.innerHTML = value;
    },
    "stringToSlugLine": function (string) {
        return string.toLowerCase()
          .split(/\W/)
          .filter(function(item){ return item !== ""})
          .join("-");        
      },
    "createAndAppendDiv": function (id, parent){
        let el = d.createElement("div");
        el.setAttribute("id", id);
        parent ? parent = d.getElementById(parent) : parent = body;
        parent.appendChild(el);
    },
    "createAsset": function (character, name, texst){
        let id = utils.stringToSlugLine(name);
        character.assets[id] = {};
        character.assets[id].name = name;
        character.assets[id].text = text;
    }
};

var render = {    
    "characterName": function (character){
       utils.updateById("character-name", character.name);
    },
    "statEdge": function (character){
        utils.updateById("stat-edge", character.stats.edge);
    },
    "statHeart": function (character){
        utils.updateById("stat-heart", character.stats.heart);
    },
    "statIron": function (character){
        utils.updateById("stat-iron", character.stats.iron);
    },
    "statShadow": function (character){
        utils.updateById("stat-shadow", character.stats.shadow);
    },
    "statWits": function (character){
        utils.updateById("stat-wits", character.stats.wits);
    },
    "momentum": function (character){
        utils.updateById("momentum", character.tracks.momentum.current);
    },
    "health": function (character){
        utils.updateById("health", character.tracks.health.current);
    },
    "spirit": function (character){
        utils.updateById("spirit", character.tracks.spirit.current);
    },
    "supply": function (character){
        utils.updateById("supply", character.tracks.supply.current);
    },
    "mana": function (character){
        utils.updateById("mana", character.tracks.mana.current);
    },
    "assets": function (character){
        // To-do: Add support for rendering more than the text
        let assets = character.assets;    
        let renderAsset = function (name, text){
            let id = "asset-" + utils.stringToSlugLine(name);
            // This fails to render the name
            utils.createAndAppendDiv(id, "assets");
            utils.updateById(id, text);
        };
        for (let asset in assets) {
            renderAsset(assets[asset].name, assets[asset].text);
        };
    },
    "all": function (character){
        let keys = Object.keys(render);
        keys.forEach(
            function(key){
                if (key !== "all"){
                    render[key](character);
                };
            }
        );
    }

};

function init (){
    // do stuff
};

// boot
init();