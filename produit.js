
async function findTeddy(param) {
   const result = await fetch("http://localhost:3000/api/teddies/" + param);
   return result.json();
};


function template(teddy) {

    const container = document.getElementById('products');
    let template = document.querySelector('template');


    let clone = document.importNode(template.content, true);
        
    let img = clone.querySelectorAll("img");
    img[0].src = teddy.imageUrl;

    
    let div = clone.querySelectorAll("div");

    div[3].textContent = teddy.name;
    div[4].textContent = teddy.description;    
    div[5].textContent = teddy.price;
    div[6].textContent = teddy.colors;


   
    
    
    container.appendChild(clone);
}


const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get('id');



findTeddy(id).then(response => {
    console.log(response);
    template(response);
})
