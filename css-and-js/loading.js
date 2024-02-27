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
    loadText.style.opacity = 0.7

    bg.style.filter = "blur(10px)"

}

