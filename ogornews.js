// enter new articles at here at bottom of list
const newsArticles = [
    {
        title: "Ogorbatch struck down!",
        content: "<p>The ogorbatch google account was recently just struck down by the google gods. Will the appeal be accepted, or will the the account succumb to the alleged violation of google policies? - We'll keep you updated.</p><hr>",
        next: "Find out next time: why do ogorshorts get so many dislikes?",
        date: "16/01/2026",
        image: "images/image1.png"
    },
    {
        title: "Ogorback?",
        content: "<p>In an expected turn of events, the ogorbatch google account, and youtube channel have returned from the depths of hell*. Ogormembers report seeing the google email and being <q>so hyped!</q> for the accounts long awaited return - tragically  it's so NOT ogorback, as they soon were to discover, they were locked out of the account because of <q>too many verification attempts</q>. What spineless traitor could be responsible for this? - we shall never know.</p><p>  This cruel punishment is not one to be taken lightly. and as a response arrived in the mail, delivering the shocking news that it would be a full 168 hours before peace will be returned - the question must be asked, how long can ogorone ogorendure without ogooorgle and ogortube?</p><hr>",
        next: "Find out next time - is ogorbatch avoiding the dislike situation?",
        date: "18/01/2026",
        image: "images/ogornews18-01.jpg"
    },
    {
        title: "Why do ogorshorts get so many dislikes?",
        content: "<p>With the google gods still chaining ogorbatch down from success, evidence of this topic is slim. Provided by previous ogorbatch discussions, an image was dug up that depicts the second ever ogorchannel video, and it's statistics. With a 64.7% like/dislike ratio, we can see that this is a severely underperfoming video, as the average would range anywhere from 80%-95%. Now what affected the audience's reaction to the masterpiece at hand? Is it merely not to the target audience's liking, or was the video shockingly not a good video?</p><p> To dissect what the viewers were thinking would require a lot of conjecture because there is a lack of evidence to reinforce any point such as <q>comments.</q> Some possible unbiased reasons behind the negative response to the video include:<ul><li>Not enough braincells since they are most likely OW2 players</li><li>Rotted too much to see the beauty</li><li>The video actually was bad? - unlikely</li><li>Accidentally misclicked the like button from being glued to the video - likely</li></ul>",
        next: "Find out next time: will ogorbatch be the first to truely solve dark matter?",
        date: "20/01/2026",
        image: "images/ogornotlikes.png"
    },
        {
        title: "Will ogorbatch be the first to solve dark matter?",
        content: "<p>It's the question everyone is wondering, so let's find out. <q>nah idr feel like it rn</q> - ogooordsy. well there's your answer, a disappointing, and frankly surprising answer, but what can be done.</p>",
        next: "Find out next time: How is ogorbatch dealing with the ogor-deprivation",
        date: "21/01/2026",
        image: "images/ogorgenius.jpg"
    },
    {
        title: "How is ogorbatch dealing with the ogor-deprivation?",
        content: "<p>a question that has being plaguing the ogorcommunity. how is ogorbatch dealing with the ogor-deprivation? Ogorunimate responded <q>ive been doing some chemistry</q> (see figure a). If i had to be honest, I don't understand what this means in the slightest. Ogoroni Macaroni responded <q>well before I started uploading to tiktok and instagram, I was having pretty bad withdrawals from not being able to produce goated content for the ogorchannel. I was itching all day and couldnt sleep all night</q>. clearly all of ogorbatch is strugling pretty hard (real hard) with the ogor deprivartion. ogooordsy says <q>fuck im hard</q> so as when the ogortube and ogorgoogle is returned is an unkown, and ogorbatch resorts to making a second channel for ogoroblox content. the question must be asked how long would it be before peace is returned? :(</p>",
        next: "Find out next time: How is ogorbatch dealing with the ogor-deprivation",
        date: "25/01/2026",
        image: "images/ogooner.png"
    },
        {
        title: "How is ogorbatch dealing with the ogor-deprivation?",
        content: "<p>One may think that banning the ogorbatch google account may be devasting enough, but one would be wrong. One may think that locking the phone verification to said recently recovered account would be the most devasting, but one would be wrong. Because the goog sees no limits, and this time one will discover that the new ogorback youtube channel has been cursed by the goog once more. As seen in the photo, the ogorback youtube account has been robbed of all its deserved views. Youtube is trying to hide ogorbatch from the world and we wont ogorstand for it! #downwiththegoog</p>",
        next: "Find out next time: when will ogorbatch ogorretire?",
        date: "29/01/2026",
        image: "images/ogorviews.png"
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
