// Fonction pour générer une couleur aléatoire en hexadécimal
function getRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner les éléments
    const colorBox = document.getElementById('color-box')
    const changeColorBtn = document.getElementById('change-color-btn')
    
    //  un écouteur d'événement au bouton
    changeColorBtn.addEventListener('click', function () {
        // Changer la couleur d'arrière-plan de la boîte
        colorBox.style.backgroundColor = getRandomColor()
    })
})
