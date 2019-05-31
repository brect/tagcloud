//get modal
var modal = document.getElementById("primeiro-modal");

//get the button that opens the modal
var btn = document.getElementById("btn");

//get <span> tha closes the modal
var span = document.getElementsByClassName("fecha-modal")[0];


//abre modal ao clicar no botão
btn.onclick = function () {
    modal.style.display = "block";
}

//fechar modal ao clicar no span
span.onclick = function(){
    modal.style.display = "none";
}

//fechar modal quando usuário clicar fora do modal
window.onclick = function(){
    if(event.target == modal){
        modal.style.display = "none";
    }
}