let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// affichage des valeurs du tableau dans l'ordre
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// affichage des valeurs du tableau dans l'ordre inverse
for (let i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
}

// duplication du tableau
let array2 = array.slice();
console.log(array2);

