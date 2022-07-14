//  propriété "disabled"
// let Txt = document.querySelector("#txt");            // déjà un ID tsy mila selector, tsy mila addEvent
txt.disabled = true;


// proprité "value" (input, button, textarea)
txtarea.addEventListener('focus', (e) =>                    // focus: ciblé un element
    e.target.value = "vous avez le focus", true);           // true pour capture
txtarea.addEventListener('blur', (e) =>                     // blur: annuler le ciblage
    e.target.value = "vous ne l'avez plus!", true);         // true pour capture


// proprité "checked"
let caz = document.querySelectorAll("input");               // Tout les input dans le document

let safidy = () => {
    for (let i = 0; i < caz.length; i++) {          // tsy asiagna ";" tsony afarani "i++"
        if (caz[i].type == "radio" && caz[i].checked) {     // "==" satria comparaison; "&&" oprérateur ET
            alert("la case coché est la case numero: " + caz[i].value);
        }
    }
}


// selectedIndex et options (list déroulante)
lista.addEventListener('change', () =>
    // on affiche le contenu de l'element selectionner
    alert(lista.options[lista.selectedIndex].innerHTML),
    true);


// Submit et reset (formulaire)
myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("nalefanao ny formulaire! \n Kanefa nibloqueko de tsy misy zavatra tokony hiova amnio page io")
}, true);

myForm.addEventListener('reset', () =>
    alert(" namerina nameno formulaire ianao!")
    , true);




