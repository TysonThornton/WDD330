// Example using AJAX and the fetch()
fetch('http://swapi.dev/api/people/1')
    .then(result => result.json())
    .then(person => {
        document.querySelector('section').innerHTML +=
        //Send to HTML the name of the person 1 in the URL above
        `<h1>${person.name}</h1>`;

        //Build a list and send to HTML of all the movies person 1 was in
        person.films.forEach (
            film => {
                document.getElementById('movieList').innerHTML +=
                `<li><a href="${film}">${film}</li>`;
            }
        )
    });