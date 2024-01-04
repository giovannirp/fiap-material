const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");

// criando um elemento p
const pMensagem = document.createElement('p');

function clearForm() {
  inputNota.value = "";
}


button.addEventListener("click", function(event) {
  event.preventDefault();
 
  // validações
  if (inputNota.value.trim() === '') {
    pMensagem.textContent = "Campo obrigatório";
    inputNota.insertAdjacentElement("afterend", pMensagem);
    pMensagem.setAttribute("class", "error");
    return false;
  }

  // logica
  if (inputNota.value >= 6) {
    alert("Você está aprovado");
  } else {
    alert("Você está reprovado");
  }
  
  pMensagem.classList.add("d-none");
  clearForm();
});