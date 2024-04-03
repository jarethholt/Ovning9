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

function bishbosh_full(bish, bosh, max) {
    let html = `<ul>`
    for (let value = 1; value <= max; value++) {
        html += `<li>${bishbosh_single(bish, bosh, value)}</li>`
    }
    html += `</ul>`
    return html;
}
