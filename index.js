fetch(' http://localhost:3000/films')
    .then((res) => res.json())
    .then((json) => showAllMovies(json))



function showAllMovies(data) {
    data.forEach(element => {
        let movie = document.createElement('div')
        movie.classList.add('movie')
        document.getElementById('Firstmovie').appendChild(movie)

        let movieTitle = document.createElement('h2')
        movieTitle.innerText = element.title


        let poster = document.createElement('img')
        poster.src = element.poster

        let movieRuntime = document.createElement('h4')
        movieRuntime.innerText = `${element.runtime} minutes`

        let movieShowtime = document.createElement('h4')
        movieShowtime.innerText = element.showtime

        let movieTickets = document.createElement('div')
        movieTickets.classList.add('movieTickets')
        movieTickets.tickets = element.capacity - element.tickets_sold
        movieTickets.innerText = `Tickets left: ${movieTickets.tickets}`

        let buyBtn = document.createElement('button')
        buyBtn.classList.add('buyBtn')
        buyBtn.innerHTML = 'Buy Ticket'
        buyBtn.addEventListener('click', () => {
            movieTickets.tickets--
            movieTickets.innerText = `Tickets left: ${movieTickets.tickets}`
        })


        let moreDetails = document.createElement('button')
        moreDetails.innerText = 'More Details'
        moreDetails.classList.add('more-details')

        movie.appendChild(movieTitle)
        movie.appendChild(poster)
        movie.appendChild(movieRuntime)
        movie.appendChild(movieShowtime)
        movie.appendChild(movieTickets)
        movie.appendChild(buyBtn)


    })




}


