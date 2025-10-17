function verifTab (tab) {
    // sinon cela renvoie true même si le tableau est vide
    if (tab.length === 0) {
        return false;
    }
    let reponse ;
    for (let i=0; i < tab.length; i++) {
        if (typeof tab[i] === 'number'){ 
           reponse = true; 
        }
        else {
            reponse = "votre tableau ne doit contenir que des nombres";
        }
    }
    return reponse;
    
}

let tab1 = [1, 2, 3, 4, 5, 6];
let verif1 = verifTab (tab1);
console.log (verif1);

let tab2 = [1, 3, "cinq", 7, "neuf"];
let verif2 = verifTab (tab2);
console.log (verif2);

let tab3 = [];
let verif3 = verifTab (tab3);
console.log (verif3);
