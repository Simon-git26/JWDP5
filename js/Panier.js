

// Recuperer les données sur le LocalStorage

let teddyArticleJson = localStorage.getItem('article');
let teddyArticle = teddyArticleJson && JSON.parse(teddyArticleJson);


console.log(teddyArticle);




// Afficher les données sur la page Web

const container = document.querySelector('tbody');
let template = document.querySelector('#productrow');

for (const result of teddyArticle) {
    
    let clone = document.importNode(template.content, true);
    let td = clone.querySelectorAll("td");


    td[0].textContent = result.name;
    td[1].textContent = result.quantite;
    td[2].textContent = `${result.price / 100} €`;
    td[3].textContent = `${result.price * result.quantite / 100} €`;
    console.log(td[3]);

    container.appendChild(clone);
}




//------------------------------Données du Formulaire de commande--------------------------

//Selection du bouton "COMMANDER"
const btnEnvoyerFormulaire = document.querySelector("#btnenvoyer");


//addEventListener du bouton "COMMANDER"
btnEnvoyerFormulaire.addEventListener("click", (e) => {

    e.preventDefault();

    // Selection des données du Formulaire + Placement dans localStorage
    localStorage.setItem("prenom", document.querySelector("#prenom").value);
    localStorage.setItem("nom", document.querySelector("#nom").value);
    localStorage.setItem("mail", document.querySelector("#mail").value);
    localStorage.setItem("code", document.querySelector("#code").value);
    localStorage.setItem("ville", document.querySelector("#ville").value);
    localStorage.setItem("tel", document.querySelector("#tel").value);
    localStorage.setItem("adress", document.querySelector("#adress").value);
})



