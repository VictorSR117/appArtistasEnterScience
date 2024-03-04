document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('searchInput');

    input.addEventListener('input', () => {
        const value = input.value.toLowerCase();
        input.value = value;
    });
});
