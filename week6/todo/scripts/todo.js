import {Todo} from './newTodo.js';


document.getElementById('newTodoBtn').addEventListener("click", addNewTodo);


function addNewTodo() {


    let todoValue = document.getElementById('newTodo').value;

    if (todoValue === "") {
        alert("You have to enter a To Do item");
    };

    let todo1 = new Todo(todoValue, false);
    localStorage.todo = JSON.stringify(todo1);

    const todoList = [];

    todoList.push(todo1);



    todoList.forEach(
        todo => {
            document.getElementById('todoList').innerHTML +=
            `<li>${ todo.Content }</li>
            <span class="delete">\u00D7</span>
            <li id="completed">${ todo.Completed }</li>
            `;
        }

    )
};