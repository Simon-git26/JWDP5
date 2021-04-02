

/* Recuperer les données sur le LocalStorage */

let teddyArticleJson = localStorage.getItem('article');
let teddyArticle = teddyArticleJson && JSON.parse(teddyArticleJson);


console.log(teddyArticle);




/* Afficher les données sur la page Web */

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
    
    container.appendChild(clone);
}



/* const container = document.getElementById('products');
let template = document.querySelector('template');

for (const result of teddyArticle) {
    let clone = document.importNode(template.content, true);
    
    clone.querySelector('td:nth-child(1)').textContent = result.name

    clone.querySelector('td:nth-child(2)').textContent = 1
    clone.querySelector('td:nth-child(3)').textContent = `${result.price / 100} €`;
    clone.querySelector('td:nth-child(4)').textContent = `${result.price * result.quantite / 100} €`;

    container.appendChild(clone);
} */