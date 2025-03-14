function addnew(){
    let lista = document.getElementById("lista")
    let note = prompt("O que pretende fazer hoje?")

    let addNote = `<div>${note} <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckIndeterminate">Concluido</label></div>`
    if (note != null) {
        lista.innerHTML += addNote
    }
    else return
    
}