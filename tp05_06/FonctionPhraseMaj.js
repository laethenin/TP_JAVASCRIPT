function capitalize (texte) {
    // ajout pour tp06
    if (typeof texte !== "string") {
        let message;
        return message = "erreur, vous devez donner du texte";
    }
    texte = texte[0].toUpperCase () + texte.slice(1);
    return texte;
}

let texteCapitalize = capitalize ("hortensia");
console.log (texteCapitalize);
