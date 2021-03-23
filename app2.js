


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
        div[0].textContent = result.name;
        

        /* div[3].textContent = result.description; */ 
        let img = clone.querySelectorAll("img");
        console.log(img);

        if (img[0]) {
            img[0].src = result.imageUrl;
        } else {
            console.log('image non trouvé');
        }
        

        container.appendChild(clone);

        
        
    }
}

template();