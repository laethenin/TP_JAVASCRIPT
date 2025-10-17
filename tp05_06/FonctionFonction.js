function valeur (n) {
    return function multiplication (nb) {
        let resultat = n*nb;
        return resultat;
    }
}

let n1 = 6;
let n2 = 12
let operation1 = valeur (n1);
let operation2 = valeur (n2);
console.log (operation1);
console.log (operation2);
// renvoie à chaque fois [Function : multiplication]

let nb = 5;
let resultat1 = operation1 (nb);
let resultat2 = operation2 (nb);
console.log (resultat1);
console.log (resultat2);






