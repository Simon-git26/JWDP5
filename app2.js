


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
        console.log(img[0]);
        
        let div = clone.querySelectorAll("div");

        div[3].h3 = result.name;
        console.log(div[3]);

        div[4].p = result.description;
        console.log(div[4]);

        div[5].button = result.price;
        console.log(div[5]);
        
        
        container.appendChild(clone);
    }
}

template();