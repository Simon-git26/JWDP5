
// Recuperer les données sur le LocalStorage
let productsJson = localStorage.getItem('article');
let products = productsJson && JSON.parse(productsJson);

console.log(products);


// Continuez le code si le tableaux Products existe sinon alert
if (!products || products.length === 0) {
    window.alert("Veuillez sélèctionnez un produit !");
    window.location.href="index.html";
}

function onPanier() {
    // Afficher les données sur la page Web Si les conditions du if sont remplies
    const container = document.querySelector('tbody');
    let template = document.querySelector('#productrow');
    let prixTotal = 0;


    for (const result of products) {
        
        let clone = document.importNode(template.content, true);
        let td = clone.querySelectorAll("td");

        // Prendre le prix total d'un article et additioner le prix total de tous les articles present 
        prixTotal = result.price * result.quantite / 100 + prixTotal;

        td[0].textContent = result.name;
        td[1].textContent = result.quantite;
        td[2].textContent = `${result.price / 100} €`;
        td[3].textContent = `${result.price * result.quantite / 100} €`;

        container.appendChild(clone);
    }

    let prixTotalDiv = document.querySelector(".prixtotal");
    prixTotalDiv.textContent = `${prixTotal} €`;


    //Placement de ma variable prixTotal dans le localStorage
    localStorage.setItem("prixTotal", JSON.stringify(prixTotal));
}

onPanier();


//Bouton Vider le Panier
let btnSupp = document.querySelector('#btnsupp');

btnSupp.addEventListener("click", event => {
    localStorage.removeItem("article");
    window.location.href="index.html";
})



//------------------------------Données du Formulaire de commande--------------------------
async function onClickButton(e) {

    e.preventDefault();

    //Mettre les valeurs du Formulaire dans un objet
    const contact = {
    firstName: document.querySelector("#prenom").value,
    lastName: document.querySelector("#nom").value,
    email: document.querySelector("#mail").value,
    city: document.querySelector("#ville").value,
    address: document.querySelector("#address").value
    }

     // Un Tableau contenant les _id de chaque produits 
     const idProducts = products.map( product => product._id );

    //Mettre les valeurs Formulaire + les produits selectionnées dans un objet a envoyer vers le serveur
    const valeurEnvoyer = {
        products:  idProducts,
        contact : contact
    }
    console.log("valeurEnvoyer");
    console.log(valeurEnvoyer);

    
    // Methode Post pour generer un code de commande
    const rawResponse = await fetch("http://localhost:3000/api/teddies/order", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(valeurEnvoyer)
    });
    const content = await rawResponse.json();

    localStorage.setItem("orderId", content.orderId);
      
    console.log(content);
    console.log(valeurEnvoyer);

    // Redirection vers la page Confirmation de Commande
    window.location.href="confirme.html";
};


//Selection du bouton "COMMANDER"
const btnEnvoyerFormulaire = document.querySelector("#btnenvoyer");

//addEventListener du bouton "COMMANDER"
btnEnvoyerFormulaire.addEventListener("click", (event) => onClickButton(event)); 
