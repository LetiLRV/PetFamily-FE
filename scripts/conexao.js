const apiUrl = 'http://localhost:3000'

async function listarPet() {
    try {
        const response = await fetch(`${apiUrl}/pets`);
        const data = await response.json();

        // Verificar se temos pets para mostrar
        const pets = Array.isArray(data) ? data : [];
        console.log(pets[0])
        /* const petsContainer = document.getElementById("pets-container");
        petsContainer.innerHTML = ""; // Limpa a área antes de adicionar os novos

        pets.forEach(pet => {
            const petCard = document.createElement("div");
            petCard.classList.add("pet-card");
            petCard.innerHTML = `
                <h3>${pet.nome}</h3>
                <p><strong>Espécie:</strong> ${pet.especie}</p>
                <p><strong>Sexo:</strong> ${pet.sexo === "m" ? "Masculino" : "Feminino"}</p>
                <p><strong>Data de Nascimento:</strong> ${new Date(pet.nascimento).toLocaleDateString()}</p>
                <p><strong>Raça:</strong> ${pet.raca}</p>
                <p><strong>Porte:</strong> ${pet.porte}</p>
                <p><strong>Comportamento:</strong> ${pet.comportamento}</p>
            `;
            petsContainer.appendChild(petCard);
        }); */
    } catch (error) {
        console.log(error);
    }
}
