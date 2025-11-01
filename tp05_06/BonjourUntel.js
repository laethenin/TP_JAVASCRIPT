function salutations (prenom) {
    let phrase = "Bonjour " + prenom ;
    // ajout pour tp06
        if (typeof (prenom) !== 'string') {
            let message = "erreur, vous devez donner du texte";
            return message;
        }
    return phrase; 
}

const prenom = "Laetitia";
const salut1 = salutations (prenom);
console.log (salut1);

const prenom2 = 666;
const salut2 = salutations (prenom2);
console.log (salut2);
