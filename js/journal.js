var journalFactory = function(){
  var timestamp = Date.now();
  return {
    uuid: utils.uuidv4(),
    timeCreated: timestamp,
    timeModified: timestamp,
    title: "New Journal",
    description : "",
    author: "",
    characters: [],
    entries: [],
    notes: ""
  };
};

var journalEntryFactory = function (){
  var timestamp = Date.now();
  return {
    uuid: utils.uuidv4(),
    timeCreated: timestamp,
    timeModified: timestamp,
    title: "New Log Entry",
    text: "",
    roll: {}
  }
};

var journalHelper = {
  new: function () {
    var newJournal = journalFactory();
    
  }
};