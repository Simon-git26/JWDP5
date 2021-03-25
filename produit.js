
const fetchUse = fetch("http://localhost:3000/api/teddies/5be9c8541c9d440000665243");


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

        div[2].textContent = result.name;
        console.log(div[2]);

        div[3].textContent = result.description;
        console.log(div[3]);
        

        div[4].textContent = result.price;
        console.log(div[4]);

        div[5].textContent = result.colors;
        console.log(div[5]);
        
        
        container.appendChild(clone);
    }
}

template();