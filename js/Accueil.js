


const fetchUse = fetch("http://localhost:3000/api/teddies");



async function template() {
    const json = await fetchUse;
    const data = await json.json();
    console.log(data);



    const container = document.getElementById('products');
    let template = document.querySelector('template');

    for (const result of data) {
        let clone = document.importNode(template.content, true);
        
        let img = clone.querySelectorAll("img");
        img[0].src = result.imageUrl;

        clone.querySelector("a").href="produit.html?id=" + result._id;
        console.log(result._id);

        
        
        let div = clone.querySelectorAll("div");

        div[3].textContent = result.name;
    
        div[4].textContent = result.description;
    

        div[5].textContent = `${result.price / 100} €`;
        
        
        container.appendChild(clone);
    }
}

template();