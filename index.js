fetch(' http://localhost:3000/films')
    .then((res) => res.json())
    .then((json) => showAllMovies(json))



function showAllMovies(data) {
    data.forEach(element => {
        let movieId = element.id
        let movieTitle = document.createElement('h2')
        movieTitle.innerText = element.title

        let poster = document.createElement('img')
        poster.src = element.poster

        let movieRuntime = document.createElement('h3')
        movieRuntime.innerText = `${element.runtime} minutes`

        let movieShowtime = document.createElement('h3')
        movieShowtime.innerText = element.showtime

        let movieTickets = document.createElement('div')
        movieTickets.classList.add('movieTickets')
        movieTickets.tickets = element.capacity - element.tickets_sold
        movieTickets.innerText = `Tickets left: ${movieTickets.tickets}`

        let buyBtn = document.createElement('button')
        buyBtn.classList.add('buyBtn')
        buyBtn.innerHTML = 'Buy Ticket'
        buyBtn.addEventListener('click', () => {
            let movieTicketsContainer = document.querySelector('.movieTickets')

            fetch(` http://localhost:3000/films/${movieId}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    'tickets_sold': movieTicketsContainer.likes - 1
                })
            })
                .then(res => res.json())
                .then(json => {
                    movieTickets.innerText = `Tickets left : ${json.capacity - json.tickets_sold}`
                })
        })


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


