document.getElementById('ratingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const rating = document.querySelector('input[name="rating"]:checked').value;

    // Enviar dados para o banco de dados (exemplo usando fetch)
    fetch('API_URL/submitRating', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Avaliação enviada com sucesso!');
    })
    .catch(error => {
        console.error('Erro ao enviar avaliação:', error);
    });
});