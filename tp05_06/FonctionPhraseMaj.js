function capitalizeChaqueMot(texte) {
    // ajout pour le tp06
    if (typeof texte !== "string") {
        let message = "erreur, vous devez donner du texte";
        return message;
    }

    /// séparer la phrase en mots//
    let mots = texte.split(" ");
    /// créer un tableau pour regrouper ces mots//
    let motsCapitalize = [];
    for (let mot of mots){
        /// chaque mot non vide a sa première lettre mise en majuscule//
        if (mot.length > 0){
            let motCapitalize = mot[0].toUpperCase() + mot.slice(1);
            /// on met chaque mot dans le tableau//
            motsCapitalize.push(motCapitalize);
        }
    }
    // on retourne le tableau où les mots sont joints par des espaces//
    return motsCapitalize.join(" ");
}

let phrase = "ce matin il ne fait pas beau";
let phraseCapitalize = capitalizeChaqueMot(phrase);
console.log(phraseCapitalize);

let phrase2 = 666;
let phraseCapitalize2 = capitalizeChaqueMot(phrase2);
console.log(phraseCapitalize2);
