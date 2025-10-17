function salutations (prenom) {
    let phrase = "Bonjour " + prenom ;
    let message;
    // ajout pour tp06
        if (typeof (prenom) !== 'string') {
            return message = "erreur, vous devez donner du texte";
        }
    return phrase; 
}

let prenom = "Laetitia";
let phrase = salutations (prenom);
console.log (phrase);

let prenom2 = 666;
let phrase2 = salutations (prenom2);
console.log (phrase2);
