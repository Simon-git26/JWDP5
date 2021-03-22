const fetchUse = async function () {
    let response = await fetch('http://localhost:3000/api/teddies');
    if (response.ok) {
        let data = await response.json();
        return data;
    } else {
        console.error('retour du serveur : ', response.status);
    }
}