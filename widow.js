const questions = [
    {
      num: 1,
      question: "Question 1",
      option: ["Option 1", "Option 2", "Option 3", "Option 4"],
      reponse: "Option 1",
      commentaire: "Commentaire pour la question 1 : Bravo, vous avez trouvé la bonne réponse !",
    },
    // ... Ajoutez les autres questions avec leurs commentaires
  ];

  
  function showQuestions(index) {
    const que_texte = document.querySelector(".que_texte");
    const commentaire_texte = document.querySelector(".commentaire_texte");
  
    // Reste du code inchangé...
  
    // Lorsque l'utilisateur sélectionne la bonne réponse, afficher le commentaire correspondant
    if (questions[index].reponse === userAns) {
      commentaire_texte.textContent = questions[index].commentaire;
    } else {
      commentaire_texte.textContent = "Désolé, votre réponse est incorrecte.";
    }
  
    // Reste du code inchangé...
  }


  function optionSelected(reponse) {
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = reponse.textContent;
    let correctAns = questions[que_count].reponse;
    const allOptions = liste_option.children.length;
  
    // Reste du code inchangé...
  
    // Afficher le commentaire associé à la question après avoir vérifié la réponse
    if (userAns === correctAns) {
      commentaire_texte.textContent = questions[que_count].commentaire;
    } else {
      commentaire_texte.textContent = "Désolé, votre réponse est incorrecte.";
    }
  
    // Reste du code inchangé...
  }
  
  