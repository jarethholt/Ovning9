'use strict';

// Global variables
const app = {
  addItemForm: document.querySelector('#addItemForm'),
  itemField: document.querySelector('#itemToAdd'),
  addItemButton: document.querySelector('#addItem'),
  clearListButton: document.querySelector('#clearList'),
  currentListDiv: document.querySelector('#currentList')
}

// Define which functions are attached to which buttons
app.addItemForm.setAttribute('onsubmit', 'submitItem()')
app.clearListButton.setAttribute('onclick', 'clearList()')

// Make sure page doesn't reload when hitting submit button
app.addItemForm.addEventListener('submit',
  event => event.preventDefault())

// Set the form to add the item when submitted
function submitItem() {
  const item = app.itemField.value
  addItem(item)
  addItemForm.reset()
}

function addItem(item) {
  // Create a div element for the new item
  const listItemDiv = document.createElement('div')
  listItemDiv.classList.add('toDoListItemDiv')
  // Design the checkbox for the item
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.name = 'checkbox'
  checkbox.addEventListener('change', checkItem)
  // Add text for the item
  const ptext = document.createElement('p')
  ptext.classList.add('toDoListItem')
  ptext.append(item)
  // Add a button to remove the item
  const removeButton = document.createElement('button')
  removeButton.type = 'button'
  removeButton.classList.add('removeItem')
  removeButton.append('Remove')
  removeButton.addEventListener('click', removeItem)
  // Combine all elements into the parent div
  listItemDiv.append(checkbox, ptext, removeButton)
  // Prepend the parent div to the currentListDiv
  app.currentListDiv.prepend(listItemDiv)
}

// Remove an item based on its name
function removeItem() {
  // Get the parent of the remove button
  const itemDiv = this.parentElement;
  // Remove the entire div
  itemDiv.remove()
}

// Deal with the checkbox toggling
function checkItem() {
  // Get the parent of the checkbox
  const itemDiv = this.parentElement;
  // Add the style class "checked"
  itemDiv.classList.toggle("checked", this.checked)
  // Get the sibling text of the checkbox and add style class "checked"
  const ptext = itemDiv.querySelector('p')
  ptext.classList.toggle("checked", this.checked)
}

// Implement the button to clear the current list
function clearList() {
  // Use a popup window to confirm
  if (confirm('Do you really want to clear this list?')) {
    app.currentListDiv.innerHTML = ''
  }
}
