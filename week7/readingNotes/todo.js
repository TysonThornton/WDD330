// Used with the todo.html file

// Creates an event listener to prevent default behavior of form so it doesnt actually get submitted when the Add Task button is clicked
const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);
function addTask(event) {
    event.preventDefault();
    const number = form.task.value;
    // Creates a task object with a title property taken from the HTML form.
    // Also has completed property with default value of false
    const task = {
        userId: 1,
        title: form.task.value,
        completed: false
    }

    // The task object is then transformed into a JSON string and assigned to variable data
    const data = JSON.stringify(task);
    const url = 'https://jsonplaceholder.typicode.com/todos';

    // Header object is created. Because this is JSON, Accept and content-type need json
    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });

    // Request object is created. Because we are sending data, we need to ensure that the method property of the request object is POST
    // ....so that a POST request is used to send the data. Most important porperty of the request object is body - this where
    // ....the data we want to send is placed.
    const request = new Request(url,
    {
        method: 'POST',
        header: headers,
        body: data
    }
    )

    // feth() method used to send the request and deal with the response. 
    fetch(request)
    // fetch() creates a promise that ends up as a JSON object so the json() method is used here which witch resolves to a JavaScript object
    .then( response => response.json() )
    .then( task => console.log(`Task saved with an id of ${task.id}`) )
    .catch( error => console.log('There was an error:', error))
}