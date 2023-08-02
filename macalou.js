// je sélectionne tous les éléments avec querySelector
const demarre_btn = document.querySelector(".demarre_btn button");
const info_boite = document.querySelector(".info_boite");
const sortie_quest = info_boite.querySelector(".bouttons .sortie_quest");
const continue_btn = info_boite.querySelector(".bouttons .rester");
const quest_boite = document.querySelector(".quest_boite");
const resultat_boite = document.querySelector(".resultat_boite");
const liste_option = document.querySelector(".liste_option");
const temp_ligne = document.querySelector("header .temp_ligne");
const temptext = document.querySelector(".temps .temp_gauche_text");
const timeCount = document.querySelector(".temps .temp_secondes");

// Le bouton onclick pour ouvrir les règles de jeu
demarre_btn.onclick = () => {
    info_boite.classList.add("activeinfo"); // accède aux infos
}

// Le bouton onclick pour ouvrir les questions
sortie_quest.onclick = () => {
    info_boite.classList.remove("activeinfo");
}

// si vous voulez continuer, cliquez sur le bouton
continue_btn.onclick = () => {
    info_boite.classList.remove("activeinfo");
    quest_boite.classList.add("activequest");
    showQuestions(0);
    queCounter(1);
    resterTemps(15);
    resterTempsligne(0);
}

let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const rester_quest = resultat_boite.querySelector(".bouttons .rester");
const quitter_quest = resultat_boite.querySelector(".bouttons .quitter");

rester_quest.onclick = () => {
    quest_boite.classList.add("activequest");
    resultat_boite.classList.remove("activeresultat");
    timeValue = 15;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine);
    resterTemps(timeValue);
    resterTempsligne(widthValue);
    temptext.textContent = "Temps restant";
    suivant_btn.classList.remove("show");
}

// si le bouton "quitter le quiz" est cliqué
rester_quest.onclick = () => {
    window.location.reload();
}

const suivant_btn = document.querySelector("footer .suivant_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// Si on clique sur le bouton suivant
suivant_btn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        clearInterval(counterLine);
        resterTemps(timeValue);
        resterTempsligne(widthValue);
        temptext.textContent = "Temps restant";
        suivant_btn.classList.remove("show");
    } else {
        clearInterval(counter);
        clearInterval(counterLine);
        showResult();
    }
}

// Prendre les questions et les options dans les éléments HTML
function showQuestions(index) {
    const que_texte = document.querySelector(".que_texte");

    // Création d'un nouveau span et div pour chaque question, option et passage de la valeur utilisée dans les éléments HTML
    let que_tag = '<span>' + questions[index].num + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option"><span>' + questions[index].option[0] + '</span></div>' +
        '<div class="option"><span>' + questions[index].option[1] + '</span></div>' +
        '<div class="option"><span>' + questions[index].option[2] + '</span></div>' +
        '<div class="option"><span>' + questions[index].option[3] + '</span></div>';
    que_texte.innerHTML = que_tag;
    liste_option.innerHTML = option_tag;

    const options = liste_option.querySelectorAll(".option");

    // Ajouter l'attribut onclick à toutes les options pour valider la réponse
    for (let i = 0; i < options.length; i++) {
        options[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

// Lorsqu'une option est sélectionnée
function optionSelected(reponse) {
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = reponse.textContent;
    let correctAns = questions[que_count].reponse;
    const allOptions = liste_option.children.length;

    if (userAns === correctAns) {
        userScore += 1;
        reponse.classList.add("correct");
        reponse.insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Réponse Correcte");
        console.log("Votre score actuel = " + userScore);
    } else {
        reponse.classList.add("incorrect");
        reponse.insertAdjacentHTML("beforeend", crossIconTag);
        console.log("Mauvaise réponse");

        for (let i = 0; i < allOptions; i++) {
            if (liste_option.children[i].textContent === correctAns) {
                liste_option.children[i].setAttribute("class", "option correct");
                liste_option.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                console.log("Réponse correcte automatiquement sélectionnée");
            }
        }
    }

    for (let i = 0; i < allOptions; i++) {
        liste_option.children[i].classList.add("disabled");
    }
    suivant_btn.classList.add("show");
}



function showResult() {
    info_boite.classList.remove("activeinfo");
    quest_boite.classList.remove("activequest");
    resultat_boite.classList.add("activeresultat");
    const scoretext = resultat_boite.querySelector(".score_text");

    if (userScore >= 3) {
        let scoreTag = '<span>Bravo ! Vous avez obtenu <p>' + userScore + '</p> sur <p>' + questions.length + '</p></span>';
        scoretext.innerHTML = scoreTag;
    } else if (userScore > 1) {
        let scoreTag = '<span>Pas mal ! Vous avez obtenu <p>' + userScore + '</p> sur <p>' + questions.length + '</p></span>';
        scoretext.innerHTML = scoreTag;
    } else {
        let scoreTag = '<span>Vous avez obtenu <p>' + userScore + '</p> sur <p>' + questions.length + '</p></span>';
        scoretext.innerHTML = scoreTag;
    }
}

function resterTemps(temp) {
    counter = setInterval(temps, 1000);
    function temps() {
        timeCount.textContent = temp;
        temp--;
        if (temp < 9) {
            let addZero = "0" + timeCount.textContent;
            timeCount.textContent = addZero;
        }
        if (temp < 0) {
            clearInterval(counter);
            temptext.textContent = "Temps écoulé";
            const allOptions = liste_option.children.length;
            let correctAns = questions[que_count].reponse;
            for (let i = 0; i < allOptions; i++) {
                if (liste_option.children[i].textContent === correctAns) {
                    liste_option.children[i].setAttribute("class", "option correct");
                    liste_option.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                    console.log("Temps écoulé : Réponse correcte automatiquement sélectionnée.");
                }
            }
            for (let i = 0; i < allOptions; i++) {
                liste_option.children[i].classList.add("disabled");
            }
            suivant_btn.classList.add("show");
        }
    }
}

function resterTempsligne(temp) {
    counterLine = setInterval(temps, 29);
    function temps() {
        temp += 1;
        temp_ligne.style.width = temp + "px";
        if (temp > 549) {
            clearInterval(counterLine);
        }
    }
}

function queCounter(index) {
    let totalQueCountTag = '<span><p>' + index + '</p> sur <p>' + questions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCountTag;
}


