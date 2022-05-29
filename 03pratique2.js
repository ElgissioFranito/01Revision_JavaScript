// Ce TP sera consacré à un exercice bien particulier : la conversion d'un nombre en toutes lettres. Ainsi, si l'utilisateur entre le
// nombre « 41 », le script devra retourner ce nombre en toutes lettres : « quarante-et-un ».


function enLettre(nombre) {         // declaration fonction
    var unite = [];                 // declartion tableau vide (locale)
    var dizaine = [];
    var centaine = [];
    var xzaine = [];
    var u, d, c, x;                 // declaration variable locale
    switch (nombre.length) {        //structure SWITCH

        case 1:                     // cas où le nbr entré est à un chiffre (unité seulement)
            u = parseInt(nombre);
            unite = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
            alert(nombre + " en lettre s'écrit ==> " + unite[u]);
            break;
        case 2:                     // cas où le nobre entré est à deux chiffre (unité et dizaine)
            u = (parseInt(nombre)) % 10;
            d = (parseInt(nombre) - u) / 10;
            if (d == 1) {           // onze, douze, treize,...
                x = u;              // le nom du dizaine dépend de l'unité
                xzaine = ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix_sept', 'dix_huit', 'dix_neuf'];
                alert(nombre + " en lettre s'écrit ==> " + xzaine[x]);
            } else if (d == 7) {         // soixante-dix, soixante-onze,...
                x = u;
                xzaine = ['soixante_dix', 'soixante_onze', 'soixante_douze', 'soixante_treize', 'soixante_quatorze', 'soixante_quinze', 'soixante_seize', 'soixante_dix_sept', 'soixante_dix_huit', 'soixante_dix_neuf'];
                alert(nombre + " en lettre s'écrit ==> " + xzaine[x]);
            } else if (d == 9) {         // quatre-vingt-dix...
                x = u;
                xzaine = ['quatre_vingt_dix', 'quatre_vingt_onze', 'quatre_vingt_douze', 'quatre_vingt_treize', 'quatre_vingt_quatorze', 'quatre_vingt_quinze', 'quatre_vingt_seize', 'quatre_vingt_dix_sept', 'quatre_vingt_dix_huit', 'quatre_vingt_dix_neuf'];
                alert(nombre + " en lettre s'écrit ==> " + xzaine[x]);
            } else {                // les autres sont régulier(ex: 28 => vingt + huit)
                unite = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
                dizaine = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante_dix', 'quatre_vingt', 'quatre_vingt_dix'];
                alert(nombre + " en lettre s'écrit ==> " + dizaine[d] + "_" + unite[u]);
            }
            break;
        case 3:
            u = (parseInt(nombre)) % 10;
            d = ((parseInt(nombre) - u) / 10) % 10;
            c = (parseInt(nombre) - u - (d * 10)) / 100;
            if (d == 1) {           // onze, douze, treize,...
                x = u;
                xzaine = ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix_sept', 'dix_huit', 'dix_neuf'];
                centaine = [' ', 'cent', 'deux_cent', 'trois_cent', 'quatre_cent', 'cinq_cent', 'six_cent', 'sept_cent', 'huit_cent', 'neuf_cent'];
                alert(nombre + " en lettre s'écrit ==> " + centaine[c] + "_" + xzaine[x]);
            } else if (d == 7) {         // soixante-dix, soixante-onze,...
                x = u;
                xzaine = ['soixante_dix', 'soixante_onze', 'soixante_douze', 'soixante_treize', 'soixante_quatorze', 'soixante_quinze', 'soixante_seize', 'soixante_dix_sept', 'soixante_dix_huit', 'soixante_dix_neuf'];
                centaine = [' ', 'cent', 'deux_cent', 'trois_cent', 'quatre_cent', 'cinq_cent', 'six_cent', 'sept_cent', 'huit_cent', 'neuf_cent'];
                alert(nombre + " en lettre s'écrit ==> " + centaine[c] + "_" + xzaine[x]);
            } else if (d == 9) {         // quatre-vingt-dix...
                x = u;
                xzaine = ['quatre_vingt_dix', 'quatre_vingt_onze', 'quatre_vingt_douze', 'quatre_vingt_treize', 'quatre_vingt_quatorze', 'quatre_vingt_quinze', 'quatre_vingt_seize', 'quatre_vingt_dix_sept', 'quatre_vingt_dix_huit', 'quatre_vingt_dix_neuf'];
                centaine = [' ', 'cent', 'deux_cent', 'trois_cent', 'quatre_cent', 'cinq_cent', 'six_cent', 'sept_cent', 'huit_cent', 'neuf_cent'];
                alert(nombre + " en lettre s'écrit ==> " + centaine[c] + "_" + xzaine[x]);
            } else {                // les autres sont régulier(ex: 128 => cent + vingt + huit)
                unite = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
                dizaine = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante_dix', 'quatre_vingt', 'quatre_vingt_dix'];
                centaine = ['', 'cent', 'deux_cent', 'trois_cent', 'quatre_cent', 'cinq_cent', 'six_cent', 'sept_cent', 'huit_cent', 'neuf_cent'];
                alert(nombre + " en lettre s'écrit ==> " + centaine[c] + "_" + dizaine[d] + "_" + unite[u]);
            }
            break;
        default:
            if (nbr.length == 0) {
                alert("misaotra anao nandray anjara!")
            } else {
                alert("Tsy mety fa avereno indray mandeha azafady!")
            }

    }
}
var nbr;
do {
    nbr = prompt("mampidira nombre anelanelani 0 hataminy 999 :");
    enLettre(nbr);
} while (nbr.length != 0);
