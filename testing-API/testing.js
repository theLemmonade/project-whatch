var APIKey = '490056a86245bab731a516b282429177';
fetch('https://api.themoviedb.org/3/movie/550?api_key=490056a86245bab731a516b282429177')
.then(function (response) {
    console.log("response", response);
    return response.json()
})
.then(function (data) {
    console.log("data", data);
})