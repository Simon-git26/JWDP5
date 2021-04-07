// Faire le lien avec l'API
const fetchUse = fetch("http://localhost:3000/api/teddies");


// afficher les données grace à fetch/template et cloner
async function template() {
    const json = await fetchUse;
    const data = await json.json();
    console.log(data);


    // Selectionné/cloner ou devra s'afficher les données
    const container = document.getElementById('products');
    let template = document.querySelector('template');

    for (const result of data) {
        let clone = document.importNode(template.content, true);
        
        //Positionné l'image au bon endroit
        let img = clone.querySelectorAll("img");
        img[0].src = result.imageUrl;

        clone.querySelector("a").href="produit.html?id=" + result._id;
        console.log(result._id);

        //Selectionné les Div ou seront affiché les données
        let div = clone.querySelectorAll("div");

        div[3].textContent = result.name;
        div[4].textContent = result.description;
        div[5].textContent = `${result.price / 100} €`;
        
        //Crée les container clone
        container.appendChild(clone);
    }
}

template();