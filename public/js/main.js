document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    fetch("http://localhost:3000", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
    .then(response => response.json())
    .then(data => {
        alert('Usuário cadastrado com sucesso!');
    })
    .catch(error => {
        console.error('Erro ao cadastrar usuário:', error);
    });
});
