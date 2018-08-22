console.log("Janet")
const inputEntry = require("./makeForm")
const DBManager = require("./dbCalls")
const makeEntryList = require("./entryList")

document.querySelector("#formInput").innerHTML = inputEntry.renderEntryForm()
document.querySelector("#saveEntry").addEventListener("click", () => {
    const newEntry = {
        title: document.querySelector("#title").value,
        content: document.querySelector("#content").value,
        date: Date.now()
    }
    DBManager.saveJournalEntry(newEntry)
    .then(() =>{
        inputEntry.clearEntryForm()
        // getAllEntries? I'm ron burgandy?
    })
})




// listener
// post to API



