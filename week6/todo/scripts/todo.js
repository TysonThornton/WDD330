import {Todo} from './newTodo.js';


document.getElementById('newTodoBtn').addEventListener("click", addNewTodo);
document.addEventListener("load", loadTodo);

const todoList = [];


function loadTodo() {

    if (localStorage.todo) {

        todoList = JSON.parse(localStorage.todo);
        outputContent();
    }
    
}; 

function addNewTodo() {


    let todoValue = document.getElementById('newTodo').value;

    if (todoValue === "") {
        alert("You have to enter a To Do item");
    };

    // Assign value to the new Todo class
    let todo1 = new Todo(todoValue);
 
    // Push new value to the To Do array
    todoList.push(todo1);
    
    // Run the saveTodo() function to write to local storage
    saveTodo();

    outputContent();
};

function outputContent() {

    document.getElementById('todoList').innerHTML = '';

    if (todoList.length > 0) {
        todoList.forEach(
            // todo => {
            //     document.getElementById('todoList').innerHTML +=
            //     `<li id="newItem">${ todo.Content }</li>
            //     <button class="delete" id="deleteItem">\u00D7</button>
            //     <li id="completed">${ todo.Completed }</li>
            //     `;
            // }

            todo => {
                
                let ul = document.createElement('ul');
                let li = document.createElement('li');
                li.textContent = todo.Content;
                li.setAttribute('id', todo.ID);

                if (todo.Completed) {
                    li.setAttribute('class', 'done');
                }

                li.addEventListener('click', toggleTodo);


                let button = document.createElement('button');
                button.setAttribute('id', todo.ID);
                button.textContent = '\u00D7';
                button.addEventListener('click', deleteItem(todo));

               
                
                ul.appendChild(li);
                ul.appendChild(button);

                document.querySelector('section').appendChild(ul);
            }

        )
    }

};

function saveTodo() {

    // Write to do array to local storage. The todoList tied to localStorage. is just the name it names it in Local Storage when it creates it
    localStorage.todoList = JSON.stringify(todoList);
}



function toggleTodo() {

    let index = todoList.findIndex(todo => todo.ID == this.id);
    todoList[index].Completed = !todoList[index].Completed;

    saveTodo();
    outputContent();
}

// document.getElementById('deleteItem').addEventListener("click", deleteItem);



function deleteItem(todo) {


     let deleteItem = todo.ID;
     todoList.splice(deleteItem, 1);

    //todoList.item.setAttribute('class', 'hide');
};

