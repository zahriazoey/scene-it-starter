let movieContainer = document.querySelector('.movies-container');


document.addEventListener('DOMContentLoaded', function() {
    function renderMovies(movieArray) {
        let movieHtmlArray = movieArray.map(function(currentMovie) {
            return ` <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div class="card">
            <img class="card-img-top" src="${currentMovie.Poster}" alt="...">
            <div class="card-body">
                <h5 class="card-title">${currentMovie.Title}</h5>
                <p class="card-text">${currentMovie.Year}</p>
                <a href="#" class="btn btn-primary">Add</a>
            </div>
            </div>
        </div>
        `     
        });

        return movieHtmlArray.join(``);
    };
    
    movieContainer.innerHTML = renderMovies(movieData);

});

const myForm = document.getElementById('search-form');
myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    function renderMovies(movieArray) {
        let movieHtmlArray = movieArray.map(function(currentMovie) {
            return ` <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <div class="card">
                <img class="card-img-top" src="${currentMovie.Poster}" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${currentMovie.Title}</h5>
                    <p class="card-text">${currentMovie.Year}</p>
                    <a href="#" class="btn btn-primary">Add</a>
                </div>
                </div>
            </div> `   
        });

        return movieHtmlArray.join(``);
    };
    
    movieContainer.innerHTML = renderMovies(movieData);


});