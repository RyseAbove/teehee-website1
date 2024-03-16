toggle = document.getElementById('toggle')
open = document.getElementById('open')
modal = document.getElementById('modal')
close = document.getElementById('close')

// toggle nav open/close
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})

// show modal
open.addEventListener('click', () => {
    modal.classList.add('show-modal')
})

// close modal
close.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})

// close modal on outside click
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('show-modal')
    }
})
