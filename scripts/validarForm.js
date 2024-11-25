
function enviarForm(e){
    e.preventDefault()

    const nomePet = (document.getElementById('nomePet')).value

    console.log(typeof (nomePet));

    if(typeof nomePet != "string" || nomePet == null || nomePet == ""){
        console.log("Nome do pet está vazio ou incorreto");
    }
}