
// dark mode function
function dark_mode() {
    let main = document.querySelector('body')
    main.classList.toggle('dark-theme')
}
// event listener to the button
const togBtn = document.querySelector('.toggle')
togBtn.addEventListener('click', ()=> {
    dark_mode()
})

// creates a new object with the values submitted, logs it to console
function addData(e) {
    e.preventDefault()
    let data_items = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('msg').value
    }

    // checks if data fields are empty, if they are, the form will not submit, and will display a nice message
    let name =  data_items.name
    let email =  data_items.email
    let message =  data_items.message

    if (name.length > 0 && email.length > 0 && message.length > 0) {
        console.log(data_items)
    }
    else {
        alert('THERE IS SOMETHING MISSING! FILL IN THE MISSING FIELD, OR ELSE......')
    }



}




// button click will submit the data thru addData function
const btn = document.getElementById('frm-btn')
btn.addEventListener('click', (e)=>{
    e.preventDefault()
    addData(e)

})