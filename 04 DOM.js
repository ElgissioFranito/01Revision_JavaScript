// // Le DOM(Document Object Model) est donc une API qui s'utilise avec les
// // documents HTML et qui permet de MODIFIER LES ELEMENTS du document HTML
// // dans un code JS. 
// ************************************************************************


// // getElementById [objet Element]
// var div = document.getElementById("monDiv");// recupère l'élément qui a l'id= "monDiv".
// alert(div);                                 // affiche [object HTMLDivElement]: ce qui veut seulement dire que le code fonctionne.
// //                                              notion héritage: HTMLDivElelemnt est un sous-objet de HTMLElemnt qui est un sous-objet de Element qui est sous-objet de Node.
// console.log(div);                           // inspecter le contenu HTML dans l'element monDiv ==> "tous les contenus qui se trouve entre <div id="monDiv"> et </div>".
// alert(div.innerHTML);                       // affiche en pop-up tous les contenus qui se trouve entre <div id="monDiv"> et </div>.
// console.log(div.innerHTML);                 // affiche en text, le contenu HTML dans l'élément monDiv ==> "tous les contenus qui se trouve entre <div id="monDiv"> et </div>".
// //mitovy oe ==>
// div2 = document.querySelector("#monDiv");
// alert(div2.innerHTML);
// console.log(div2.innerHTML);
// // Les éléments HTML sont souvent composés d'attributs (exemple href d'un <a>), et d'un contenu (ce qui se trouve entre balise ouvrante et fermante), qui est de type #text. Le contenu peut aussi être un autre élément HTML.
// // ************************************************************************ 


// // getElementsByTagName [objet Collection]
// var divs = document.getElementsByTagName("div");// récupère tous les éléments <div>
// var p = document.getElementsByTagName("p");  // récupère tous les éléments <p>
// alert(divs);                        // affiche [Object HTMLCollection]
// console.log(divs);                  // affiche HTMLCollection(2) [div#monDiv, div] (donc c'est un array d'indice "0=div#monDiv" et "1=div")
// console.log(typeof (divs));         // affiche object 
// console.log(divs.innerHTML);        // undefined : parce que "divs" est un collection de plusieurs éléments (heureusement on sait déjà parcourir un tableau via For)
// // parcourir une collection
// for (var i = 0; i < divs.length; i++) {  // separateur ";" fa tsy ","        //index d'un tableau depart a zéro
//     console.log("element numero " + (i + 1) + ": " + divs[i]);          // affiche HTMLDivElement (l'objet HTMLCollection peut donc contenir des HTMLDivElement)
//     console.log("son contenu " + (i + 1) + ": " + divs[i].innerHTML);// affiche en text, le contenu HTML de élément a la position [i]
// }

// for (var j = 0; j < p.length; j++) {
//     console.log("paragraphe num " + (j + 1) + ": " + p[j].innerHTML);// affiche en text, le contenu HTML de élément a la position [i]
// }
// // *****************************************************************************


// // getElementsByName [objet Collection] seulement en formulaire (avec les element <input>)
// let nomUser = document.getElementsByName("nomUser");        // let: mot-clé pour declaré un variable comme var (on utilise let et const en ES6)
// for (let i = 0; i < nomUser.length; i++) {                  // pour afficher un collection
//     console.log("contenu num " + (i + 1) + " : " + nomUser[i].value);   //value: mais non pas innerHTML (paske <input> est un balise orphélin, donc il ne peut pas avoir de contenu)
// }
// // ************************************************************************************* 


// //querySelector [Objet Element]
// let span = document.querySelector("span");               // récupérer le premier élément <span> dans le code HTML
// alert("SPAN avec QuerySelector :" + span.innerHTML);     // pas bésoin de boucle FOR satria querySelector ne récupere qu'un seul élément
// span = document.querySelector("#monDiv .paraky span");   // recupère le prémier élément <span> dans les éléments de classe "paraky" et dans un élément de id "monDiv" comme dans selecteur CSS
// alert("SPAN agnaty #monDiv .paraky avec QuerySelector :" + span.innerHTML);

// //querySelectorAll [Collection(nodeList)]
// span = document.querySelectorAll("#monDiv .paraky span");// recupère tous les éléments <span> dans les éléments de classe "paraky" et dans un élément de id "monDiv"
// for (let k = 0; k < span.length; k++) {                  // boucle FOR pour afficher un collection
//     console.log("span anaty #monDiv .paraky " + (k + 1) + " : " + span[k].innerHTML);
// }

// span = document.querySelectorAll("span");               // récupérer tous les élément <span> dans le code HTML
// for (let k = 0; k < span.length; k++) {                  // boucle FOR pour afficher un collection
//     console.log("Tout span num " + (k + 1) + " : " + span[k].innerHTML);
// }
// // **********************************************************************************


// // getAttribute() et setAttribute()
// let lien2 = document.getElementById('lien2');
// let href = lien2.href;                      // On récupère l'attribut« href » (attribut existant dans l'id "lien2" => ici, href n'existe pas das id="lien1" mais existe dans "lien2")
// console.log(href);                          // let href = lien2.getAttribute("href") ; (mety fa efa lasambalagna) 
// //                                              let href = lien2.href; (mitovy iany f mis element tsy mety atao karah io de tsy maintsy mampiasa getAttribute() fogna)
// lien2.setAttribute('href', 'C:/Users/USER/Desktop/DESKTOP/Dossier/0 boss 0'); // On édite l'attribut « href » , en href="http://www.siteduzero.com"
// console.log(lien2.href);                    // on les utilise surtout sur des formulaires, pour récupérer et modifier les #value de <input>
// //                                      !!!!! les attributs Classe est une exception pour ces methodes


// ClassName                                                tonga de direct f ts mandalo am getAttribute sy setAttribute eky
console.log(document.getElementById('formulaire').className);   //affiche la classe actuelle de #formulaire
document.getElementById('formulaire').className = 'paraky';     // on change la classe actuelle en "paraky" au #formulaire
document.querySelector("#monDiv a").className = "mena";
document.querySelectorAll("#monDiv a").className = "mena";      // tsy mety satria collection
// l'attribut HTML "for" d'un <label> est aussi une exception, il faudra utiliser document.syntariny.htmlFor à la place de document.syntariny.for
// ***************************************************************************************************** 


//InnerHtml                         (=> innerText ou textContent si on veut recuperer seulement les texte sans balisage
//RQ => document.getElementById('changement').innerHTML = changement.innerHTML
changement.innerHTML = '<blockquote>Je mets une citation à la place du texte précedent </blockquote>';   // changer le contenu
changement.innerHTML += '<b> <i> + ce que j\'ai ajouté </i></b>'; // ne jamais utiliser "+=" à l'interieur d'une boucle
// ******************************************************************************************************

// parentNode                       => acceder a l'element parent d'un element
let divSansId1 = document.getElementById("span1").parentNode; //recuperer le parent de span1
console.log(divSansId1.innerHTML);
let divSansId2 = span1.parentNode;  // la même chose que divSansId1
console.log(divSansId2.innerHTML)
// ********************************************************************************************************



// AJOUTER des elements en 03 etapes
// Création, Assignation, Insertion

//creation de l'element : createElement()
let newLien = document.createElement('a');          //créé mais pas encore inseré, donc invisible
//   creation d'un noeud textuel (creation d'un text): createTextNode()
const phrase = document.createTextNode("Ceci est un text créer par createTextNode en JS");


// Assignation des attributs : setAttribute()
newLien.id = "vaovao";
newLien.href = "C:/Users/USER/Desktop/DESKTOP/Dossier/0 boss 0";
newLien.title = "Lien namboarina taminy createElement ";
newLien.setAttribute("tabindex", "10");             // mitovy newLien.tabindex = "10";


// Insertion de l'element dans le document :
// appendchild()                            => placer un element en tant que dernier enfant (si on fait appendChild(phrase) 2x, il prend le dernier place)
inserer.className = "maitso";
inserer.appendChild(newLien);               // on place <a> en tant que dernier enfant de id = "inserer"
inserer.appendChild(phrase);                // on place le text en tant que dernier enfant de <section> de id = "inserer" (donc après et à l'exterieur de <a></a>)
newLien.appendChild(phrase);                 // on place le text en tant que dernier enfant de <a> de id = "vaovao"
const br = document.createElement('br');
const br2 = br;
inserer.appendChild(br);                    // inserer un retour a la ligne
inserer.appendChild(br2);                   // on fait 2x appendChild de createElement, donc il execute seulement la valeur final (pour faire <br> 2x, il faut la cloner)
const br3 = br.cloneNode(false);
// *******************************************************************************************************************

// RQ => notion de reference 
// PASSAGE PAR VALEUR = le contenu des variables est « passé par valeur » => si une variable "a" contient « Clarisse » et qu'on affecte cette valeur à une autre variable "b = a",
// la valeur est copiée dans "b". On obtient alors deux variables distinctes, contenant la même valeur.
// let a= "Clarisse";
// let b = a;
// 
// PASSAGE PAR REFERENCE = l'adresse de la valeur, ce qui va permettre d'avoir deuxvariables qui pointent sur une même valeur !
var newLink = document.createElement('a');
var newLinkText = document.createTextNode(' Le Site du Zéro');

newLink.id = 'sdz_link';
newLink.href = 'http://www.siteduzero.com';

newLink.appendChild(newLinkText);

document.getElementById('inserer').appendChild(newLink);

// On récupère, via son ID, l'élément fraîchement inséré
var sdzLink = document.getElementById('sdz_link');
sdzLink.href = 'http://www.siteduzero.com/forum.html';

// newLink.href affiche bien la nouvelle URL :
console.log(newLink.href);

// ****************************************************************************


// cloner un element: cloneNode()                // peut cloner les texts mais ne copie pas les evenements
ins1 = inserer;
const inserer2 = ins1.cloneNode(false);          // sans ses enfants
const inserer3 = ins1.cloneNode(true);           // avec ses enfants
ins1.parentNode.appendChild(inserer2);           // seulement <div> est cloner
ins1.parentNode.appendChild(br3);                // retour à la ligne
const br4 = br3.cloneNode(false);
ins1.parentNode.appendChild(br4);                // 2è retour a la ligne
ins1.parentNode.appendChild(inserer3);           // clone de <div> avec ses enfants
const br5 = br3.cloneNode(false);
ins1.parentNode.appendChild(br5);

// remplacer un element : replaceChild()         // peut remplacer un text
let txt = document.createTextNode("je le site de zero ici via repleceElement() ");
inserer3.replaceChild(txt, inserer3.lastChild);  // replaceChild(NouvelEnfant, enfantàRemplacer)

// supprimer un element : removeChild()
const phraz = document.createTextNode("pas important");
document.body.appendChild(phraz);               // inserer phraz dans body
document.body.removeChild(phraz);               // supprimer phraz dans body
document.body.appendChild(phraz);               // réinserer phraz

// *********************************************************************************************


// inserer à la bonne place
// insertBefore(nouvelEnfant, enfantDerière)
// insertAfter(nouvelAnfant, enfantDevant)





