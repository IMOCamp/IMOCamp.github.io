function signup(){
    document.getElementById('signup').innerHTML='還不快加入啊？';
    setTimeout("javascript:location.href='signup.html'", 3000);
}
setTimeout("signup()", 3000);
