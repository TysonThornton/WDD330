// This js is used to create multiple to dos. Import the todo class
import { Todo } from './todo.js';

// First value is already set in todo.js so just need to pass the other 2 values
let todo1  = new Todo('Mow the lawn', false);
let todo2  = new Todo('Do the dishes', false);
let todo3  = new Todo('Wash the dog', true);

const todos = [];

todos.push(todo1);
todos.push(todo2);
todos.push(todo3);


// Before putting data in local storage, set it to a string by using JSON.stringify()
// Store this info in local storage
localStorage.setItem('todo', JSON.stringify(todos));
//Could also do the below and get rid of the .setItem
// localStorage.todo = JSON.stringify(todos);



// Set new array and pull out the same todo item from the setItem but this time do getItem
// You have to de-stringify it though in order to use .push(). Use JSON.parse
let newTodo = JSON.parse(localStorage.getItem('todo'));
// Could also do the below and get rid of .getItem
//  let newTodo = JSON.parse(localStorage.hikes);
newTodo.push(new Todo('Pick up stuff', false));


console.log(newTodo);