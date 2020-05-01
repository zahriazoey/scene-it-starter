let movieContainer = document.querySelector('.movies-container');

function saveToWatchlist(imdbID) {
    const movie = movieData.find(function(currentMovie) {
        return currentMovie.imdbID === imdbID;
    });
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
        if (watchlist === null) {
            watchlist = [];
        }
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
};


const myForm = document.getElementById('search-form');
myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let searchString = document.querySelector('.search-bar').value
    let urlEncodedSearchString = encodeURIComponent(searchString);
    axios.get("http://www.omdbapi.com/?apikey=b43843a0&s=" + urlEncodedSearchString)
        .then(function (response) {
            movieData = response.data.Search;
            movieContainer.innerHTML = renderMovies(response.data.Search);
            console.log(response.data);

        })
    function renderMovies(movieArray) {
        let movieHtmlArray = movieArray.map(function(currentMovie) {
            return ` <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <div class="card">
                <img class="card-img-top" src="${currentMovie.Poster}" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${currentMovie.Title}</h5>
                    <p class="card-text">${currentMovie.Year}</p>
                    <button onclick="saveToWatchlist('${currentMovie.imdbID}')" class="btn btn-primary">Add</button>
                </div>
                </div>
            </div> `   
        });

        return movieHtmlArray.join(``);
    };
    
    


});