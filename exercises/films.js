var films = []

function createFilm(name, director, released, genre){
  var film = {
    name: name,
    dir: director,
    released: released,
    genre: genre || ''
  }

  return film
}


function forEachElement(arr, callback){
  for (var i = 0; i < arr.length; i++){
    callback(arr[i])
  }
}

function logDirector(film){
  console.log(film.dir)
}




films.push(createFilm('The Truman Show', 'Peter Weir', 1998, 'comedy'))
films.push(createFilm('Citizen Kane', 'Orson Welles', 1941))
films.push(createFilm('The Usual Suspects', 'Bryan Singer', 1995))


forEachElement(films, logDirector)