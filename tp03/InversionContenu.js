let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// création d'un tableau vide
let arrayCopy = [];

// dans tableau vide, copie en ordre inverse du 1er tableau
for (let i = array.length - 1; i >= 0; i--){
    arrayCopy.push (array[i]);
}

console.log (array);
console.log (arrayCopy);




