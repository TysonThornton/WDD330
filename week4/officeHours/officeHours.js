let firstName = 'Tyson';
let lastName = 'Thornton';
let iNumber = '57485675';


// Put all the information above in an object
let student = {
    // pick a property name and set it to a value, in this case the object property name matches the value variable name above
    firstName: firstName,
    lastName: lastName,
    iNumber: iNumber
};

// This is replaced by logging out using an object instead
// console.log(firstName, lastName, iNumber);

console.log(student);


let student2 = {

    firstName: 'Phil',
    lastName: 'Harris',
    iNumber: '83452898'
};
 
// log out a specific value from an object
console.log(student2.lastName);


// Create an array and put the objects into that array
let students = [];

students.push(student);
students.push(student2);


// Send each value to the console using a forEach loop
students.forEach(
    student => {
        console.log(student.iNumber);
    }
);

// Make sure that every student object has the same properties. JS lets you create a class now to define what the object should look like
// A separate JS file was created with that class in it. Make sure the script tag in HTML includes type="module"
import {
    Student
} from './student.js';
// Now since the class is imported, instead of defining each variable, create an object using the new operator and pass the 3 values to the constructor
let student3 = new Student('Nate', 'Burk', '524321564');
let student4 = new Student('Ben', 'Williams', '43421458');

//Put those new students in an array
let studentArray = [student3, student4];

// Use forEach to loop through the array and send to console a value
studentArray.forEach(
    studentIndividual => {
        console.log(studentIndividual.INumber);
    }
)







// WORKING WITH FORM DATA NOW

// Add event listener
document.querySelector('button').addEventListener('click', addStudent);

// create a new array to store all the form data
let studentFormArray = [];


if (localStorage.getItem('studentFormArray')) {
    studentFormArray = JSON.parse(localStorage.getItem('studentFormArray'));

    // Load info in local storage to table
    loadTable();
}


// Create the addStudent function mentioned above
function addStudent(event) {
    let studentForm = new Student(
        // Grab the ids from the form inputs
        document.getElementById('firstName').value,
        document.getElementById('lastName').value,
        document.getElementById('iNumber').value,
    );

    //console.log(studentForm);
    // Store this in local storage instead of sending to console
    // Use JSON.stringify() to turn the object into a string
    // Look in Inspect under Application to find local storage

    studentFormArray.push(studentForm);
    localStorage.setItem('studentFormArray', JSON.stringify(StudentFormArray));

    loadTable();



    // Page refreshes once submit is pressed. Pass in Event to the function and cancel the event
    event.preventDefault();
}

// Function loadTable() is used to load local storage to table we create
function loadTable() {
    document.querySelector('tbody').innerHTML = '';
      studentFormArray.forEach(
          student => {
             document.querySelector('tbody').innerHTML +=
             '<tr><td>${student.FirstName}</td><td>${student.LastName}</td><td>${student.INumber}</td></tr>'; 
          }
      );  

}