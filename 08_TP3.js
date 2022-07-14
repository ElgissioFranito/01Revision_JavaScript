// Drag and Drop:  Il s'agit d'un système permettant le déplacement d'éléments par un simple déplacement de souris.

// ******************************TP-A********************************************************
let storage = {};
const deplaceDiv = document.querySelectorAll("div");            // ou ".draggableBox"

// tester la valeur dans deplaceDiv
// for (let j = 0; j < 3; j++) {
//     alert(deplaceDiv[j].innerHTML);
// }

for (let i = 0; i < deplaceDiv.length; i++) {
    deplaceDiv[i].addEventListener("mousedown", (e) => {
        let s = storage;
        s.target = e.target;
        s.offsetX = e.clientX - s.target.offsetLeft;
        s.offsetY = e.clientY - s.target.offsetTop;
    }, true);
    deplaceDiv[i].addEventListener("mouseup", () => {
        storage = {};
    })

}

document.addEventListener("mousemove", (e) => {
    const cible = storage.target;
    if (cible) {
        cible.style.top = e.clientY - storage.offsetY + 'px';
        cible.style.left = e.clientX - storage.offsetX + 'px';
    }
}, true);

// ********************************************************************************************





