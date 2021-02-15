const submitBtn = document.querySelector('#submit-btn');
const toDo = document.querySelector('#todo-field');

const toDoList = document.querySelector('#todo-list')
const done = document.querySelectorAll('.pending');

submitBtn.addEventListener('click', () => {
    let listItem = toDo.value;
    localStorage.setItem(`toDo${localStorage.length + 1}`, listItem);
})

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
    return doneButton;
}

function addButtonClear(i) {
    const clearButton = document.createElement('button');
    clearButton.innerHTML = "Clear";
    clearButton.classList.add('clear');
    clearButton.setAttribute('id', `toDo${i}`);
    clearButton.addEventListener('click', clearList);
    return clearButton;
}

const clear = document.querySelectorAll('.clear');

function clearList(index) {
    let item = this.getAttribute('id');
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key === item) {
            localStorage.removeItem(key);
        }
    }
    this.closest('.list-item').remove();
    console.log('clear');
    console.log(index);
    console.log(item)
}




