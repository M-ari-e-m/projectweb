document.addEventListener('DOMContentLoaded', function () {

  const bouton = document.getElementById('submit-quiz');
  if (!bouton) {
    console.error("Bouton #submit-quiz introuvable");
    return;
  }

  bouton.addEventListener('click', function () {

    // Les bonnes réponses (q1 à q15)
    const bonnes = ['b','b','c','c','a','b','b','c','c','b','a','b','a','b','c'];

    let score = 0;
    let htmlCorrections = '<h3>Réponses correctes :</h3>';

    for (let i = 1; i <= 15; i++) {
      const choix = document.querySelector(`input[name="q${i}"]:checked`);
      const bonne = bonnes[i-1];

      if (choix && choix.value === bonne) {
        score++;
      }

      // Ajouter la correction pour chaque question
      htmlCorrections += `
        <div class="correction-item">
          <strong>Question ${i} :</strong> 
          La bonne réponse est <span style="color:#27ae60; font-weight:bold;">${bonne.toUpperCase()}</span>
        </div>`;
    }

    const total = 15;
    const pourcentage = Math.round((score / total) * 100);

    document.getElementById('result-score').innerHTML = 
      `Ton score : ${score} / ${total} (${pourcentage}%)`;

    let msg = "";
    if (score >= 13) msg = "Excellent ! Tu es prêt(e) pour la suite ! 🌟";
    else if (score >= 11) msg = "Très bon résultat ! Bravo ! 🎉";
    else if (score >= 9) msg = "Bien joué ! Continue comme ça 💪";
    else if (score >= 7) msg = "Pas mal ! Encore un peu d'entraînement 😉";
    else if (score >= 5) msg = "Bon début ! Tu progresses 🚀";
    else msg = "Courage ! Relis les bases et réessaie 💻";

    document.getElementById('result-message').innerHTML = msg;

    // Afficher les corrections
    document.getElementById('corrections-list').innerHTML = htmlCorrections;

    // Montrer la zone résultat
    document.getElementById('result-container').style.display = 'block';

    // Désactiver le bouton
    bouton.disabled = true;
    bouton.style.opacity = '0.6';
    bouton.innerText = "Quiz terminé";
  });
});