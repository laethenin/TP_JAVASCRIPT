function calcul (a, b) {
    const c = a*b+a+b;
    // ajout pour tp06
        if (typeof a !== 'number' || typeof b !== 'number') {
            let message = "erreur, vous devez donner des nombres";
            return message;
        }
    return c;
}

const a = 12;
const b = 5;

let operation = calcul (a, b);
console.log (operation);

const c = "hello";
const d = "toi";

let concatenation = calcul (c, d);
console.log (concatenation);