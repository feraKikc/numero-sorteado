let listaDeNumeroSorteado = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag); 
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
        if (chute == numeroSecreto) {
            exibirTextoNaTela('h1', 'Parabéns!');
            let palavraTentativa = tentativas > 1 ? "tentativas" : 'tentativa';
            let mensagem = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`;
            exibirTextoNaTela('p',mensagem);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (chute > numeroSecreto) {
                exibirTextoNaTela('p','número secreto é menor');
            } else {
                exibirTextoNaTela('p','número secreto é maior');
            }
            tentativas++;
            limparCampo();
        }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 ); 
   let quantidadeDeElementosNaLista = listaDeNumeroSorteado.length;
   
   if (quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumeroSorteado = [];
   }

   if (listaDeNumeroSorteado.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
   } else{
    listaDeNumeroSorteado.push(numeroEscolhido);
    console.log(listaDeNumeroSorteado);
    return numeroEscolhido;
   }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = null;
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}