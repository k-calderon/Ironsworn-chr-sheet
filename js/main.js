"use strict";
var loadTime = Date.now();
var d = document;
var w = Window;

var characterFactory = function(){
  return {
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
}

var log = function(msg, obj, name) {
  let now = Date.now();
  let timer = now - loadTime;
  name = name || "Generic";
  console.log(timer + "ms> " + name + "> " + msg, obj);
  // console.log(msg);
};

const navSlide = () => {
  const burger = d.querySelector(".burger");
  const nav = d.querySelector(".nav-links");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  })
}

function init() {
  // do stuff
  navSlide();
}

// boot
init();
