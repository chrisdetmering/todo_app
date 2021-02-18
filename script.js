window.onload = displayTodos; 


document.querySelector('#submit-btn')
.addEventListener('click', () => {
    saveTodo(); 
    displayTodos(); 
})

function saveTodo() { 
    const todoInputElement = document.querySelector('#todo-field'); 
    const todoText = todoInputElement.value;
    localStorage.setItem(`${Date.now()}`, todoText);
    todoInputElement.value = ''; 
}


function displayTodos() { 
    const todoList = document.querySelector('#todo-list')
    todoList.innerHTML = ''; 
    const ids = getSavedTodosIds(); 

    ids.forEach(id => { 
        const newListItem = createTodo(id); 
        todoList.append(newListItem);
    }); 
}

function getSavedTodosIds() { 
    return Object.keys(localStorage).sort((a, b) => { 
        return Number(a) - Number(b); 
    }); 
}


function createTodo(id) { 
    const todoListItem = document.createElement('li');
    // const doneButton = createToggleTodoButton(id);
    const deleteButton = createDeleteButton(id);
    todoListItem.append(localStorage.getItem(id));
    // todoListItem.append(doneButton);
    todoListItem.append(deleteButton);
    todoListItem.classList.add('list-item');
    todoListItem.setAttribute('id', id);
    return todoListItem; 
}


function createDeleteButton(id) {
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "x";
    deleteButton.classList.add('clear');
    deleteButton.addEventListener('click',() => deleteTodo(id, deleteButton));
    return deleteButton;
}

function deleteTodo(id, deleteButton) {
    localStorage.removeItem(id);
    deleteButton.parentElement.remove(); 
}









function createToggleTodoButton(i) {
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





