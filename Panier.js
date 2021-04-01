
let teddyArticleJson = localStorage.getItem('article');
let teddyArticle = teddyArticleJson && JSON.parse(teddyArticleJson);


console.log(teddyArticle);




const popupConfirmation = () => {
    if (window.confirm(`${teddyArticle.name} a bien été ajouté au panier, Voulez-vous revenir à la page d'accueil ?`)) {
    window.location.href = "index.html";

    }
};

if (teddyArticleJson) {
    console.log("ok");
    popupConfirmation();

}

