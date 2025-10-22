// choix du fetch pour appeler les données
fetch('https://restcountries.com/v2/all?fields=name,languages,region,flag,population,currencies')
        .then(function (res) {
            return res.json();
        }
        )
        .then(function (json) {
            console.log(json);
            initialiserDonnees (json);
        }
        );
        
function initialiserDonnees(data) {
    let infosPays ="";
    for (i=0; i < data.length; i++) {
        let nomPays = data[i].name;
        let populationPays = data[i].population;
        let regionPays = data[i].region;

        infosPays += `Nom : ${nomPays} || Population : ${populationPays} habitants || Région : ${regionPays}<br>`;

        let zoneAffichage = document.querySelector("#zoneAffichage");
        zoneAffichage.innerHTML = infosPays; 
    }
}
    