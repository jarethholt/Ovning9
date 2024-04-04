// Constants
const addItemForm = document.getElementById('addItemForm')
const itemField = document.getElementById('itemToAdd')
const addItemButton = document.getElementById('addItem')
const clearListButton = document.getElementById('clearList')
const currentListDiv = document.getElementById('currentList')

// Global variable: index of current item
let currItemIndex = 0

// Make sure page doesn't reload when hitting submit button
addItemForm.addEventListener('submit', event => event.preventDefault())

// Set the form to add the item when submitted
function submitItem() {
    let item = itemField.value
    addItem(item)
    addItemForm.reset()
    return false
}
addItemForm.setAttribute('onsubmit', 'submitItem()')

// Implement the button to clear the current list
function clearList() {
    if (confirm('Do you really want to clear this list?')) {
        currentListDiv.innerHTML = ''
        currItemIndex = 0
    }
}
clearListButton.setAttribute('onclick', 'clearList()')

// Create the row HTML for an item
function createItemRow(item) {
    let itemName = `Item${currItemIndex}`
    let html = `<div class="toDoListItemDiv" id="div${itemName}">`
    html += `<input type="checkbox" class="checkbox" id="checkbox${itemName}" name="${itemName}" onclick="checkItem('${itemName}')">`
    html += `<p class="toDoListItem" id="${itemName}">${item}</p>`
    html += `<button type="button" class="removeItem" id="remove${itemName}" onclick="removeItem('${itemName}')">Remove</button>`
    html += '</div>'
    // Update the index to use for the next item
    currItemIndex++
    return html
}

// Add an item to the current list
function addItem(item) {
    rowHTML = createItemRow(item)
    currentListHTML = currentListDiv.innerHTML
    // Add the row at the top of the list
    currentListDiv.innerHTML = rowHTML + currentListHTML
}

// Remove an item based on its name
function removeItem(itemName) {
    itemDiv = document.getElementById(`div${itemName}`)
    itemDiv.remove()
}

// Deal with the checkbox toggling
function checkItem(itemName) {
    checkbox = document.getElementById(`checkbox${itemName}`)
    itemDiv = document.getElementById(`div${itemName}`)
    ptext = document.getElementById(itemName)
    itemDiv.classList.toggle("checked", checkbox.checked)
    ptext.classList.toggle("checked", checkbox.checked)
}
