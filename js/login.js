const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.passwor.value

    if(authenicated){
        alert("correct")
    }
    else{
        alert("wrong")
    }
})


function authentication (username,password){
    if(username === "admin" && password === "password"){
        return true
    }
    else{
        return false
    }
}