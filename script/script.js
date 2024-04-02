const input_email = document.querySelector("#text_email")
const input_password = document.querySelector("#password") 
const btn_login = document.querySelector("#btn_login")
const text_alert_email = document.querySelector(".message_email")
const text_alert_password = document.querySelector(".message_password")
const form = document.querySelector("#form")
const icon = document.querySelector(".bi-eye-fill")

function validEmail(email){
    const test_email = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,}$/

    return (test_email.test(email))    
}

function validPassword(password){
    return password.length >= 8
}

input_email.addEventListener("keyup",()=>{
    if(validEmail(input_email.value) !== true){
        text_alert_email.textContent = `*Please fill in the email corrently`
    } else {
        text_alert_email.textContent = ""
    }

})

input_password.addEventListener("keyup",()=>{
    if(validPassword(input_password.value) !== true){
        text_alert_password.textContent = `*The password must be at least 8 characters long`
    } else {
        text_alert_password.textContent = ""
    }
})

btn_login.addEventListener("click", ()=>{
    if(input_email.value == "" || input_password.value == ""){
        alert(`
             The email and password fields must be filled in.
        (Os campos de e-mail e senha devem ser preenchidos.)
        `)
    } else if (validEmail(input_email.value) === true && validPassword(input_password.value) === true) {
        input_email.textContent = ""
        input_password.textContent = ""
    }
    
})

icon.addEventListener("click",()=>{
    if(input_password.type === "password"){
        input_password.setAttribute("type","text")
        icon.classList.replace("bi-eye-fill","bi-eye-slash-fill")
    } else {
        input_password.setAttribute("type","password")
        icon.classList.replace("bi-eye-slash-fill","bi-eye-fill")
    }
})

    
