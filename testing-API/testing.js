var APIKey = '490056a86245bab731a516b282429177';
fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=490056a86245bab731a516b282429177&language=en-US')
.then(function (response) {
    console.log("response", response);
    return response.json()
})
.then(function (data) {
    console.log("data", data);
})

var genreList = ['Action', 'Comedy', 'Science Fiction', 'Romance', 'Horror']