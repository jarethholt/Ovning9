'use strict';

// Global variables
const app = {
    addItemForm    : document.getElementById('addItemForm'),
    itemField      : document.getElementById('itemToAdd'),
    addItemButton  : document.getElementById('addItem'),
    clearListButton: document.getElementById('clearList'),
    currentListDiv : document.getElementById('currentList'),
    currItemIndex  : 0
}

// Define which functions are attached to which buttons
app.addItemForm.setAttribute('onsubmit', 'submitItem()')
app.clearListButton.setAttribute('onclick', 'clearList()')

// Make sure page doesn't reload when hitting submit button
app.addItemForm.addEventListener('submit', event => event.preventDefault())

// Set the form to add the item when submitted
function submitItem() {
    const item = app.itemField.value
    addItem(item)
    addItemForm.reset()
}

// Implement the button to clear the current list
function clearList() {
    // Use a popup window to confirm
    if (confirm('Do you really want to clear this list?')) {
        app.currentListDiv.innerHTML = ''
        app.currItemIndex = 0
    }
}

// Create the row HTML for an item
function createItemRow(item) {
    const itemName = `Item${app.currItemIndex}`
    // Set up a div with a checkbox, text, and "remove item" button
    let html = `<div class="toDoListItemDiv" id="div${itemName}">`
    // The checkbox runs checkItem('${itemName}') to deal with toggling
    html += `<input type="checkbox" class="checkbox" id="checkbox${itemName}" name="${itemName}" onclick="checkItem('${itemName}')">`
    html += `<p class="toDoListItem" id="${itemName}">${item}</p>`
    // The remove item button runs removeItem('${itemName}')
    html += `<button type="button" class="removeItem" id="remove${itemName}" onclick="removeItem('${itemName}')">Remove</button>`
    html += '</div>'
    // Update the index to use for the next item
    app.currItemIndex++
    return html
}

// Add an item to the current list
function addItem(item) {
    const rowHTML = createItemRow(item)
    const currentListHTML = app.currentListDiv.innerHTML
    // Add the row at the top of the list
    app.currentListDiv.innerHTML = rowHTML + currentListHTML
}

// Remove an item based on its name
function removeItem(itemName) {
    const itemDiv = document.getElementById(`div${itemName}`)
    itemDiv.remove()
}

// Deal with the checkbox toggling
function checkItem(itemName) {
    const checkbox = document.getElementById(`checkbox${itemName}`)
    const itemDiv = document.getElementById(`div${itemName}`)
    const ptext = document.getElementById(itemName)
    // The "checked" class is defined in the CSS
    // Changes the background color of the div and strikes through the text
    itemDiv.classList.toggle("checked", checkbox.checked)
    ptext.classList.toggle("checked", checkbox.checked)
}
