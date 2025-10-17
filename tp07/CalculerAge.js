function calculerAge(dateNaissance, dateJour) {
    let ageAnnees = (dateJour.getFullYear() - dateNaissance.getFullYear());
    let ageMois = (dateJour.getMonth() - dateNaissance.getMonth());
    return {
        ageAnnees,
        ageMois
    } 
}

let dateNaissance = new Date(1986, 3, 30);
let dateJour = new Date();

let age = calculerAge (dateNaissance, dateJour);

console.log("Votre âge est de " + age.ageAnnees + " ans et " + age.ageMois + " mois.");

