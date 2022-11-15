function desactivarFormularios(){
    let formularios = document.getElementsByClassName("container-centrado");

    for(let item of formularios){
        item.style.display = "none";
    }
}

function activarFormulario(id){
    desactivarFormularios();

    let obj = document.getElementById(id);
    obj.style.display = "block";
}

var btnNuevo = document.getElementById("btn-nuevo-guardia");
btnNuevo.addEventListener("click", function(){activarFormulario("nuevo-guardia");}, false);

var btnSeleccion = document.getElementById("btn-seleccion-guardia");
btnSeleccion.addEventListener("click", function(){activarFormulario("seleccion-guardia");}, false);