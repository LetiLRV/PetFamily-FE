const formPet = document.getElementById('formPet');

function nameValidate(){    
    const name = document.getElementById('name');

    if(name.value == ""){
        console.log("O Nome não pode ser nulo");
        alert("coloca a poha de um nome");

    } else{
        console.log("O nome foi preenchido");
    }
}
