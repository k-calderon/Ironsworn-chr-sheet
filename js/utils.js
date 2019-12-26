var utils = {
  ls: {
    get: function (key){
      log(`utils.ls.get> Fetching ${key}`);
      if(localStorage[key]){
        return JSON.parse(localStorage[key]);
      } else {
        return null;
      };
    },
    set: function (key, value){
      log(`utils.ls.set> Attempting to set ${key}`, value);
      localStorage.setItem(key, JSON.stringify(value));
    },
    remove: function (key) {
      log(`utils.ls.remove> Attempting to remove ${key}`);
      if (key) {
        localStorage.removeItem(key);
      };
    }
  },
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
    };
  },
  randIntBetween: function(min, max) {
    // Guard against non numbers
    if (typeof min !== "number" || typeof max !== "number") {
            log("A non-number was passed to randIntBetween.", [arguments], "Error");
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
    if (value){
      divToUpdate.innerHTML = value;
    };
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
    };
    log(`Appending div with ID ${id} to`, parent)
    parent.appendChild(el);
  },
  createAsset: function(character, name, text) {
    let id = utils.stringToSlugLine(name);
    character.assets[id] = {};
    character.assets[id].name = name;
    character.assets[id].text = text;
  }
};