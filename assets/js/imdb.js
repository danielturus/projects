let movieRequest = document.querySelector("#movieRequest");
let originalMovieName = document.querySelector("#originalMovieName");
let movieDescription = document.querySelector("#movieDescription");
// let movieTrailer = document.querySelector("#movieTrailer").getAttribute("src");
let movieTrailer = document.getElementById("movieTrailer"); 
let moviePoster = document.getElementById("moviePoster"); 
let movieInput = document.querySelector('#movieInput');
// movieInput.addEventListener('input', getMovieAjax);


function getMovieAjax (){
    let movieTitle = movieInput.value;
    let movieYear = yearInput.value;
    let xhr = new XMLHttpRequest();
    let url = 'https://www.theimdbapi.org/api/find/movie?title='+movieTitle+'&year='+movieYear;
    xhr.open('GET', url, true);

    if(movieInput != ""){
        xhr.onload = function(){
            if (this.status = 200){
                // console.log(this.responseText);
                let raspuns = JSON.parse(xhr.responseText)   
                // console.log(raspuns[0].description);
                movieRequest.style.display = 'block';
                originalMovieName.innerHTML = raspuns[0].title;
                movieDescription.innerHTML = raspuns[0].storyline;
                moviePoster.src = raspuns[0].poster.thumb;
                

                console.log(raspuns[0].poster.large);
                // movieTrailer = raspuns[0].trailer[0].videoUrl;
                // if (typeof raspuns[0].trailer[0].videoUrl!== "undefined") {
                //     movieTrailer.src = raspuns[0].trailer[0].videoUrl;
                //     console.log(raspuns[0].trailer[0].videoUrl);
                // }
                if ('videoUrl' in raspuns[0].trailer[0] ){
                    // raspuns[0].trailer[0].videoUrl != ""
                    movieTrailer.src = raspuns[0].trailer[0].videoUrl;
                    console.log(raspuns[0].trailer[0].videoUrl);
                }
                else {
                    movieTrailer.style.display = 'none';
                }                
            }
        }
    }
    

    xhr.send();
}


