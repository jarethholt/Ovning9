// Constants
const bishboshForm = document.getElementById('bishboshform')
const bishField = document.getElementById('bish')
const boshField = document.getElementById('bosh')
const maxField = document.getElementById('max')
const runButton = document.getElementById('run')
const outputDiv = document.getElementById('output')

// Make sure page doesn't reload when hitting the run button
// function handleForm(event) {
//     event.preventDefault()
// }
// bishboshForm.addEventListener('submit', handleForm)
bishboshForm.addEventListener('submit', event => event.preventDefault())

// Set the form to run bish-bosh when run is clicked
bishboshForm.setAttribute('onsubmit', 'runBishBosh()')

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
    return html;
}

// Run the bish-bosh function with page interaction
function runBishBosh() {
    let bish = bishField.value;
    let bosh = boshField.value;
    let max = maxField.value;
    let html = bishbosh_full(bish, bosh, max)
    outputDiv.innerHTML = html
}
