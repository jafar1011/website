const loginr=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginr.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginr.classList.remove('active')
})

matched=false;

document.getElementById("accsignin").onclick=function(){
    if(document.getElementById("emailbox").value =="" || document.getElementById("passwordbox1").value ==""){
    alert("Please fill in all the fields");}
    else{
        alert("Signed in successfully")
        window.location.href="index.html";
        
    }
}

document.getElementById("accsignup").onclick=function(){
    if(document.getElementById("text1").value =="" || document.getElementById("text2").value =="" || document.getElementById("password1").value =="" || document.getElementById("password2").value ==""){
    alert("Please fill in all the fields");}
    else{
        if(document.getElementById("password1").value == document.getElementById("password2").value){
        alert("Signed up successfully")
        window.location.href="index.html";}
        else{
            alert("Passwords do not match");
        }
        
    }
}


document.getElementById("checkbox1").onclick=function(){
    if(document.getElementById("checkbox1").checked){
        document.getElementById("passwordbox1").type= 'text';
    }
    else {
        document.getElementById("passwordbox1").type= 'password';
    }
}

document.getElementById("checkbox2").onclick=function(){
    if(document.getElementById("checkbox2").checked){
        document.getElementById("password1").type= 'text';
        document.getElementById("password2").type= 'text';
    }
    else {
        document.getElementById("password1").type= 'password';
        document.getElementById("password2").type= 'password';
    }
}

document.getElementById("accountproductbtn").onclick=function(){
    localStorage.setItem("pagec",1);
}
document.getElementById("accountcartbtn").onclick=function(){
    localStorage.setItem("pagec",0);
}