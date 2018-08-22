//const -- = require ("./dbCalls")

//MH - entering form for input of new vacations. Required fields etc.
//removing the commas
const inputEntry = Object.create(null, {
    clearEntryForm: {
        value: () => {
            document.querySelector("#title").value = " "
                document.querySelector("#content").value = " "
                alert("Journal entry submitted!")
        }
    },
    //post to DOM - up there
    renderEntryForm: {
        value: () => {
            return `
                <div>
                    <h3>Input Your Entry Here</h3>
                    <input type="text" placeholder="Enter Title" id="title" required>

                    <input type="text" placeholder="Enter Content" id="content" required>

                    <button id="saveEntry">Save Entry</button>
            </div>`
        }
    },

})

module.exports = inputEntry



