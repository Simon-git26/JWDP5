


const fetchUse = fetch("http://localhost:3000/api/teddies");

fetchUse.then((response) => {

    const data = response.json();

    data.then((produits) => {
        console.log(produits);
    });
    }).catch((erreur) => console.log(erreur)); 





/* fetch("http://localhost:3000/api/teddies")
fetchUse.then((response) => console.log(response)).catch((erreur) => console.log(erreur));
    .then((response) => response.json())
    .then((json) => console.log(json));
    
const reponseData = response.json(); */




/* const fetchUse = async function (request) {
    let response = await fetch('http://localhost:3000/api/teddies');
    if (response.ok) {
        let data = await response.json();
        return data;
    } else {
        console.error('retour du serveur : ', response.status);
    }
}

let searchValue;


const card = document.getElementsByClassName('card');
card.addEventListener('card', updateValue);


function updateValue(e) {
    searchValue = e.target.value;
} */