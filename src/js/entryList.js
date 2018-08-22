const DBManager = require("./dbCalls")
const domEntry = require("./domEntry")

const entryList = document.querySelector("#entryList")

const makeEntryList = DBManager.getAllEntries()
    .then(response => {
        response.map(item => {
            entryList.innerHTML += domEntry(item)
        })
    })

module.exports = makeEntryList