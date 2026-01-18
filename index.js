const btnE1= document.querySelector(".btn")
const inputEl1= document.getElementById("input")
const copyIconEl1= document.querySelector(".fa-copy")
const showAlart1= document.querySelector(".alert_container")

btnE1.addEventListener("click", ()=>{
    cretePassword()
})


function cretePassword(){
    const chars=
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLength= 8;
    let password="";
    for (let index = 0; index < passwordLength; index++) {
        const randomNum=Math.floor(Math.random() * chars.length)
        password +=chars.substring(randomNum,randomNum+1)

        //console.log(randomNum, password) 
    }  
    inputEl1.value= password;
    showAlart1.innerText = password + " copied!";
}

copyIconEl1.addEventListener("click",()=>{
    copyPassword();
    showAlart1.classList.remove("active");
    setTimeout(()=>{
        showAlart1.classList.add("active");

    },2000)
})

function copyPassword(){
    inputEl1.select();
    //This line for the mobile support uesrs for copy paste;
    inputEl1.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputEl1.value);
}


