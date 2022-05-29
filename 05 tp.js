// *******************************TP1********************************************
// Creation, Assignation, insertion
// creation
let div = document.createElement('div');
let strong = document.createElement('strong');
let strong2 = strong.cloneNode(false);
let a1 = document.createElement('a');
let a2 = a1.cloneNode(false);
let text1 = document.createTextNode("Le ");
let text2 = document.createTextNode("World Wide Web Consortium ");
let text3 = document.createTextNode(", abrégé par le sigle ");
let text4 = document.createTextNode("W3C ");
let text5 = document.createTextNode(", est un ");
let text6 = document.createTextNode("organisme de standardisation ");
let text7 = document.createTextNode("à but non-lucratif chargé de promouvoir la comptabilité des technologie du ");
let text8 = document.createTextNode("World Wide Web.");

// On peut aussi regrouper les textes en tableau    (pour eviter de créer 250 variables) 
// let textNodes = [
//     document.createTextNode('Le '),                     => textNodes[0]
//     document.createTextNode('World Wide Web Consortium'),
//     document.createTextNode(', abrégé par le sigle '),
//     document.createTextNode('W3C'),
//     document.createTextNode(', est un '),
//     document.createTextNode('organisme de standardisation'),
//     document.createTextNode(' à but non-lucratif chargé de
//     promouvoir la compatibilité des technologies du '),
//     document.createTextNode('World Wide Web'),
//     document.createTextNode('.')
//     ];


// Assignation des Attribut
div.id = 'divTP1';
div.className = 'gris';
a1.href = "http://fr.wikipedia.org/wiki/Organisme_de_normalisation";
a2.href = "http://fr.wikipedia.org/wiki/World_Wide_Web";
a2.title = "World Wide Web";

//Insertion au document
div.appendChild(text1);
div.appendChild(strong);
strong.appendChild(text2);
div.appendChild(text3);
div.appendChild(strong2);
strong2.appendChild(text4);
div.appendChild(text5);
div.appendChild(a1);
a1.appendChild(text6);
div.appendChild(text7);
div.appendChild(a2);
a2.appendChild(text8);

document.body.appendChild(div);

// ******************************************************************************

let br = document.createElement('br');
document.body.appendChild(br);

// ******************************TP2***************************************
// creation, assignation, insertion
// creation des noeuds
let div2 = document.createElement("div");
let para = document.createElement("p");
let ul = document.createElement("ul");
let li = [];
let text = [
    document.createTextNode("Langages basé sur ECMAScript :"),
    document.createTextNode(" JavaScript "),
    document.createTextNode(" JScript "),
    document.createTextNode(" ActionScript "),
    document.createTextNode(" EX4 "),
];

//Assignation
div2.id = "divTP2";
div2.className = "gris";

// insertion
div2.appendChild(para);
para.appendChild(text[0]);
div2.appendChild(ul);

for (i = 0; i < 4; i++) {
    li.push(document.createElement("li"));  // push("") fatsy push =
    ul.appendChild(li[i]);
    li[i].appendChild(text[i + 1]);     // "li" fa tsy "il"
}

document.body.appendChild(div2);

// ********************************************************************************

document.body.appendChild(document.createElement("br"));

// **********************************TP3****************************************
// creation, assignation, insertion
// creation des noeuds
let div3 = document.createElement("div");
let para2 = document.createElement("p");
let dl = document.createElement("dl");
let dt1 = document.createElement("dt");
let dt2 = document.createElement("dt");
let dt3 = document.createElement("dt");
let dt4 = document.createElement("dt");
let dd1 = document.createElement("dd");
let dd2 = document.createElement("dd");
let dd3 = document.createElement("dd");
let dd4 = document.createElement("dd");
let txt = [
    document.createTextNode("Langages basé sur ECMAScript :"),
    document.createTextNode(" JavaScript "),
    document.createTextNode(" JavaScript est un langage de programmmation de scripts principamement utilisé dans le page web interactives mais aussi du côté serveur."),
    document.createTextNode(" JScript "),
    document.createTextNode(" JScript est le nom générique de plusieurs implémentations d'ECMAScript3 créées par microsoft."),
    document.createTextNode(" ActionScript "),
    document.createTextNode(" ActionScript est le langage de programmation utilisé au sein d'applicationn clientes (adobe Flash, Adobe Flex) et serveur (Flash Madia Server, Run, JRun, MacroMedia Generator."),
    document.createTextNode(" EX4 "),
    document.createTextNode(" ECMAScript for XML (E4X) est une extension XML au langage ECMAScript."),
];

//Assignation
div3.id = "divTP3";
div3.className = "gris";

// insertion
div3.appendChild(para2);
para2.appendChild(txt[0]);
div3.appendChild(dl);

dl.appendChild(dt1);
dl.appendChild(dd1);
dl.appendChild(dt2);
dl.appendChild(dd2);
dl.appendChild(dt3);
dl.appendChild(dd3);
dl.appendChild(dt4);
dl.appendChild(dd4);
dt1.appendChild(txt[1]);
dd1.appendChild(txt[2]);
dt2.appendChild(txt[3]);
dd2.appendChild(txt[4]);
dt3.appendChild(txt[5]);
dd3.appendChild(txt[6]);
dt4.appendChild(txt[7]);
dd4.appendChild(txt[8]);

document.body.appendChild(div3);

// **********************************************************************************

// On peut aussi placé les text dans un objet et eux-mêmes placé dans un tableau
// On crée l'élément conteneur
var mainDiv = document.createElement('div');
mainDiv.id = 'divTP3prim';
mainDiv.className = 'gris';
// On place le texte dans des objets, eux-mêmes placés dans un tableau
// Par facilité, la création des nœuds textuels se fera dans la boucle
var languages = [
    {
        t: 'JavaScript',
        d: 'JavaScript est un langage de programmation de scripts principalement utilisé dans les pages web interactives mais aussi coté serveur.'
    },
    {
        t: 'JScript',
        d: 'JScript est le nom générique de plusieurs implémentations d\'ECMAScript 3 créées par Microsoft.'
    },
    {
        t: 'ActionScript',
        d: 'ActionScript est le langage de programmation utilisé au sein d\'applications clientes (Adobe Flash, Adobe Flex) et serveur (Flash media server, JRun, Macromedia Generator).'
    },
    {
        t: 'EX4',
        d: 'ECMAScript for XML (E4X) est une extension XML au langage ECMAScript.'
    }
];
// On crée le paragraphe
var paragraph = document.createElement('p');
var paragraphText = document.createTextNode('Langages basés sur ECMAScript :');
paragraph.appendChild(paragraphText);
// On crée la liste, et on boucle pour ajouter chaque item
var defList = document.createElement('dl'),
    defTerm, defTermText,
    defDefn, defDefnText;
for (var i = 0; i < languages.length; i++) {
    defTerm = document.createElement('dt');
    defDefn = document.createElement('dd');
    defTermText = document.createTextNode(languages[i].t);
    defDefnText = document.createTextNode(languages[i].d);
    defTerm.appendChild(defTermText);
    defDefn.appendChild(defDefnText);
    defList.appendChild(defTerm);
    defList.appendChild(defDefn);
}
// On insère le tout dans mainDiv
mainDiv.appendChild(paragraph);
mainDiv.appendChild(defList);
// On insère mainDiv dans le <body>
document.body.appendChild(mainDiv);

// *******************************************************************************************

document.body.appendChild(document.createElement("br"));

// ********************************TP4********************************************************
// creation, assignation, insertion
// creation 
let container1 = document.createElement("div");
let container2 = document.createElement("div");
let formulaire = document.createElement("form");
let field = document.createElement("fieldset");
let legend = document.createElement("legend");
let label = document.createElement("label");
let input1 = document.createElement("input");
let input2 = document.createElement("input");
let txt1 = document.createTextNode("Uploader une image");
let txt2 = document.createTextNode("Image à uploader :");
let brx = document.createElement("br");

// assignation
container1.id = "divTP4";
container1.className = "gris";
formulaire.enctype = "multipart/form-data";
formulaire.method = "post";
formulaire.action = "upload.php";
container2.setAttribute("style", "text-align : center"); //c'est comme ça le fanaovagna azy
label.htmlFor = "inputUpload";      // label.for tsy mety fa tsy maintsy label.HTMLFor
input1.type = "file";
input1.name = "inputUpload";
input1.id = "inputUpload";
input2.type = "submit";
input2.value = "Envoyer";

// insertion
container1.appendChild(formulaire);
formulaire.appendChild(field);
field.appendChild(legend);
legend.appendChild(txt1);
field.appendChild(container2);
container2.appendChild(label);
label.appendChild(txt2)
container2.appendChild(input1);
container2.appendChild(brx)
container2.appendChild(brx.cloneNode(false));
container2.appendChild(input2);


document.body.appendChild(container1);





