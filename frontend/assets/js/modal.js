document.addEventListener('DOMContentLoaded', () => {
    const modal = new bootstrap.Modal(document.getElementById('contractModal'));

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
        modal.show();
    });

    // Limpa os campos do formulário ao fechar o modal
    modal._element.addEventListener('hidden.bs.modal', () => {
        document.getElementById('hiringName').value = '';
        document.getElementById('fee').value = '';
        document.getElementById('eventDate').value = '';
        document.getElementById('address').value = '';
    });

    // Fechar o modal ao pressionar a tecla Escape
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modal.hide();
        }
    });

    // Lidar com o envio do formulário de contratação
    const contractForm = document.getElementById('contractForm');
    contractForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impedir o envio do formulário por padrão

        // Obter os valores dos campos
        const hiringName = document.getElementById('hiringName').value;
        const fee = document.getElementById('fee').value;
        const eventDate = document.getElementById('eventDate').value;
        const address = document.getElementById('address').value;

        // Verificar se todos os campos estão preenchidos
        if (hiringName.trim() === '' || fee.trim() === '' || eventDate.trim() === '' || address.trim() === '') {
            alert('Por favor, preencha todos os campos antes de enviar.');
            return;
        }

        // Realizar a requisição POST para inserir a contratação
        axios.post('http://localhost:3000/insertHirings', {
            artistId: document.getElementById('artistIdModal').value,
            hiringName,
            fee,
            eventDate,
            address
        })
            .then((response) => {
                if (response.status === 200) {
                    alert('Contratação realizada com sucesso!');
                    // Limpar os campos do formulário após o envio bem-sucedido
                    contractForm.reset();
                    // Fechar o modal corretamente
                    modal.hide();
                } else {
                    throw new Error('Erro ao cadastrar a contratação');
                }
            })
            .catch((error) => {
                console.error(error);
                alert('Ocorreu um erro ao cadastrar a contratação. Por favor, tente novamente.');
            });
    });

    // Fechar o modal ao clicar no botão "Fechar"
    const closeButton = document.querySelector('#contractModal .modal-header .btn-close');
    closeButton.addEventListener('click', () => {
        modal.hide();
    });
});
