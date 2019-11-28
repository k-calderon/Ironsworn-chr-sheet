var campaignFactory = function() {
  return {
    name: "Placeholder",
    id: "",
    characters: [],
    logs: [],
    notes: ""
  };
};

var logFactory = function() {
  return {
    uuid: utils.uuidv4(),
    timestamp: Date.now(),
    title: "New Log",
    description : "",
    author: "",
    entries: []
  }
};

var logEntryFactory = function (){
  return {
    uuid: utils.uuidv4(),
    timestamp: Date.now(),
    title: "New Log Entry",
    text: "",
    roll: {}
  }
};