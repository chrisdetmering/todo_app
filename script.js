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
        toDoList.append(newListItem);
        console.log(localStorage.getItem(`toDo${i}`));
    }

function addButtonDone(i) {
    const doneButton = document.createElement('button');
    doneButton.innerHTML = "Done";
    doneButton.classList.add('pending');
    return doneButton;
}

function addButtonClear(i) {
    const clearButton = document.createElement('button');
    clearButton.innerHTML = "Clear";
    clearButton.classList.add('clear', `toDo${i}`);
    return clearButton;
}

const clear = document.querySelectorAll('.clear');

clear.forEach(function(elem) {
    elem.addEventListener('click', () => {
            
        }
    );
});


