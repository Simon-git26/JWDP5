
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



document.querySelector('.addToCart').addEventListener('click', () => {

    const articleStorage = localStorage.getItem('article');
    let articles = [];
     
    if (articleStorage) {
        articles = JSON.parse(articleStorage);
    }

    articles.push(teddyArticle);
    
    localStorage.setItem('article', JSON.stringify(articles));
});



/* document.querySelector('.addToCart').addEventListener('click', (event) => {
    event.preventDefault()
    const target = event.target.parentElement.parentElement
    const quantite = Number(target.querySelector('input[type="number"]').value)
    const cart = localStorage.getItem('article') ? JSON.parse(localStorage.getItem('article')) : [];
    const existe = cart.filter((item) => item._id === id)[0];
    

    if (existe) {
        let index = cart.indexOf(existe)
        let article = cart.splice(index, 1)[0];
        existe.quantite += quantite
        cart.push(existe)
    } else {
        teddyArticle.quantite = quantite
        cart.push(teddyArticle)
    }

    cart.push(existe);
    localStorage.setItem('article', JSON.stringify(cart));
}); */