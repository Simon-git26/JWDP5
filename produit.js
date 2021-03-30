
async function findTeddy(param) {
   const result = await fetch("http://localhost:3000/api/teddies/" + param);
   return result.json();
};


function template(teddy) {

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




/* Mettre les infos dans local */

cart.onclick = () => {
    localStorage.setItem("article", urlParams);
} 
