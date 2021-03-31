
/* Peu etre mettre dans un add event listener sur bouton cart2 */

let teddyArticleJson = localStorage.getItem('article');
let teddyArticle = teddyArticleJson && JSON.parse(teddyArticleJson);

console.log(teddyArticleJson);
console.log(teddyArticle);




const popupConfirmation = () => {
    if (window.confirm(`${teddyArticle.name} a bien été ajouté au panier, Voulez-vous revenir à la page d'accueil ?`)) {
    window.location.href = "index.html";

    } else {
        
    }
};

if (teddyArticleJson) {
    console.log("ok");
    popupConfirmation();

} else {
    teddyArticleJson = [];
    teddyArticleJson.push(teddyArticle);
    localStorage.setItem('article', JSON.stringify(teddyArticle));
    console.log(teddyArticleJson);
}