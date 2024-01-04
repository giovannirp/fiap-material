const textUser = document.querySelector("#text-user");
const buttonUser = document.querySelector("#screen-name");
const result = document.querySelector(".result");

buttonUser.addEventListener("click", function(event) {
  event.preventDefault();
  
  result.innerHTML += `<li> Bem vindo, ${textUser.value} </li>`;
})