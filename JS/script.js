function dark_mode() {
    let main = document.querySelector('body')
    main.classList.toggle('dark-theme')
}

const togBtn = document.querySelector('.toggle')
togBtn.addEventListener('click', ()=> {
    dark_mode()
})

