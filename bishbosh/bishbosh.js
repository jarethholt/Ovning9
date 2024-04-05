'use strict';

// Global variables
const app = {
    bishboshForm: document.getElementById('bishboshform'),
    bishField   : document.getElementById('bish'),
    boshField   : document.getElementById('bosh'),
    maxField    : document.getElementById('max'),
    runButton   : document.getElementById('run'),
    outputDiv   : document.getElementById('output'),
}

// Make sure page doesn't reload when hitting the run button
// function handleForm(event) {
//     event.preventDefault()
// }
// bishboshForm.addEventListener('submit', handleForm)
app.bishboshForm.addEventListener('submit', event => event.preventDefault())

// Set the form to run bish-bosh when run is clicked
app.bishboshForm.setAttribute('onsubmit', 'runBishBosh()')

// Bish-bosh calculation for a single value
function bishbosh_single(bish, bosh, value) {
    let result = ''
    if (value % bish == 0) {
        result += 'Bish'
    }
    if (value % bosh == 0) {
        if (result.length > 0) {
            result += '-'
        }
        result += 'Bosh'
    }
    if (result.length === 0) {
        result = `${value}`
    }
    return result
}

// Generate the bish-bosh HTML for a range of values
function bishbosh_full(bish, bosh, max) {
    let html = `<ul>`
    for (let value = 1; value <= max; value++) {
        html += `<li>${bishbosh_single(bish, bosh, value)}</li>`
    }
    html += `</ul>`
    return html
}

// Run the bish-bosh function with page interaction
function runBishBosh() {
    const bish = app.bishField.value
    const bosh = app.boshField.value
    const max  = app.maxField.value
    const html = bishbosh_full(bish, bosh, max)
    app.outputDiv.innerHTML = html
}
