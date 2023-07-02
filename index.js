fetch(' http://localhost:3000/films/1')
    .then((res) => res.json())
    .then((json) => createFirstMovie(json))



function createFirstMovie(data) {
    let movieTitle = document.createElement('h2')
    movieTitle.innerText = data.title

    let poster = document.createElement('img')
    poster.src = data.poster

    let movieRuntime = document.createElement('h3')
    movieRuntime.innerText = `${data.runtime} minutes`

    let movieShowtime = document.createElement('h3')
    movieShowtime.innerText = data.showtime

    let availableMovieTickets = data.capacity - data.tickets_sold
    let movieTickets = document.createElement('h4')
    movieTickets.innerHTML = `Tickets left : ${availableMovieTickets}`

    let buyBtn = document.createElement('button')
    buyBtn.innerHTML = 'Buy Ticket'
    buyBtn.onclick = () => {
        let availableMovieTickets = data.capacity - data.tickets_sold
        if (availableMovieTickets >= 1) {
            availableMovieTickets - 1
            movieTickets.innerHTML = `Tickets left : ${availableMovieTickets}`

        }

        else {
            movieTickets.innerHTML = 'Sold Out'
        }
    }

    document.getElementById('Firstmovie').appendChild(movieTitle)
    document.getElementById('Firstmovie').appendChild(poster)
    document.getElementById('Firstmovie').appendChild(movieRuntime)
    document.getElementById('Firstmovie').appendChild(movieShowtime)
    document.getElementById('Firstmovie').appendChild(movieTickets)
    document.getElementById('Firstmovie').appendChild(buyBtn)




}