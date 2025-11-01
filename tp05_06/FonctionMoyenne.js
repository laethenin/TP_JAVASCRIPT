function moyenneTab(tab) {
    try {
        if (!Array.isArray(tab)) {
            throw 'le paramètre doit être un tableau';
        }
    }
    catch (e) {
        console.log(e);
    }


    if (tab.length === 0) {
        let message = 0;
        return message;
    }

    let somme = 0;
    let moyenne;
    try {
        for (let i = 0; i < tab.length; i++) {
            if (typeof tab[i] !== "number") {
                throw 'votre tableau ne doit contenir que des nombres';
            }
            somme = somme + tab[i];
        }
    }
    catch (e) {
        console.log (e);
    }
    moyenne = somme / tab.length;
    return moyenne;
}


let tab1 = [2, 4, 6, 8];
let moyenneTab1 = moyenneTab(tab1);
console.log(moyenneTab1);

let tab2 = [];
let moyenneTab2 = moyenneTab(tab2);
console.log(moyenneTab2);

let tab3 = ("tableau");
let moyenneTab3 = moyenneTab(tab3);
console.log(moyenneTab3);

let tab4 = ["bonjour", "salut", "hello"];
let moyenneTab4 = moyenneTab(tab4);
console.log(moyenneTab4);

// ajout pour tp06
// pour mes trois premiers tableaux, 
// j'obtiens "5" = moyenne du tableau qui ne contient que des nombres
// 0 qui correspond au message demandé en cas de tableau vide
// la phrase d'exception pour le paramètre n'est pas un tableau, puis le code se poursuit jusqu'au tableau suivant
// mais là j'ai la phrase d'exception, puis 0, puis la phrase d'exception, puis 0.
// je pense que le try/catch n'est pas bien placé
