function dark_mode() {
    let main = document.querySelector('body')
    main.classList.toggle('dark-theme')
}

const togBtn = document.querySelector('.toggle')
togBtn.addEventListener('click', ()=> {
    dark_mode()
})


function addData(e) {
    e.preventDefault()
    let data_items = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('msg').value
    }
    console.log(data_items)
}



const btn = document.getElementById('frm-btn')
btn.addEventListener('click', (e)=>{
    e.preventDefault()
    addData(e)

})