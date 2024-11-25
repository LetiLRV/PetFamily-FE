function enviarForm(e){
    e.preventDefault()

    const nomePet = (document.getElementById('nomePet')).value;


    if(typeof nomePet != "string" || nomePet == null || nomePet == ""){
        console.log("Nome do pet está vazio ou incorreto");
    }
}
