loadText = document.querySelector('.loadingText')
bg = document.querySelector('.background')
button = document.getElementById('homeButton')

let showButton = false;

load = 0

int = setInterval(blurring, 30)

blurring()

function blurring() {

    button = !button;
    load++
    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`

    loadText.style.opacity = 1 - load/100


    bg.style.filter = `blur(${30 - (load/100)*30}px)`

}

// function buttonShow() {
//     if (showButton) {
//         button.classList.remove('homeButton')
//     }
// }

