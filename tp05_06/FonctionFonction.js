function valeur (n) {
    return function multiplication (nb) {
        return resultat = n * nb;
    }
}

const n1 = 6;
const n2 = 12
/// on appelle la fonction valeur qui se souviendra de n et multipliera le second nombre avec cette valeur///
let operation1 = valeur (n1);
let operation2 = valeur (n2);
console.log (operation1);
console.log (operation2);
// renvoie à chaque fois [Function : multiplication] car en attente d'un second nombre//

const nb = 5;
// on multiplie 5 avec chacune des deux valeurs passées en amont//
let resultat1 = operation1 (nb);
let resultat2 = operation2 (nb);
console.log (resultat1);
console.log (resultat2);






