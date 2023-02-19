const form = document.getElementById('add-form');
const input = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

// Legg til produkt
form.addEventListener('submit', addItem);

function addItem(e) {
  e.preventDefault();
  const newItem = input.value.trim();
  if (newItem !== '') {
    const li = document.createElement('li');
    li.textContent = newItem;
    itemList.appendChild(li);
    input.value = '';
    li.addEventListener('click', toggleDone);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Slett';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.classList.add('btn-red');
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', deleteItem);
  }
}

// Merk produkt som kjøpt eller ikke kjøpt
function toggleDone() {
  this.classList.toggle('done');
}

// Slett produkt
function deleteItem() {
  this.parentNode.remove();
}
