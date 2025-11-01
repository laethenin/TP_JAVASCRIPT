function capitalize(texte) {
    // ajout pour le tp06
    if (typeof texte !== "string") {
        let message = "erreur, vous devez donner du texte";
        return message;
    }

    let texteCapitalize= texte[0].toUpperCase() + texte.slice(1);
    return texteCapitalize;
}

let texte1 = "hortensia";
let texteCapitalize1 = capitalize(texte1);
console.log(texteCapitalize1);

let texte2 = 666;
let texteCapitalize2 = capitalize(texte2);
console.log(texteCapitalize2);