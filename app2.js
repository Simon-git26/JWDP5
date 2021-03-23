


const fetchUse = fetch("http://localhost:3000/api/teddies");



async function template() {
    const json = await fetchUse;
    const data = await json.json();
    console.log(data);



    const container = document.getElementById('products');
    let template = document.querySelector('template');

    for (const result of data) {
        let clone = document.importNode(template.content, true);
        let div = clone.querySelectorAll("div");
        
        let img = clone.querySelectorAll("img");
        img[0].src = result.imageUrl;
        
        div[3].textContent = result.name;

        div[4].textContent = result.description;

        div[5].textContent = result.price;
        
        
        
        container.appendChild(clone);
   
    }
}

template();