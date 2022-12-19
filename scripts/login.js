let val = JSON.parse(localStorage.getItem('key')) || []
let email = document.getElementById('input1')
let password = document.getElementById('input2')
let button = document.getElementById('b1')
let forgotpassword = document.getElementById('forgot')
let body = document.querySelector('body')

function toggle() {
    let container = document.querySelector('body').classList.add('containershow')
    let loginhover = document.getElementById('loginhover').classList.add('loginhovershow')
}


button.addEventListener("click", () => {
    if (email.value === '') {
        alert('Fill the Email')
    }
    else if (password.value === '') {
        alert('Fill the Password')
    }

    else if (email.value != '' && password.value != '') {
        let temp = false
        for (let i = 0; i < val.length; i++) {
            if (val[i].email === email.value && val[i].password === password.value) {
                temp = true
                break;

            } else {
                temp = false

            }
        }
        if (temp === true) {
            alert('LOGIN SUCCESFUL')
        }
        if (temp === false) {
            alert('INCORRECT EMALID OR PASSWORD')
        }
    }
})
