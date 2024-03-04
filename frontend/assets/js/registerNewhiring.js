document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contractForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Obter os valores do formulário
        const artistId = document.getElementById('artistId').value;
        const hiringName = document.getElementById('hiringName').value;
        const fee = document.getElementById('fee').value;
        const eventDate = document.getElementById('eventDate').value;
        const address = document.getElementById('address').value;

        // Realizar a requisição POST para inserir a contratação
        try {
            const response = await axios.post('http://localhost:3000/insertHirings', {
                artistId,
                hiringName,
                fee,
                eventDate,
                address
            });

            if (response.status === 200) {
                alert('Contratação realizada com sucesso!');
                // Limpar os campos do formulário após o envio bem-sucedido
                form.reset();
                // Fechar o modal
                const modal = bootstrap.Modal.getInstance(document.getElementById('contractModal'));
                modal.hide();
            } else {
                throw new Error('Erro ao cadastrar a contratação');
            }
        } catch (error) {
            console.error(error);
            alert('Ocorreu um erro ao cadastrar a contratação. Por favor, tente novamente.');
        }

        return false; // Evita o comportamento padrão do formulário
    });
});
