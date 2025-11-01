fetch('https://digicode.cleverapps.io/utilisateurs')
    .then(function (res) {
        return res.json();
    }
    )
    .then(function (json) {
        console.log(json);
        initialiserDonnees(json);
    }
    );

function initialiserDonnees(data) {
    let corpsTableau = document.querySelector("tbody");
    corpsTableau.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        let infos = data[i];

        let ligne = document.createElement("tr");
        let caseIdentifiant = document.createElement("td");
        let caseNom = document.createElement("td");
        let casePrenom = document.createElement("td");
        let caseDateDeNaissance = document.createElement("td");
        let caseLieuDeNaissance = document.createElement("td");
        let caseAdresse = document.createElement("td");

        caseIdentifiant.textContent = infos.id;
        caseNom.textContent = infos.nom;
        casePrenom.textContent = infos.prenom;
        caseDateDeNaissance.textContent = infos.dateNaissance;
        caseLieuDeNaissance.textContent = infos.lieuNaissance;
        caseAdresse.textContent = `${infos.numeroRue} ${infos.libelleRue}, ${infos.codePostal}, ${infos.ville}`;

        ligne.appendChild(caseIdentifiant);
        ligne.appendChild(caseNom);
        ligne.appendChild(casePrenom);
        ligne.appendChild(caseDateDeNaissance);
        ligne.appendChild(caseLieuDeNaissance);
        ligne.appendChild(caseAdresse);

        corpsTableau.appendChild(ligne);
    }
}