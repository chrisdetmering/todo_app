const submitBtn = document.querySelector('#submit-btn');
const toDo = document.querySelector('#todo-field');
const toDoList = document.querySelector('#todo-list')
const done = document.querySelectorAll('.pending');

submitBtn.addEventListener('click', () => {
    let listItem = toDo.value;
    localStorage.setItem(`toDo${localStorage.length + 1}`, listItem);
})

//Displays the items in localStorage on the todo-list

for (let i = 1; i <= localStorage.length; i++) {
    const newListItem = document.createElement('li');
    const doneButton = addButtonDone(i);
    const clearButton = addButtonClear(i);
    newListItem.append(localStorage.getItem(`toDo${i}`));
    newListItem.append(doneButton);
    newListItem.append(clearButton);
    newListItem.classList.add('list-item');
    newListItem.setAttribute('id', `toDo${i}`);
    toDoList.append(newListItem);
    console.log(localStorage.getItem(`toDo${i}`));
}

function addButtonDone(i) {
    const doneButton = document.createElement('input');
    doneButton.setAttribute('type', 'checkbox');
    doneButton.classList.add('pending');
    doneButton.addEventListener('click', strikethru);
    return doneButton;
}

function strikethru() {
    let item = this.closest('.list-item');
    if (!item.classList.contains('strike')) {
        item.classList.add('strike');
    } else {
        item.classList.remove('strike');
    }
}

function addButtonClear(i) {
    const clearButton = document.createElement('button');
    clearButton.innerHTML = "x";
    clearButton.classList.add('clear');
    clearButton.setAttribute('id', `toDo${i}`);
    clearButton.addEventListener('click', clearList);
    return clearButton;
}

function clearList() {
    let item = this.getAttribute('id');
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key === item) {
            localStorage.removeItem(key);
        }
    }
    this.closest('.list-item').remove();
}




