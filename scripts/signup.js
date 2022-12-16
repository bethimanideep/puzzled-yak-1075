let email = document.getElementById('email')
let password = document.getElementById('password')
let confirm = document.getElementById('confirm')
let last = document.getElementById('last')
let male = document.getElementById('male')
let female = document.getElementById('female')
let birth = document.getElementById('birth')
let month = document.getElementById('month')
let ft = document.getElementById('ft')
let inn = document.getElementById('inn')
let cm = document.getElementById('cm')
let weightnumber = document.getElementById('weightnumber')
let typeofweight = document.getElementById('typeofweight')

let val = JSON.parse(localStorage.getItem('key')) || []

last.addEventListener('click', () => {
    let s = ''
    if (male.checked) {
        s += male.value
    }
    else if (female.checked) {
        s += female.value
    }
    let h = ''
    if (inn.value == 0) {
        h += cm.value + 'cm'
    }
    if (cm.value == 0) {
        h += inn.value + 'inches'
    }

    let data = {
        email: email.value,
        password: password.value,
        confirmpassword: confirm.value,
        gender: s,
        dob: birth.value + '/' + month.value + '/' + year.value,
        height: ft.value + 'feet' + h,
        weight: weightnumber.value + typeofweight.value
    }



    let temp = false
    if (data.email === '') {
        alert('Provide an EMAIL')
    }
    else if(data.password==''){
        alert('Fill The Password')
    }
    else if(data.confirmpassword==''){
        alert('Fill The Confirm Password')
    }
    else if (data.password !== data.confirmpassword) {
        alert('Both Password Not Same')
    }
    else {
        if (val.length === 0) {
            temp = true

        }
        else {
            for (let i = 0; i < val.length; i++) {
                if (val[i].email === data.email) {
                    temp = false
                    break;

                }
                else {
                    temp = true
                }
            }
        }
        if (data.email === '') {
            temp = false
        }
        if (temp === true) {
            val.push(data)
            alert("Sign In Sucessful")
        }
        else {
            if (temp === false) {
                alert('Email is Already exist')
            }
        }

        localStorage.setItem('key', JSON.stringify(val))
    }

})