var var1 = "salama"; // declaration variable

var var2 = prompt("azovy agnaragnao ?"); //declaration, affichage, lecture(affectation)
var var3 = Number(prompt("firy tagno anao ?")); // prompt = permet d'enregistrer les information tapez par User
// Number(variable) = N en majuscule, convertion en type nombre (mitovy parseInt)

alert(var1 + " " + var2); // affichage(boite de dialogue) + concatenation
console.log(typeof var1) // avec methode prompt = tjrs string (methode = fonction)
console.log(typeof var2) // avec methode prompt = tjrs string
console.log(typeof var3) // avec methode Number(variable) = converti en type Number

// operation tagno nahaterahagna
var nahaterahana;

//IF(condition){instruction} : instruction de condition qui prend la valeur TRUE ou FALSE
if (confirm("Ana tegna ampy " + var3 + " tagno ouh!??")) { //mangataka confirmation
    nahaterahana = 2022 - var3;
    alert("ana roh " + var2 + " teraka tam tagno " + nahaterahana + " ai! ");
}
else {  // kua tsy Confirméni User
    nahaterahana = "TSY HAY";
}
document.writeln(`<p>Agnarany dia ${var2}.\n`)
document.writeln(`<p> ${var2} dia teraka taminy tagno ${nahaterahana} !\n`) // concatenation transformant les variables en String (ts de mazava)/ conversion en modèle String
console.log(typeof nahaterahana) // Number: tsy manao conversion en String

// SWITCH ()
var drawer = parseInt(prompt('Choisissez le tiroir à ouvrir (1 à 4):'));

switch (drawer) {
    case 1:
        document.writeln('<p>Tiroir num ' + drawer + ' : Contient divers outils pour dessiner : du papier, des crayons, etc. \n');
        break;
    case 2:
        document.writeln('<p>Tiroir num ' + drawer + ' : Contient du matériel informatique : des câbles, des composants, etc.\n');
        break;
    case 3:
        document.writeln('<p> Tiroir num ' + drawer + ' : Ah ? Ce tiroir est fermé à clé ! Dommage !\n');
        break;
    case 4:
        document.writeln('<p> Tiroir num ' + drawer + ' : Contient des vêtements : des chemises, des pantalons, etc.\n');
        break;
    default:
        document.write("<p> Tiroir num " + drawer + " : Info du jour : le meuble ne contient que 4 tiroirs et, jusqu'à preuve du contraire.\n");
}


// boucke FOR
// for (decl+initial; condition; incrementation){ instruction }
for (var i = 0; i < 5; i++) {
    document.writeln(". <p>Boucle numero " + i);
}


//  fonction, var local, var global
var message = "Ici c'est la variable globale !"; // globale
function showMsg() {
    var message = "Ici c'est la variable locale !"; // locale
    console.log(message);
}
showMsg(); // la variable locale est affiché dans la console
console.log(message); // la variable globale est affiché dans la console

// fonction avec argument
function myFunction(arg) {
    alert('argument ni fonction nao dia: ' + arg);
}
myFunction(prompt('Teny atao argument ni fonction ?'));
//myFonction(arg): une fonction qui a pour parametre arg
// arg= prompt(...) : les argument sont locals(detruit après l'execution)

var vilouma = function () { // assigner une fonction anonyme à un variable
    return 'veloma !';       // fahazahoako return dia mitovy "égal" fogn ==> vilouma() = 'veloma !' ==> alert (vilouma()) = alert ('veloma !')
    alert('Attention ! Le texte arrive !'); // les instruction après le (premier) "return" ne s'execute pas
};  //miafara am point-virgule: satria affectation d'un variable (=instruction)
alert(vilouma());
// tout les instruction se termine par ";"
//instruction: affectation, initialisation, declaration variable, ...
//stucture: fonction, condition, boucle, ...


// les IEF (Immediatelely Executed Function) : C'est une instruction qui execute une fonction à l'instant qu'il soit declaré
//ne possède pas de nom et qui a deux deux parenthèses
//instruction: (function(){code isolé})() ==> ce dernier parenthèse permet d'executer la fonction
var test = 'mahintigny';  // On crée une variable « test » contenant le mot « mahintigny »

(function () {      // Début du code isolé
    var test = 'fotsy';         // On crée une variable du même nom avec le contenu « fotsy » dans la zone isolée
    console.log('Dans la zone isolée, la couleur est : ' + test);
})();               // Fin de la zone isolée. Les variables créées dans cette zone sont détruites.

console.log('Dans la zone non-isolée, la couleur est : ' + test); // Le texte final contient bien le mot « mahintigny » vu que la « zone isolée » n'a aucune influence sur le reste du code


// les OBJETs(sont contitué par constructeur, propriétés, méthodes)
// objet ARRAY(tableau)
var solaitrabe = ['Sebasy', 'loriny', 2022, 'Soazy', true]; //decl+init

console.log(solaitrabe);
alert(solaitrabe[0]);                           // Affiche "Sebasy"        // tab commence tjrs par l'indice 0
solaitrabe[0] = 'Beviny';                       // modifier "Sebasy" en "Beviny"
alert(solaitrabe[0]);                           // Affiche "Beviny"

solaitrabe.push('Rakoto', 'Ludo');              // ajoute Rakoto et Ludo à la fin du tableau
solaitrabe.unshift('Rajako');                   // ajoute Rajako en debut du tableau
solaitrabe.shift();                             // retire le premier valeur (supprime Rakoto)
solaitrabe.pop();                               // retire le dernier valeur (supprime Ludo)
console.log(solaitrabe);

var sol1 = solaitrabe.join('-');                // Crée une chaine String à partir d'un tableau avec un separateur "-" (convertir un tab en String)
console.log(sol1);
console.log(typeof (sol1));                     // String
var sol2 = sol1.split('-');                     // Couper la chaine String (à chaque caractére "-" trouvé) en tableau (ts mety atao direct f tsy maintsy atao agnaty variable hafa)
console.log(sol2);
console.log(typeof (sol2));                     // Objet (tableau)
//push, unshift, shift, pop, join, split sont des methodes ==> ts maintsy misy parenthèse am farany
// length n'est pas une méthode

//Parcourir un tableau (For)
for (var i = 0; i < solaitrabe.length; i++) {
    console.log(solaitrabe[i]);
}

// OBJET (un peut la même principe qu'au TABLEAU sauf que les indice sont des chaines de caractère mais pas des numero 0...n)

var solaitry = {                           // au lieu d'un crochet, on met des accolades
    papa: "Bitagna",                       // affecté par un ":" (fa tsy égal)
    mama: "Zosy",                          // séparé par des virgule ","
    anadahy: "Leboto",                     // tsy important ny ordre satria tsisy indice
    anabavy: "zety"
};                                         // affectation ni variable tsy maintsy miafara am ";"
solaitry.tonton = 'Didier';                // ajoute la variable 'tonton' (qui a la valeur "Didier") à l'objet solaitry
solaitry.tantine = prompt("azovy tantine nao? :");
console.log(solaitry.length);              // Undefined
// RQ: length tsy mila parenthèse am farani satria tsy methode(tsy fonnction)
console.log(solaitry.mama);                // au lieu de solaitry[1]
console.log(solaitry);

// Parcourir un Objet (for in)
for (var ident in solaitry) {               // On crée un var ident pour les identifiant des propriétés de l'objet 'solaitry'
    console.log(solaitry[ident]);           // crochet comme au tableau
    console.log(ident)                      // "ident" fa tsy "solaitry.ident" satria ident variable globale
}



