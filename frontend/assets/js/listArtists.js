document.addEventListener('DOMContentLoaded', () => {
    const searchResults = document.getElementById('searchResults');

    searchResults.addEventListener('click', (event) => {
        const target = event.target.closest('tr');
        if (!target) return;

        // Obtém os dados do artista clicado
        const artistId = target.querySelector('#artistId').textContent;
        const artistName = target.querySelector('#artistName').textContent;
        const artistGender = target.querySelector('#artistGender').textContent;
        const artistType = target.querySelector('#artistType').textContent;

        // Define os valores do modal com os dados do artista clicado
        document.getElementById('artistIdModal').value = artistId;
        document.getElementById('artistNameModal').value = artistName;
        document.getElementById('artistGenderModal').value = artistGender;
        document.getElementById('artistTypeModal').value = artistType;

        // Abre o modal
        const modal = new bootstrap.Modal(document.getElementById('contractModal'));
        modal.show();
    });
});

const showArtistsInWindow = async artistsList => {
    const resultList = document.getElementById("searchResults");
    resultList.innerHTML = ''; // Limpa o conteúdo anterior

    for (const artist of artistsList) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td id="artistId" class="firstLetterBigger formatItem">${artist.id}</td>
            <td id="artistName" class="firstLetterBigger formatItem">${artist.name}</td>
            <td id="artistGender" class="firstLetterBigger formatItem">${artist.gender}</td>
            <td id="artistType" class="firstLetterBigger formatItem">${artist.type}</td>
        `;
        resultList.appendChild(row);
    }
};

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', async () => {
    const name = searchInput.value.trim();

    try {
        const response = await axios.get(`http://localhost:3000/listArtists?name=${name}`);
        if (response.status === 200) showArtistsInWindow(response.data);
        else throw new Error('Erro ao buscar artistas');
    }
    catch (error) {
        console.error(error);
    }
});
