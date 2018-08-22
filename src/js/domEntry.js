const DBManager = require ("./dbcalls")

function domEntry(entry) {
    return `
        <h1>${entry.title}</h1>
        <p>${entry.content}</p>
        <footer>${entry.date}</footer>
        <br>
        <button>Delete Event</button>
    `
}


module.exports = domEntry