fetch(' http://localhost:3000/films/1')
    .then((res) => res.json())
    .then((json) => showAllMovie(json))



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

        let availableMovieTickets = element.capacity - element.tickets_sold
        let movieTickets = document.createElement('h4')
        movieTickets.innerHTML = `Tickets left : ${availableMovieTickets}`

        let buyBtn = document.createElement('button')
        buyBtn.innerHTML = 'Buy Ticket'


        const moreDetails = document.createElement('button')
        moreDetails.onclick = () => {
            document.getElementById('Firstmovie').appendChild(movieRuntime)
            document.getElementById('Firstmovie').appendChild(movieShowtime)
            document.getElementById('Firstmovie').appendChild(movieTickets)

        }

        document.getElementById('Firstmovie').appendChild(movieTitle)
        document.getElementById('Firstmovie').appendChild(poster)
        document.getElementById('Firstmovie').appendChild(moreDetails)


        document.getElementById('Firstmovie').appendChild(buyBtn)




    });


}