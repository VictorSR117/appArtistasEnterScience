document.addEventListener('DOMContentLoaded', () => {
    const showHiringsInWindow = async hiringsList => {
        const resultList = document.getElementById("hiringResults");
        resultList.innerHTML = ''; // Limpa o conteúdo anterior

        for (const hiring of hiringsList) {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${hiring.id}</td>
                <td>${hiring.artist_id}</td>
                <td>${hiring.hiring_name}</td>
                <td>${hiring.fee}</td>
                <td>${hiring.event_date}</td>
                <td>${hiring.address}</td>
            `;
            resultList.appendChild(row);
        }
    };

    const fetchHirings = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/listHirings`);
            if (response.status === 200) showHiringsInWindow(response.data);
            else throw new Error('Erro ao buscar contratações');
        } catch (error) {
            console.error(error);
        }
    };

    const hringsListening = document.getElementById('listAllHiringsBtn');

    if (hringsListening) {
        hringsListening.addEventListener('click', async () => {
            fetchHirings();
        });
    } else {
        console.error('Elemento com ID listAllHiringsBtn não encontrado.');
    }
});
