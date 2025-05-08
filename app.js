function sortear () {
    let quant = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let protect = ate - de;

    if (protect <= 0){
      alert("ERRO! Favor inserir um valor maior no campo 'Até número'.");
      return;
    }
    if (quant > protect){
      alert("ERRO! Favor inserir valor menor no campo 'Quantidade de números'.");
      return;
    }

    let numero;
    let sorteados = [];
    for(let i = 0; i < quant; i++){
        numero = obter_numero_aleatorio(de,ate);
        sorteados.push(numero);

        while (sorteados.includes(numero)){
            numero = obter_numero_aleatorio(de,ate);
        }
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    alterar_status_botao();
}

function obter_numero_aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterar_status_botao() {
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
      botao.classList.remove('container__botao-desabilitado');
      botao.classList.add('container__botao');
    }
    else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').value = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterar_status_botao();
}