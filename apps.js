// creation des fonction pour que ma calculatrice fonctionne

// DOM
const touches = [...document.querySelectorAll('button')];
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');
const entrer = document.querySelector('.entrer');
const resultat = document.querySelector('.resultat');

document.addEventListener('keydown', function (e){
    const valeur = e.keyCode.toString();
    calculer(valeur)

})

document.addEventListener('click', function(e){
    const valeur = e.target.dataset.key;
    calculer(valeur)

})

const calculer = function (valeur){
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message)
})

