function capitalize(texte) {
    // ajout pour le tp06
    if (typeof texte !== "string") {
        let message;
        return message = "erreur, vous devez donner du texte";
    }
    texte = texte[0].toUpperCase() + texte.slice(1);
    return texte;
}

let texte = "hortensia";
let texteCapitalize = capitalize(texte);
console.log(texteCapitalize);

let texte2 = 666;
let texteCapitalize2 = capitalize(texte2);
console.log(texteCapitalize2);