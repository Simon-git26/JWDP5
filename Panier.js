
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



/* Recuperer et afficher les données sur la page Web */


const container = document.getElementById('products');
let template = document.querySelector('template');

for (const result of teddyArticle) {
    let clone = document.importNode(template.content, true);
    
    let img = clone.querySelectorAll("img");
    img[0].src = result.imageUrl;
    console.log(img[0]);


    
    let div = clone.querySelectorAll("div");

    div[3].textContent = result.name;
    console.log(div[3]);


    div[5].textContent = `${result.price / 100} €`;
    console.log(div[5]);
    
    
    container.appendChild(clone);
}


