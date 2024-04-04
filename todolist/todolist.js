// Constants
const addItemForm = document.getElementById('addItemForm')
const itemField = document.getElementById('itemToAdd')
const addItemButton = document.getElementById('addItem')
const currentListDiv = document.getElementById('currentList')

// Make sure page doesn't reload when hitting submit button
function handleForm(event) {
    event.preventDefault()
}
addItemForm.addEventListener('submit', handleForm)
