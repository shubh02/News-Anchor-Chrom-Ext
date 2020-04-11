const latest_indian_news = "https://newsapi.org/v2/everything?q=todays+latest+india+news&apiKey=ENTER_GOOGLE_API_KEY";

const query_search_news = "https://newsapi.org/v2/everything?q=query&apiKey=ENTER_GOOGLE_API_KEY";

var spinnerDiv = document.getElementById("spinners");
var news_body = document.getElementById('json_news');

var search = function()
{
    news_body.innerHTML = getSpinners();
    let searchQuery = document.getElementById("search_bar").value;
    let url = query_search_news.replace("query",modifyQuery(searchQuery));
    fetch(url).then(resp => {

        resp.json().then(function(data) {

            if(data.articles !== null && data.articles.length > 0 ) {
                let newsArticle = convertToArticleBody(data.articles);
                news_body.innerHTML = newsArticle;
            }  
        }
    )})
    .then(error => {
         news_body.innerHTML = getNoResultDiv();
    })
}

var getSuggestedNews = function(searchQuery) {
    news_body.innerHTML = getSpinners();
    let url = query_search_news.replace("query",modifyQuery(searchQuery));
    fetch(url).then(resp => {

        resp.json().then(function(data) {

            if(data.articles !== null && data.articles.length > 0 ) {
                let newsArticle = convertToArticleBody(data.articles);
                news_body.innerHTML = newsArticle;
            }  
        }
    )})
    .then(error => {
         news_body.innerHTML = getNoResultDiv();
    })
}



var getIndianNews = function() {
  news_body.innerHTML = getSpinners();
  fetch(latest_indian_news).then(response => {
    response.json().then(function(data) {
    if(data.articles !== null && data.articles.length > 0 )
    {
        let newsArticle = convertToArticleBody(data.articles);
        news_body.innerHTML = newsArticle;
    }
    }
  )})
.then(error =>{
    news_body.innerHTML = getNoResultDiv();
})
}


// Util functions
var getSpinners = function(){
    return "<div style='margin-left: 30%'>"+
           "<div class='spinner-grow text-danger' role='status'>"+
           "<span class='sr-only'>Loading...</span>"+
           "</div>"+
           "<div class='spinner-grow text-warning' role='status'>"+
           "<span class='sr-only'>Loading...</span>"+
           "</div>"+
           "<div class='spinner-grow text-info' role='status'>"+
           "<span class='sr-only'>Loading...</span>"+
           "</div>"+
           "</div>"
}

var getNoResultDiv = function()
{
    return "<div class = 'centre'>"+
        "<p>No Results Found</p>"+
    "</div>"
    
}

var convertToArticleBody = function(articleArray)
{
    let newsArticle = "<a>";
    for (let i = 0; i < articleArray.length; i++)
    {
        newsArticle += 
                    "<a target='_blank' class='article' href='"+articleArray[i].url+"'>"+
                    "<header>"+
                    "<span>"+articleArray[i].title+"</span>"+
                    "<time>"+articleArray[i].publishedAt+"</time>"+
                    "</header>"+
                    "<p>"+articleArray[i].description+"</p></a>";            
    }
    return newsArticle;
}

var modifyQuery = function(searchInput){
    return searchInput.replace(" ","+");
}



// Event Listners
document.getElementById("home").addEventListener("click", getIndianNews);
document.getElementById("search_btn").addEventListener("click", search);

document.getElementById("trending").addEventListener("click", function() {
    getSuggestedNews("Trending");
});

document.getElementById("worldNews").addEventListener("click", function(){
    getSuggestedNews("world news")
});
document.getElementById("covid").addEventListener("click", function(){
    getSuggestedNews("covid 19 coronavirus")
});
document.getElementById("technology").addEventListener("click", function(){
    getSuggestedNews("technology")
});


// Getting latest indian news on load
getIndianNews();