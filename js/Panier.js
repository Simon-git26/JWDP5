

// Recuperer les données sur le LocalStorage

let product_idJson = localStorage.getItem('article');
let product_id = product_idJson && JSON.parse(product_idJson);


console.log(product_id);




// Afficher les données sur la page Web

const container = document.querySelector('tbody');
let template = document.querySelector('#productrow');
let prixTotal = 0;



for (const result of product_id) {
    
    let clone = document.importNode(template.content, true);
    let td = clone.querySelectorAll("td");

    // Prnedre le prix total d'un article et additioner le prix total de tous les articles present 
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






//------------------------------Données du Formulaire de commande--------------------------

//Selection du bouton "COMMANDER"
const btnEnvoyerFormulaire = document.querySelector("#btnenvoyer");


//addEventListener du bouton "COMMANDER"
btnEnvoyerFormulaire.addEventListener("click", (e) => {

    e.preventDefault();

    // Selection des données du Formulaire + Placement dans localStorage
    localStorage.setItem("firstName", document.querySelector("#prenom").value);
    localStorage.setItem("lastName", document.querySelector("#nom").value);
    localStorage.setItem("email", document.querySelector("#mail").value);
    localStorage.setItem("city", document.querySelector("#ville").value);
    localStorage.setItem("adress", document.querySelector("#adress").value);

    //Mettre les valeurs du Formulaire dans un objet
    const contact = {
    firstName: localStorage.getItem("firstName"),
    lastName: localStorage.getItem("lastName"),
    email: localStorage.getItem("email"),
    city: localStorage.getItem("city"),
    adress: localStorage.getItem("adress")
    }


    //Mettre les valeurs Formulaire + les produits selectionnées dans un objet a envoyer vers le serveur
    const valeurEnvoyer = {
        product_id,
        contact
    }
    console.log("valeurEnvoyer");
    console.log(valeurEnvoyer);


    //Envoi de l'objet valeurEnvoyer vers le serveur + transformation en chaine de caractère
    localStorage.setItem("article,formulaire", JSON.stringify(valeurEnvoyer));


    // Redirection vers la page Confirmation de Commande
    window.location.href="confirme.html";


    // Methode Post
    (async () => {
        const rawResponse = await fetch("http://localhost:3000/api/teddies", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({valeurEnvoyer})
        });
        const content = await rawResponse.json();
      
        console.log(content);
    })();
    
     console.log(objetContact);
})








