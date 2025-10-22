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
    let corpsTableau = document.querySelector("tbody");
    corpsTableau.innerHTML = "";

    for (i=0; i < data.length; i++) {
        let nomPays = data[i].name;
        let populationPays = data[i].population;
        let regionPays = data[i].region;

        let ligne = document.createElement ("tr");
        let caseNom = document.createElement ("td");
        let casePopulation = document.createElement ("td");
        let caseRegion = document.createElement ("td");

        caseNom.textContent = nomPays;
        casePopulation.textContent = populationPays;
        caseRegion.textContent = regionPays;

        ligne.appendChild (caseNom);
        ligne.appendChild (casePopulation);
        ligne.appendChild (caseRegion);

        corpsTableau.appendChild (ligne);     
    }
}
    