
let teddyArticle = [];

async function findTeddy(param) {
   const result = await fetch("http://localhost:3000/api/teddies/" + param);
   return result.json();
};


function template(teddy) {

    teddyArticle = teddy;

    const container = document.getElementById('product');
        
    let img = container.querySelectorAll("img");
    img[0].src = teddy.imageUrl;
    
    let div = container.querySelectorAll("div");

    div[3].textContent = teddy.name;
    div[4].textContent = teddy.description;
    div[5].textContent = `${teddy.price / 100} €`;
    

    teddy.colors.forEach(color => {
        let html = `<a href="#"><div style="background-color: ${color}" class="card-colors">${color}</div></a>`;
        container.querySelector(".colors").insertAdjacentHTML("beforeend", html);
    })
}


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


findTeddy(id).then(response => {
    console.log(response);
    template(response);
})



document.querySelector('.addToCart').addEventListener('click', (event) => {

   /* //Fonction fenetre popUp Confirmation
    const popupConfirmation = () => {
        if(window.confirm(`${result.name} a bien été ajoutez au panier, Consulter le panier OK ou Revenir a l'accueil ANNULER`));

        else {

        }
    } */

    event.preventDefault();
    const target = event.target.parentElement.parentElement
    const quantite = Number(target.querySelector('input[type="number"]').value)
    
    

    // recuperer le tableau article
    const panier = localStorage.getItem('article');
    let articles = [];
     
    // si le tableau existe deja on parse
    if (panier) {
        articles = JSON.parse(panier);        
    }


    

    // Si il existe, on recupere l'element dans le tableau 
    const existe = articles.find(item => item._id === id);

    //Si il est existe, on additione les quantité
    if (existe) {
        existe.quantite = existe.quantite + quantite;
        
    } else { // si existe pas on rentre simplement l'article avec sa quantite selectioné
        teddyArticle.quantite = quantite;
        articles.push(teddyArticle);
    }


    localStorage.setItem('article', JSON.stringify(articles));
});