function calcul (a, b) {
    let c = a*b+a+b;
    let message;
    // ajout pour tp06
        if (typeof a !== 'number' || typeof b !== 'number') {
            return message = "erreur, vous devez donner des nombres";
        }
    return c;
}

let a = 12;
let b = 5;

let operation = calcul (a, b);
console.log (operation);

let c = "hello";
let d = "toi";

let concatenation = calcul (c, d);
console.log (concatenation);