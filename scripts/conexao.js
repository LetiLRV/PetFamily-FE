const apiUrl = 'http://localhost:3000';

async function listarPets(e) {
    e.preventDefault()
    try {
        const response = await fetch(`${apiUrl}/pet`);
        if (!response.ok) throw new Error(`Erro: ${response.status}`);

        const pets = await response.json();
        console.log('Pets cadastrados:', pets);

        const petList = document.createElement('ul');
        pets.forEach((pet) => {
            const li = document.createElement('li');
            li.textContent = `${pet.nome} - ${pet.especie}`;
            petList.appendChild(li);
        });
        document.body.appendChild(petList);

    } catch (error) {
        console.error('Erro ao listar pets:', error);
    }
}

async function inserirPet(pet) {
    try {
        const response = await fetch(`${apiUrl}/pet`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pet),
        });

        if (!response.ok) throw new Error(`Erro ao inserir pet: ${response.status}`);
        
        const data = await response.json();
        console.log('Pet inserido com sucesso:', data);
        alert('Pet cadastrado com sucesso!');

    } catch (error) {
        console.error('Erro ao cadastrar pet:', error);
        alert('Erro ao cadastrar o pet. Verifique o console.');
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
        alert('Dados do pet atualizados com sucesso!');

    } catch (error) {
        console.error('Erro ao atualizar pet:', error);
        alert('Erro ao atualizar os dados do pet. Verifique o console.');
    }
}



