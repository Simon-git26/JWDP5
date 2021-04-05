


//Recuperer la valeur de prixTotal dans le localStorage et la Paser
prixTotalJSON = localStorage.getItem("prixTotal");
let prixTotal = prixTotalJSON && JSON.parse(prixTotalJSON);


//Selectionné la div coresspondante 
let prixLocalDiv = document.querySelector(".prixlocal");
 
// Afficher la valeur de prixTotal du localStorage
prixLocalDiv.textContent =`${prixTotal} €`;






// Selection du bouton retour accueil
const btnReturn = document.querySelector("#returnaccueil");

//addEventListener du bouton "COMMANDER"
btnReturn.addEventListener("click", (e) => {
    // Redirection vers la page Confirmation de Commande
    window.location.href="index.html";
})