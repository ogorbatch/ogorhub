// enter new articles at here at bottom of list
const newsArticles = [
    {
        title: "Ogorbatch struck down!",
        content: "<p>The ogorbatch google account was recently just struck down by the google gods. Will the appeal be accepted, or will the the account succumb to the alleged violation of google policies? - We'll keep you updated.</p><hr>",
        next: "Find out next time: why do ogorshorts get so many dislikes?",
        date: "16/01/2026",
        image: "image1.png"
    },
    {
        title: "Ogorback?",
        content: "<p>In an expected turn of events, the ogorbatch google account, and youtube channel have returned from the depths of hell*. Ogormembers report seeing the google email and being <q>so hyped!</q> for the accounts long awaited return - tragically  it's so NOT ogorback, as they soon were to discover, they were locked out of the account because of <q>too many verification attempts</q>. What spineless traitor could be responsible for this? - we shall never know.</p><p>  This cruel punishment is not one to be taken lightly. and as a response arrived in the mail, delivering the shocking news that it would be a full 168 hours before peace will be returned - the question must be asked, how long can ogorone ogorendure without ogooorgle and ogortube?</p><hr>",
        next: "Find out next time: will ogorbatch be the first to truely solve dark matter?",
        date: "18/01/2026",
        image: "ogornews18-01.jpg"
    },
]

let newsIndex = newsArticles.length - 1;

function displayNews() {
    const article = newsArticles[newsIndex];
    document.getElementById('news-title').textContent = article.title;
    document.getElementById('news-content').innerHTML = article.content;
    document.getElementById('news-next').textContent = article.next;
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