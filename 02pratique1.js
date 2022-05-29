// Ce que nous vous demandons ici, c'est de stocker les prénoms dans un tableau. Pensez à la méthode push(). À la fin, il faudra
// afficher le contenu du tableau, avec alert(), seulement si le tableau contient des prénoms ; en effet, ça ne sert à rien de
// l'afficher s'il ne contient rien. Pour l'affichage, séparez chaque prénom par une espace. Si le tableau ne contient rien, faites-le
// savoir à l’utilisateur, toujours avec alert().

var tablo = [],
    rahalahy;
do {
    rahalahy = prompt("azovy agnaragna rahilahinao araiky: ");
    tablo.push(rahalahy);
} while (rahalahy.length != 0);
if (tablo[0] == "") {
    alert("le tableau est vide");
} else {
    var tabString = tablo.join(" ");
    alert(tabString);
}
