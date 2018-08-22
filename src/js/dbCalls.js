const DBManager = Object.create(null, {
    saveJournalEntry: {
        value: (entry) => {
            return fetch("http://localhost:8088/entries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            })
                .then(response => response.json())
        }
    },
    getAllEntries: {
        value: () => {
            return fetch("http://localhost:8088/entries?_order=desc&_sort=date")
                .then(response => response.json())
        }
    },
    deleteEntry: {
        value: (id) => {
            return fetch(`http://localhost:8088/entries/${id}`, {
                method: "DELETE"
            })
                .then(response => response.json())
        }
    }
})

module.exports = DBManager