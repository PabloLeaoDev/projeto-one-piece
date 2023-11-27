// Quando o código for de estudo, defina antes de codar o que vai ser feito (objetivos); criar a lógica, o algoritmo
// const botoes = window.document.getElementsByClassName('botao');
const botoes = window.document.querySelectorAll('.botao');
const personagens = window.document.querySelectorAll('.personagem');

//vai selecionar um por um na lista de botões
botoes.forEach((botao, indice) => {
    // recebe um evento, nesse caso, o click
    botao.addEventListener('click', () => {
        desselecionarBotao(); // refaturei o código; função de escopo global
        desselecionarPersonagem();
        // adiciona a classe selecionado no botão que foi clicado
        botao.classList.add('selecionado');
        // adiciona a classe selecionado na div que foi clicada
        personagens[indice].classList.add('selecionado');
    });
})

function desselecionarPersonagem() {
    const personagemSelecionado = window.document.querySelector('.personagem.selecionado');
    // remove a classe "selecionado" da div que estava com ela anteriormente
    personagemSelecionado.classList.remove('selecionado');
}

function desselecionarBotao() {
    const botaoSeleconado = window.document.querySelector('.botao.selecionado');
    // remove a classe "selecionado" do botão que estava com ela anteriormente
    botaoSeleconado.classList.remove('selecionado');
}
