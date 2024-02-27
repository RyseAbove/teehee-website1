loadText = document.querySelector('.loadingText')

bg = document.querySelector('.background')

load = 0

int = setInterval(blurring, 30)

blurring()

function blurring() {

    load++
    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`

    loadText.style.opacity = 1 - load/100


    bg.style.filter = `blur(${30 - (load/100)*30}px)`

}

