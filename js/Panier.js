

/* Recuperer les données sur le LocalStorage */

let teddyArticleJson = localStorage.getItem('article');
let teddyArticle = teddyArticleJson && JSON.parse(teddyArticleJson);


console.log(teddyArticle);




/* Afficher les données sur la page Web */

const container = document.querySelector('tbody');
let template = document.querySelector('#productrow');

for (const result of teddyArticle) {
    
    let clone = document.importNode(template.content, true);

    let td = clone.querySelectorAll("td");


    td[0].textContent = result.name;
    
    td[1].textContent = result.quantite;

    td[2].textContent = `${result.price / 100} €`;
    
    td[3].textContent = `${result.price * result.quantite / 100} €`;
    console.log(td[3]);

    td[4].textContent = `${result.price * result.quantite / 100} €`;
    

    container.appendChild(clone);
}



