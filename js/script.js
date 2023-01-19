//Fonction utilisée pour rafraichir l'heure actuelle
function enableDateTimeRefresh() {

    //Interface de rafraichissement en ms
    let t = 500;

    setInterval(displayDateTime, t);
}

function displayDateTime() {
    //Création d'une nouvelle instance d'un objet date
    let date = new Date()

    //Variables pour les différentes parties d'une date
    let annee = date.getFullYear();
    let mois = date.getMonth();
    let jour = date.getDate();
    let heure = date.getHours();
    let minute = date.getMinutes();
    let seconde = date.getSeconds();

    //Variable pour le nom composé
    let temps = "Le " + jour + "." + mois + "." + annee + " à " + heure + " heures " + minute + " minutes " + seconde + " secondes"

    //Changement de la valeur de l'élément ayant comme id 'clock'
    document.getElementById('clock').innerHTML = temps;
}
