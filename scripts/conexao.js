const apiUrl = "http://localhost:3000"

async function listarPet() {
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();

        const pet = Array.isArray(data) ? data[0]:data;

        console.log(pet)

    } catch(error){
        console.log(error)
    }
}