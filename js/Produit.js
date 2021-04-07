
let product_id = [];

// Recuperer l'id du produits qui à été selectionné
async function findTeddy(param) {
   const result = await fetch("http://localhost:3000/api/teddies/" + param);
   return result.json();
};

// Afficher les produits selectioné grace au template
function template(teddy) {

    product_id = teddy;

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


// Au click sur bouton ajout panier, exécutez ce code
function onClick(e) {

    e.preventDefault();
    const target = e.target.parentElement.parentElement
    const quantite = Number(target.querySelector('input[type="number"]').value)
    
    

    // Recuperer le tableau article
    const panier = localStorage.getItem('article');
    let articles = [];
     
    // Si le tableau existe deja on parse
    if (panier) {
        articles = JSON.parse(panier);        
    }


    // Si il existe, on recupere l'element dans le tableau 
    const existe = articles.find(item => item._id === id);

    //Si il est existe, on additione les quantité
    if (existe) {
        existe.quantite = existe.quantite + quantite;
        
    } else { // si existe pas on rentre simplement l'article avec sa quantite selectioné
        product_id.quantite = quantite;
        articles.push(product_id);
    }


    localStorage.setItem('article', JSON.stringify(articles));
};


const addToCart = document.querySelector('.addToCart');
addToCart.addEventListener('click', (event) => onClick(event));