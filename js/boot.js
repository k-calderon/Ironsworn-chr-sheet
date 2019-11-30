"use strict";

var loadTime = Date.now();
var d = document;
var w = Window;

var log = function(msg, obj, name) {
  let now = Date.now();
  let timer = now - loadTime;
  name = name || "Generic";
  console.log(timer + "ms> " + name + "> " + msg, obj);
  // console.log(msg);
};

