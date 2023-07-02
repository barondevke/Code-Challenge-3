fetch(' http://localhost:3000/films')
    .then((res) => res.json())
    .then((json) => showAllMovies(json))

let availableMovieTickets = 0

function showAllMovies(data) {
    data.forEach(element => {
        let movieTitle = document.createElement('h2')
        movieTitle.innerText = element.title

        let poster = document.createElement('img')
        poster.src = element.poster

        let movieRuntime = document.createElement('h3')
        movieRuntime.innerText = `${element.runtime} minutes`

        let movieShowtime = document.createElement('h3')
        movieShowtime.innerText = element.showtime

        availableMovieTickets = element.capacity - element.tickets_sold
        let movieTickets = document.createElement('h3')
        movieTickets.innerHTML = `Tickets left : ${availableMovieTickets}`

        let buyBtn = document.createElement('button')
        buyBtn.classList.add('buyBtn')
        buyBtn.innerHTML = 'Buy Ticket'


        let moreDetails = document.createElement('button')
        moreDetails.innerText = 'More Details'
        moreDetails.classList.add('more-details')

        document.getElementById('Firstmovie').appendChild(movieTitle)
        document.getElementById('Firstmovie').appendChild(poster)
        document.getElementById('Firstmovie').appendChild(movieRuntime)
        document.getElementById('Firstmovie').appendChild(movieShowtime)
        document.getElementById('Firstmovie').appendChild(movieTickets)
        document.getElementById('Firstmovie').appendChild(buyBtn)


    })


}

document.addEventListener('click')


