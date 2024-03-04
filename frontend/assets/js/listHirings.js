document.addEventListener('DOMContentLoaded', () => {
    const resultList = document.getElementById('hiringResults');

    const showHiringsInWindow = async hiringsList => {
        resultList.innerHTML = ''; // Limpa o conteúdo anterior

        for (const hiring of hiringsList) {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${hiring.artistName}</td>
                <td>${hiring.artistGender}</td>
                <td>${hiring.artistType}</td>
                <td>${hiring.hiringName}</td>
                <td>${hiring.fee}</td>
                <td>${hiring.eventDate}</td>
                <td>${hiring.address}</td>
            `;
            resultList.appendChild(row);
        }
    };

    const fetchHirings = async () => {
        try {
            const response = await axios.get('http://localhost:3000/listHirings');
            if (response.status === 200) {
                showHiringsInWindow(response.data);
            } else {
                throw new Error('Erro ao buscar contratações');
            }
        } catch (error) {
            console.error(error);
        }
    };

    fetchHirings();
});
