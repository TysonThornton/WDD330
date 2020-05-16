const form = document.forms['search'];
//const [input,button] = form.elements;
//const input = form['searchInput']

/*
const input = form.elements.searchInput;
input.addEventListener('focus', () => alert('focused'), false);
*/

input.addEventListener('blur', () => alert('blurred'), false);
input.addEventListener('change', () => alert('changed'), false);

/*
const form = document.forms['search'];
form.addEventListener ('submit', search, false);
function search() {
    alert(' Form Submitted');
}
*/


function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}

input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);
input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);


    form.addEventListener('submit',validate,false);
function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}

form.addEventListener('submit',validate,false);
function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}