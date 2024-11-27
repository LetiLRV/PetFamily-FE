const apiUrl = 'http://localhost:3000';

async function listarPets() {
    try {
        const response = await fetch(`${apiUrl}/pet`);
        if (!response.ok) throw new Error(`Erro: ${response.status}`);

        const data = await response.json();
        console.log("Dados recebidos da API:", data);

        const petListContainer = document.querySelector(".mostrarPets");
        petListContainer.innerHTML = ''; 

        data.forEach((pet) => {
            const li = document.createElement('li');
            li.textContent = `${pet.nomePet} (${pet.nomeEspecie}) - ${pet.nomeRaca} - ${pet.sexo} - ${pet.porte} - ${pet.nascimento}`;


            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.onclick = () => preencherFormularioEdicao(pet);


            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';
            deleteButton.onclick = () => excluirPet(pet.idPet);


            li.appendChild(editButton);
            li.appendChild(deleteButton);
            petListContainer.appendChild(li);
        });
    } catch (error) {
        console.error('Erro ao listar pets:', error);
    }
}

async function inserirPet() {

    const nome = document.getElementById("nome").value;
    const especie = document.getElementById("especie").value;
    const idade = document.getElementById("idade").value;
    const raca = document.getElementById("raca").value;


    const sexo = document.querySelector('input[name="genero"]:checked')?.value;

   
    const porte = document.querySelector('input[name="porte"]:checked')?.value;


    console.log("Valores para cadastro:", nome, especie, idade, raca, sexo, porte);


    if (!nome || !especie || !idade || !raca || !sexo || !porte) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const pet = {
        nome,
        idEspecie: especie,
        nascimento: idade,
        idRaca: raca,
        sexo,
        idPorte: porte,
    };

    try {

        const response = await fetch(`${apiUrl}/pet`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(pet),
        });

        if (!response.ok) throw new Error(`Erro ao inserir pet: ${response.status}`);

        const data = await response.json();
        console.log("Pet inserido com sucesso:", data);


        listarPets();

        document.getElementById("formPet").reset();

        alert("Pet cadastrado com sucesso!");
    } catch (error) {
        console.error("Erro ao cadastrar pet:", error);
        alert("Erro ao cadastrar pet. Tente novamente.");
    }
}




function preencherFormularioEdicao(pet) {
    const nomePet = prompt("Editar nome do pet:", pet.nome);
    const especie = prompt("Editar espécie (Digite um dos números | 3 = Felino - 4 = Canino):", pet.idEspecie);
    const raca = prompt("Editar raça (Digite um dos números | 3 = Shih Tzu - 4 = Siamês):", pet.idRaca );
    const sexo = prompt("Editar sexo (M/F):", pet.sexo);
    const porte = prompt("Editar porte (Digite um dos números | 2 = Pequeno - 3 = Médio - 4 = Grande):", pet.idPorte);
    const nascimento = prompt("Editar nascimento (YYYY-MM-DD):", pet.nascimento);


    if (nomePet && especie && raca && sexo && porte && nascimento) {
        const petAtualizado = {
            nome: nomePet,
            idEspecie: especie,
            nascimento,
            idRaca: raca,
            sexo,
            idPorte: porte,
        };


        atualizarPet(pet.idPet, petAtualizado);
    }
}


async function atualizarPet(idPet, petAtualizado) {
    try {
        const response = await fetch(`${apiUrl}/pet/${idPet}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(petAtualizado),
        });

        if (!response.ok) throw new Error(`Erro ao atualizar pet: ${response.status}`);

        const data = await response.json();
        console.log('Pet atualizado com sucesso:', data);

        listarPets();
    } catch (error) {
        console.error('Erro ao atualizar pet:', error);
    }
}


async function excluirPet(idPet) {
    try {
        const response = await fetch(`${apiUrl}/pet/${idPet}`, {
            method: 'DELETE',
        });

        if (!response.ok) throw new Error(`Erro ao excluir pet: ${response.status}`);
        
        console.log(`Pet com ID ${idPet} excluído com sucesso.`);
        alert("Pet excluído com sucesso!");

        listarPets();
    } catch (error) {
        console.error('Erro ao excluir pet:', error);
    }
}

listarPets();  