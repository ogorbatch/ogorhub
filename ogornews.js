// enter new articles at here at bottom of list
const newsArticles = [
    {
        title: "Example 1",
        content: "this is an example of an old article! we can get rid of it once a new article drops",
        date: "15/01/2026",
        image: "ogorimage.gif"
    },
    {
        title: "Ogorbatch struck down!",
        content: "<p>The ogorbatch google account was recently just struck down by the google gods. Will the appeal be accepted, or will the the account succumb to the alleged violation of google policies? - We'll keep you updated.</p><hr><p>Find out next time: why do ogorshorts get so many dislikes?</p>",
        date: "16/01/2026",
        image: "image1.png"
    },
]

let newsIndex = newsArticles.length - 1;

function displayNews() {
    const article = newsArticles[newsIndex];
    document.getElementById('news-title').textContent = article.title;
    document.getElementById('news-content').innerHTML = article.content;
    document.getElementById('news-date').textContent = article.date;
    document.getElementById('news-img').src = article.image;

    document.getElementById('back-btn').disabled = newsIndex === 0;
    document.getElementById('next-btn').disabled = newsIndex === newsArticles.length - 1;
}

function showPrevious() {
    if (newsIndex > 0) {
        newsIndex--;
        displayNews();
    }
}

function showNext() {
    if (newsIndex < newsArticles.length -1) {
        newsIndex++;
        displayNews();
    }
}

displayNews();