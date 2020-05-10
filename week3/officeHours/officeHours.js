// example of how an object is created
// you couls set a value to a variable on its own:
/*
let firstName = 'Tyson';
let lastName = 'Thornton';
let iNumber = '1234567';

//send values to the console
console.log(firstName, lastName, iNumber);
*/

// Or you could put those values in an object
// When assigning a variable inside an object you use a : instead of =

let student1 = {

    // These variables are called the properties
    firstName: 'Tyson',
    lastName: 'Thornton',
    iNumber: '1234567',
    age: null,


    // Can also put a function in an object as well
    // A function inside an object is called a METHOD
    // Keyword THIS refers to anything in this object - used in function below
    sayHello() {
        console.log('Hello ' + this.firstName + ' ' + this.lastName);
        // A cleaner way of writing the above code with spaces is to use a ` back tick followed by a $ dollar sign and the dollar sign puts the spaces in followed by curly braces
        // Below is a string literal
        // console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    

};

let student2 = {

    firstName: 'Phil',
    lastName: 'Harris',
    iNumber: '7654321',
    age: 25

};

console.table(student1);
console.table(student2);


// To pull out a value or property in an object
student1.sayHello();

// Log out part of the object instead of whole object
console.log(student2.firstName);

// Send vaule in the object to the HTML. This will look for an HTML element to send to
document.querySelector('h5').textContent = `${student1.firstName} ${student1.lastName}`;

// Send value in the object to HTML, but create an HTML element from Javascript to do so
let h6Content = document.createElement('h6');
// Set the value of the variable created above
h6Content.textContent = `(This is being created from JacaScript file) I-Number: ${student1.iNumber}`;
// Look for where in the HTML to send the above value
document.querySelector('h5').appendChild(h6Content);


