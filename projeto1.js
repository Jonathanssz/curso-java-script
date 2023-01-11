function verificarEntrada() {
    nomeConvidado = document.getElementById('nome').value;
    convidadosJonathan = ['Luiz', 'Gabriel', 'Sabrina', 'Cecília', 'Manu'];

    if (convidadosJonathan.includes(nomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode entrar!';
    } else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode entrar!';
    }
}