const button = document.querySelector("button");
const poupup = document.querySelector(".poupup-wrapper");

button.addEventListener("click", function(){
  poupup.classList.add('d-block');
})

poupup.addEventListener("click", function(event) {
  const classOfClickElement = event.target.classList[0];
  const clasNameListArray = ["popup-close", "poupup-link", "poupup-wrapper"];

  const isClassList = clasNameListArray.includes(classOfClickElement);

  if(isClassList) {
    poupup.classList.remove('d-block')
  }

})