const formPet = document.getElementById('formPet');
 
const validarNome = document.querySelector("#name");

const submit =  document.querySelector(".submit");

const erroName = document.querySelector(".erro")

submit.addEventListener("click", (e)=> {
    e.preventDefault();

    const valorNome = validarNome.value;

    if (valorNome === ""){
        erroName.textContent = "Por favor preencha";
    }

});