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
    let mois = date.getMonth() + 1;
    let jour = date.getDate();
    let heure = date.getHours();
    let minute = date.getMinutes();
    let seconde = date.getSeconds();

    //Variable pour le nom composé
    let temps = "Le " + jour + "." + mois + "." + annee + " à " + heure + " heures " + minute + " minutes " + seconde + " secondes"

    //Changement de la valeur de l'élément ayant comme id 'clock'
    document.getElementById('clock').innerHTML = temps;
}

function setDayMessage() {

    //Variables requises pour le message du jour
    var tableauMessages = ["Belle journée ?", "Jouer c'est bien mais pas bien...", "On m'appelle l'Ovni", "Peut-être chez votre grand-mère", "Quelque part perdu dans le Net...", "Aucune idée", "L'huile de baleine, c'est mal", "Quand vous voulez cracher par terre, il vous faut une échelle", "Le monde est rempli d’injustices…", "Nooooooobody is theeeeere ?", "L’eau c’est juste une création des extra-terrestres pour nous contrôler !!", "Qui aime les RP ?", "Si cela ne vous pose pas de problème, je vous prie de ne pas essayer de me DDOS, merci pour votre compréhension", "J'aime les chats", "Derrière toi !!", "John Cena est quelquepart dans ce monde...", "S'il vous plait, faites en sorte de ne pas avoir de mise en forme isolées dans votre texte. Vérifier également les paragraphes non-significatifs !", "cmd.exe failed with args", "Est-ce que ce site Web est sûr ?", "Combien d'étoiles y a-t-il dans la galaxie ?", "La terre est plate, c'est pour cela que le soleil n'est qu'une illusion !", "Je sais...", "La gigachadisation a atteint le pays du canard en -3 av Musclor", "Musclor s'est un jour battu avec le big bang", "La dernière personne qui s'est battue avec Musclor s'est désintégrée", "Quand Musclor fait du tourniquet, c'est la terre qui tourne", " (+18) Une fois, Musclor a rencontré la vierge Marie, depuis on l'appelle Marie", "Depuis que Musclor a appris le latin", "c'est une langue morte..."];

    //Prise d'un élément aléatoire dans le tableau
    var messageDay = tableauMessages[(randomInRange(0, tableauMessages.length))];

    //Changement de la valeur de l'élément ayant comme id 'clock'
    document.getElementById('dayMessage').innerHTML = messageDay;
}

//Fonction pour générer un nombre aléatoire dans un range de nombre
function randomInRange(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}
