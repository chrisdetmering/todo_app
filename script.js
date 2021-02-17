window.onload = displayTodos; 


function getSavedTodosIds() { 
    return Object.keys(localStorage)
    .filter(key => key.includes('id'))
    .sort((a, b) => { 
        const id1 = Number(a.split("-")[1]); 
        const id2 = Number(b.split("-")[1]); 
        return id1 - id2; 
    });
}

function saveTodo() { 
    const toDo = document.querySelector('#todo-field');
    const id = "id-" + Date.now(); 
    localStorage.setItem(id, toDo.value); 
    toDo.value = ''; 
}

document.querySelector('#submit-btn')
.addEventListener('click', () => {
    saveTodo(); 
    displayTodos(); 
})


//Displays the items in localStorage on the todo-list
function displayTodos() { 
    const toDoList = document.querySelector('#todo-list')
    toDoList.innerHTML = ''; 
    const ids = getSavedTodosIds(); 
    ids.forEach(id => { 
        const todo = createTodo(id); 
        toDoList.append(todo);
    })
}


function createTodo(id) { 
    const todoListItem = document.createElement('li');
    const clearButton = createDeleteButton(id, todoListItem);
    const toggleTodoButton = createToggleTodoButton(todoListItem);
    todoListItem.append(localStorage.getItem(id));
    todoListItem.append(clearButton);  
    todoListItem.append(toggleTodoButton);
    todoListItem.classList.add('list-item');
    todoListItem.setAttribute('id', id);
    return todoListItem; 
}


function createDeleteButton(id, todoListItem) {
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "x";
    deleteButton.classList.add('clear');
    deleteButton.addEventListener('click', () => deleteTodo(id, todoListItem));
    return deleteButton;
}

function deleteTodo(id, todoListItem) {
    localStorage.removeItem(id); 
    todoListItem.remove();
}


function createToggleTodoButton(todoListItem) {
    const toggleTodoButton = document.createElement('input');
    toggleTodoButton.setAttribute('type', 'checkbox');
    toggleTodoButton.classList.add('pending');
    toggleTodoButton.addEventListener('click', () => toggleTodo(todoListItem));
    return toggleTodoButton;
}


function toggleTodo(todoListItem) {
    if (!todoListItem.classList.contains('strike')) {
        todoListItem.classList.add('strike');
    } else {
        todoListItem.classList.remove('strike');
    }
}


