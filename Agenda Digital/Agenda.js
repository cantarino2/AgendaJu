function adicionarGastoFixo() {
    const descricao = document.getElementById('gastoFixo').value;
    const valor = document.getElementById('valorFixo').value;

    if (descricao && valor) {
        const li = document.createElement('li');
        li.innerHTML = `${descricao}: R$ ${parseFloat(valor).toFixed(2)}`;
        document.getElementById('listaGastosFixos').appendChild(li);

        document.getElementById('gastoFixo').value = '';
        document.getElementById('valorFixo').value = '';
    }
}

function adicionarGastoVariavel() {
    const descricao = document.getElementById('gastoVariavel').value;
    const valor = document.getElementById('valorVariavel').value;

    if (descricao && valor) {
        const li = document.createElement('li');
        li.innerHTML = `${descricao}: R$ ${parseFloat(valor).toFixed(2)}`;
        document.getElementById('listaGastosVariaveis').appendChild(li);

        document.getElementById('gastoVariavel').value = '';
        document.getElementById('valorVariavel').value = '';
    }
}
