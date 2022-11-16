function recuperarDatoDeUrl(url){
    if(url.indexOf('?') > 0){
        return url.split('?')[1];
    }
    return "N/N";
}

window.addEventListener("load", (e)=>{
    let obj = document.getElementById("titulo");
    obj.innerText = "Bienvenido: "+recuperarDatoDeUrl(window.location.href);})