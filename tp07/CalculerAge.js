function calculerAge(dateNaissance, dateRef) {
    let ageAnnees = (dateAujourdhui.getFullYear() - dateAnniversaire.getFullYear());
    let ageMois = (dateAujourdhui.getMonth() - dateAnniversaire.getMonth());
    return {
        ageAnnees,
        ageMois
    } 
}

let dateAnniversaire = new Date(1986, 3, 30);
let dateAujourdhui = new Date();

let age = calculerAge (dateAnniversaire, dateAujourdhui);

console.log("Votre âge est de " + ageAnnees + " ans et " + ageMois + " mois.");
