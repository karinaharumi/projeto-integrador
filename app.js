function MostrarCampoPesquisar(){
    let campo = document.querySelector("#campo")
    if (campo.style.display == "inline"){
        campo.style.display = "none"
    }else{
        campo.style.display = "inline"
    }
}