
function enviarForm(e){
    e.preventDefault()

    const nomePet = (document.getElementById('nomePet')).value

    console.log(typeof (nomePet));

    if(nomePet != "string" || nomePet == null || nomePet == ""){
        alert("Nome do pet está vazio ou incorreto");
    }
}