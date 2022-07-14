// il est possible d'editer le css d'un seule element de ces manieres:
// 1er cas ==> <div style="color:red;"> Ce texte est en rouge </div>
// 2e cas ==> <style> div { color:red; } </style>

// le 1er cas est prioritaire car il est directement attribuer à un elements
// donc on va ici utiliser l'attribut style dans un element

// creation
let titla = document.createElement("div");
let texta = document.createTextNode("Manipulation CSS !!!");

// assignation
titla.style.color = "blue";                         // couleur bleu
titla.style.background = "yellow";
titla.style.padding = "100px";                      // toujours mettre l'unité de valeur(px,...)
titla.style.size = "420px";
titla.style.fontSize = "50px";                      // sans trait d'union mais un maj pour le separation
titla.style.fontWeight = "1000";                    // unité de valeur sauf pour fontWeight

// insertion
titla.appendChild(texta);
document.body.appendChild(titla);

// tsy nety (??🙄??)
// $(() => {
//     $(titla).click(() => titla.style.background = "pink");
//     $(titla).click(() => titla.style.background = "yellow");
// });

// Tsy nandeha (??🙄??)
// $(() => {
//     $(titla).click(() => $(titla).hide());
//     $(titla).click(() => $(titla).show());
// });

titla.addEventListener("dblclick", () => alert("le font du texte est " + titla.style.background), false);




