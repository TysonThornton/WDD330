 
 // Import the Hike object constructed in hike.js
 import {Hike} from './hike.js';

 // Using the hike object put values for different hike variables
 let hike1 = new Hike('Hike 1', '', '', '10 miles', 'Easy', 'Description 1', 'Directions 1');
 let hike2 = new Hike('Hike 2', '', '', '20 miles', 'Moderate', 'Description 2', 'Directions 2');
 let hike3 = new Hike('Hike 3', '', '', '30 miles', 'Difficult', 'Description 3', 'Directions 3');

 // Create an empty array to store all the values from hike
 const hikeList = [];


 // Put all the values of the different hikes into the hikeList array using .push()
 hikeList.push(hike1);
 hikeList.push(hike2);
 hikeList.push(hike3);

 // Send all the results of hikeList to the console
 //console.log(hikeList);


 // Example of how to do the To Do app writing data to HTML, but using the hike info above
 // Be sure to use a backtick instead of single quote below!!!!!!!!!!!!!!!!!!!

 hikeList.forEach(
    hike => {
        document.getElementById('hikes').innerHTML += `<li>${ hike.Name }</li>`;
    }

);


// Send the same info to a table instead of a ul
hikeList.forEach(
    hike => {
        document.querySelector('tbody').innerHTML += 
        `<tr>
            <td>${ hike.Name }</td>
            <td>${ hike.Distance}</td>
        </tr>`;
    }

);