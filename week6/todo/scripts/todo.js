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

    let todo1 = new Todo(todoValue, false);
 

    todoList.push(todo1);
    localStorage.todo = JSON.stringify(todoList);
    outputContent();
}

function outputContent() {

    document.getElementById('todoList').innerHTML='';

    todoList.forEach(
        // todo => {
        //     document.getElementById('todoList').innerHTML +=
        //     `<li id="newItem">${ todo.Content }</li>
        //     <button class="delete" id="deleteItem">\u00D7</button>
        //     <li id="completed">${ todo.Completed }</li>
        //     `;
        // }

        todo => {
            let li = document.createElement('li');
            li.textContent = todo.Content;

            let button = document.createElement('button');
            button.setAttribute('id', todo.ID);
            button.textContent = '\u00D7';
            button.addEventListener('click', deleteItem);

            document.getElementById('todoList').appendChild(li);
            document.getElementById('todoList').appendChild(button);
        }

    )

};


// document.getElementById('deleteItem').addEventListener("click", deleteItem);



function deleteItem() {
    todoList.
    item.className = "hide";
};

