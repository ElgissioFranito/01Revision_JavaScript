// Les événements permettent de déclencher une #fonction selon qu'une action s'est produite ou non. Par exemple, on peut faire
// apparaître une fenêtre alert() lorsque l'utilisateur survole un element (par ex: un <div>) d'une page Web.

// let here = document.getElementById("here");     // On laisse les getSynyTariny, à la place on utilise querySelector
// let here = document.querySelector("#here");  // de meme, on a pas besoin de faire ça si c'est un id, on le fait directement comme ça...

here.onclick = function () {                    // "function" fa tsy "fonction"
    alert("you had click here!");
};


// DOM-O : simple, facile (vieux, crée qu'un seul evenement de type ex "click")
// Creation, assignation, insertion
let span1 = document.createElement("span");
let text1 = document.createTextNode("Cliquer ici!");
span1.id = "ici";
span1.className = "tab";
span1.href = "404.html";
span1.appendChild(text1);
event2.appendChild(span1);

// pour DOM-0:                                     
// ici.onclick = function () {                          //(fonction anonyme)
//     alert("réussi!!!😁 \n On a fait un événement avec DOM-0");
// }

// On va utiliser un fonction fléchée "(arg) => valeur_de_retour"
ici.onclick = () => alert("réussi!!!😁 \n On a fait un événement avec \n  DOM-0");


// Creation, assignation, insertion
event2.appendChild(document.createElement('br')); // a la ligne
event2.appendChild(document.createElement('br')); // a la ligne

let span2 = document.createElement("span");
let text2 = document.createTextNode("On a supprimé l'événement dans ce texte!");
span2.id = "suppr";
span2.appendChild(text2);
event2.appendChild(span2);
// On va utiliser un fonction fléchée "(arg) => valeur_de_retour"
suppr.onclick = () => alert("supprimer un evenement avec DOM-0");       //on peut aussi faire span2 au lieu de directement suppr (suppr esu l'id du span2) 
// Supprimer un event (on lui assigne un fonction anonyme vide)
suppr.onclick = function () { };                  // suppr est "id" de span2

// fin de div = "event2"
event2.appendChild(document.createElement('br')); // a la ligne
event2.appendChild(document.createElement('br')); // a la ligne
document.body.appendChild(document.createElement('br')); // a la ligne




// DOM-2: crée plusieurs evenement de meme type "ex:click" (complexe, long) (conseilé)
// Creation, assignation, insertion <div id="event3">
let div3 = document.createElement("div");
let h2 = document.createElement("h2");
let texth2 = document.createTextNode("Utilisation des événement avec DOM-2!");
div3.id = "event3";
h2.appendChild(texth2);
div3.appendChild(h2);
document.body.appendChild(div3);
// Creation, assignation, insertion <span id="here3">
let span3 = document.createElement("span");
let text3 = document.createTextNode("Click here!");
span3.id = "here3";
span3.appendChild(text3);
event3.appendChild(span3);


// ************** Pour autres Navigateurs *************************************************** 
// pour DOM-2: addEventListener()
// here3.addEventListener('click', function () {                // fonction anonyme
//     alert("réussi!!!😁 \n On a fait un événement avec \n  DOM-2");
// }false);                                                     // #true pour capture; #false pour bouillonnement

// On va utiliser un fonction fléchée //// (arg) => valeur_de_retour ////
here3.addEventListener('click', () =>                           // here3 est id de span3
    alert("réussi!!!😁 \n On a fait un événement avec \n  DOM-2"),  // "," fa tsy ";"
    false);                                                     // #true pour la phase de capture; #false pour la phase du bouillonnement

// addEventListener(typeEvent,funtionAnonyme,false);

// la deuxieme événement de meme type sur meme élément 
here3.addEventListener('click', () => alert("la deuxième est aussi réussi!!!😁"), false);
// la troisième événement de meme type sur meme élément (ordre d'affichage est parfois aléatoire)
here3.addEventListener('click', () => alert("la troisième est aussi réussi!!!😁"), false);
// la quatrième événement (qui va être supprimer)
let myFunction = () => alert("la quatriéme est aussi réussi!!!😁");
here3.addEventListener('click', myFunction, false);

// Suppression: removeEventListener()
here3.removeEventListener('click', myFunction, false);

//ouais, obligé de mettre la fonction anonyme dans un variable (pour la reférence)

event3.appendChild(document.createElement("br"));
// **************************************************************************************************


// // ********************* Pour Internet Explorer ***************************************
// //                       Miscrosoft edge n'est pas internet explorer
// // pour DOM-2: attachEvent()
// // here3.attachEvent('onclick', function () {                // fonction anonyme
// //     alert("réussi!!!😁 \n On a fait un événement avec \n  DOM-2");
// // }

// // On va utiliser un fonction fléchée //// (arg) => valeur_de_retour ////
// here3.attachEvent('onclick', () =>                           // here3 est id de span3
//     alert("réussi!!!😁 \n On a fait un événement avec \n  DOM-2")  // "," fa tsy ";"
// );

// // attachEvent(typeEvent,funtionAnonyme);

// // la deuxieme événement de meme type sur meme élément 
// here3.attachEvent('onclick', () => alert("la deuxième est aussi réussi!!!😁"));
// // la troisième événement de meme type sur meme élément (ordre d'affichage est parfois aléatoire)
// here3.attachEvent('onclick', () => alert("la troisième est aussi réussi!!!😁"));
// // la quatrième événement (qui va être supprimer)
// here3.attachEvent('onclick', () => alert("la quatriéme est aussi réussi!!!😁"));

// // Suppression: detachEvent()
// here3.detachEvent('onclick', () => alert("la quatriéme est aussi réussi!!!😁"));
// // ******************************************************************************************


// Explication phase de capture et Bouillonnement
// code HTML:
/* <div id="capt1">
        <span id="capt2">Cliquez-moi pour la phase de capture.</span>
    </div>
    <div id="boul1">
        <span id="boul2">Cliquez-moi pour la phase de
            bouillonnement.</span>
    </div>
    <script src="06 event.js"></script>                 */

// code JS:
var capt1 = document.getElementById('capt1'),
    capt2 = document.getElementById('capt2'),
    boul1 = document.getElementById('boul1'),
    boul2 = document.getElementById('boul2');
capt1.addEventListener('click', function () {
    alert("L'événement du div vient de se déclencher.");
}, true);
capt2.addEventListener('click', function () {
    alert("L'événement du span vient de se déclencher.");
}, true);
boul1.addEventListener('click', function () {
    alert("L'événement du div vient de se déclencher.");
}, false);
boul2.addEventListener('click', function () {
    alert("L'événement du span vient de se déclencher.");
}, false);


// ********************** OBJET EVENT ***********************************************************

// ciblé l'element qui declanche un evenement (e.target())
const clickme = document.createElement('span');
let ttx = document.createTextNode("cliquez!");
clickme.id = "clickme";
e.target.innerHTML = 'Vous avez cliqué !';              // clickme.innerHtml (parce que l'evenement "click" est sur (ou cible) clickme)
clickme.addEventListener('click', (e) => {
}, false);
clickme.appendChild(ttx);
event2.appendChild(clickme);

// Bloquer l'action par défaut de certains éléments (e.preventDefault())
// creation lien
let bouton = document.createElement("input");
bouton.value = " lien vers GOOGLE";
bouton.href = "http://google.com";
bouton.type = "button";
event3.appendChild(bouton);
bouton.addEventListener('click', (e) => {
    e.preventDefault();                     //preventDefault est un methode, donc miafara am "()"
    alert("lien bloquer par la methode e.preventDefault()")
}, false);

let titre = document.querySelectorAll("h2");    // collection des elements
for (i = 0; i < titre.length; i++) {
    titre[i].addEventListener('contextmenu', (e) => {
        e.preventDefault(); //preventDefault est un methode, donc miafara am "()"
        alert('vous avez fait un clic droite sur un titre!');
    }, false);
}

// Parfois, un événement(mouseover, mouseout, mousemove, click,...) appliqué
// sur un parent se propage à ses enfants. Cet héritage des événements peut
// provoquer des comportements inattendus.

