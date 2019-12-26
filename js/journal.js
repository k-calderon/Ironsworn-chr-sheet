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

var currentJournal = utils.ls.get("currentJournal") || journalFactory();

var journalHelper = {
  new: function (setCurrent) {
    /* TODO: Finish this. Also figure out what you want it to do. */
    var newJournal = journalFactory();
  },
  getJournals: function(){
    return utils.ls.get("isj_journals")
  },
  getJournalById: function(uuid){
    const journals = this.getJournals();
    for(let i = 0; i < journals.length; i++){
      const journal = journals[i];
      if(journal.uuid === uuid){
        return journal;
      };
    };
    return null;
  },
  save: function(journal){
    let journals = this.getJournals() || [];
    let oldJournalIndex = -1;
    for (let i = 0; i < journals.length; i++){
      if (journals[i].uuid === journal.uuid){
        oldJournalIndex = i;
      };
    };
    if (oldJournalIndex > -1){
      journals.splice(oldJournalIndex, 1,)
    };
    journal.timeModified = Date.now();
    log("Saving journal",journal);
    journals.push(journal);
    utils.ls.set("isj_journals", journals);
  }
};

utils.ls.set("currentJournal", currentJournal);