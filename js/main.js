"use strict";

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

const navSlide = () => {
  const burger = d.querySelector(".burger");
  const nav = d.querySelector(".nav-links");
  const navLinks = d.querySelectorAll(".nav-links li");

  // Toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
    
    // Burger animation
    burger.classList.toggle("toggle");
  });  
};

const initializeLocalStorage = function() {
  if (typeof localStorage.is_journal !== "undefined") {
    /* drop out of the init function if the journal object already exists
    TODO: validate the data */
    return;
  }
  localStorage.isj_campaigns || utils.ls.set("isj_campaigns", []);
  localStorage.isj_characters || utils.ls.set("isj_characters", []);
  localStorage.isj_assets || utils.ls.set("isj_assets", []);
};

function init() {
  navSlide();
  initializeLocalStorage();
}

init();
