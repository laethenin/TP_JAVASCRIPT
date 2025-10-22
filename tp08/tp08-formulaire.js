
let errorElement = document.getElementById ("error");
let messageElement = document.getElementById ("message");

// personnaliser la vérification et la réponse apportée
function verifier (event) {
    event.preventDefault ();

    let nom = document.getElementById ("nom").value.trim();
    let prenom = document.getElementById ("prenom").value.trim();
    let dateDeNaissance = document.getElementById ("dateDeNaissance").value.trim();

    // vide les éléments avant de refaire la fonction
    errorElement.innerHTML = "";
    messageElement.innerHTML = "";

    // vérifie si un des champs est vide
    if (nom === "" || prenom === "" || dateDeNaissance === "") {
        errorElement.innerHTML = "Veuillez remplir tous les champs.";
      } else {
        messageElement.innerHTML = "Inscription enregistrée avec succès !";
      }
}
