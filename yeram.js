// Cette partie ne concerne que la montre
setInterval(()=> {
    const time =  document.querySelector("#tempile");
    let date = new Date();
    let hours = date.getHours();
    if(hours < 10){hours = "0" + hours};
    let minutes = date.getMinutes();
    if (minutes < 10){minutes = "0" + minutes};
    let seconds = date.getSeconds();
    if(seconds < 10 ){seconds = "0" + seconds};
    time.textContent = hours +":" + minutes + ":" + seconds;
    });

// Je ne place que la variable de mes questions
let questions = [

    
    {
        num: 1,
        question: "Que signifie HTML ?",
        reponse: "Hyper Text Markup Language",
        commentaire: "C'est exacte!Hyper Text Markup Language est la bonne reponse",
        option: [
            "Hyper Text for Eat",
            "Hyper Text but to understand",
            "Hyper Text Markup Language",
            "Hyper Text for Loock",
        ]
    },

    {
        num: 2,
        question: "Que signifie le DOM en JavaScript?",
        reponse: "Document Object Model",
        commentaire: "C'est exacte!Document Object Model est la bonne reponse",

        option: [
            "Document Object Model",
            "cpgt Text but to understand",
            "Nulle Text ",
            "Wait is a Text for Loock",
        ]
    },

    {
        num: 3,
        question: "Que signifie CSS ?",
        reponse: "Cascading Style Sheets ou feuille de style en cascade ",
        commentaire: "C'est exacte!Cascading Style Sheets ou feuille de style en cascade est la bonne reponse",

        option: [
            "Feuille Text dans la case",
            "Feuilles de style en cascode",
            "Cascading Style Sheets ou feuille de style en cascade ",
            "Cascading for sheets",
        ]
    },

    {
        num: 4,
        question: "Pourquoi y a-t-il de l'injustice dans le monde ?",
        reponse: "Personne ne croient en Dieu et le jour de l'interrogation",
        commentaire: "C'est exacte!Personne ne croient en Dieu et le jour de l'interrogation est la bonne reponse",

        option: [
            " La corruption",
            "Personne ne croient en Dieu et le jour de l'interrogation",
            "La force détenue par les gens injustes ",
            "Un des signes de la fin du monde",
        ]
    },

    {
        num: 5,
        question: "C'est quoi la croyance en Allah ?",
        reponse: "Montrer son unicité sans l'associer",
        commentaire: "C'est exacte!Montrer son unicité sans l'associer est la bonne reponse",
        option: [
            "Manger boire et dormir",
            "Montrer son unicité sans l'associer",
            "Créer des paroles glorieuses par nos propres gréts",
            "Augmenter sa puissance et sa gratitude",
        ]
    },

    {
        num: 6,
        question: "Pourquoi les éléves sont nuls en Maths ?",
        reponse: "Pas d'amour en la matière et manque d'effort",
        commentaire: "C'est exacte!Pas d'amour en la matière et manque d'effort est la bonne reponse",
        option: [
            "Complexité de la matière",
            "La paresse des élèves",
            "Le niveau d'explication et de compréhension",
            "Pas d'amour en la matière et manque d'effort",
        ]
    },


]

