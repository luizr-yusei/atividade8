
/* ==================================
   BANCO DE DADOS DOS JOGADORES
================================== */

const jogadores = {

    isagi: {
        nome: "Yoichi Isagi",
        imagem: "isagi.jpg",
        idade: "17 anos",
        altura: "175 cm",
        arma: "Metavisão e adaptação",
        time: "Bastard München",
        posicao: "Atacante",

        descricao:
            "Yoichi Isagi é um jogador inteligente e estratégico. Sua principal habilidade é analisar o campo, prever movimentos dos adversários e encontrar oportunidades para marcar gols."
    },

    rin: {
        nome: "Rin Itoshi",
        imagem: "rin.jpg",
        idade: "16 anos",
        altura: "186 cm",
        arma: "Precisão e controle de bola",
        time: "Paris X Gen",
        posicao: "Atacante",

        descricao:
            "Rin Itoshi é um dos jogadores mais habilidosos do Blue Lock. Possui grande precisão, controle de bola e capacidade de dominar o jogo."
    },

   
barou: {
    nome: "Shoei Barou",
    imagem: "barou.jpg",
    idade: "18 anos",
    altura: "187 cm",
    arma: "Poder físico, chute e finalização",
    time: "Ubers",
    posicao: "Atacante",

    descricao:
        "Shoei Barou é conhecido como o Rei do Blue Lock. Possui grande força física, velocidade e um chute poderoso. Seu estilo de jogo é marcado pela confiança e pelo desejo de dominar o campo."
},

shidou: {
    nome: "Ryusei Shidou",
    imagem: "shidou.png",
    idade: "18 anos",
    altura: "185 cm",
    arma: "Instinto e finalização acrobática",
    time: "Paris X Gen",
    posicao: "Atacante",

    descricao:
        "Ryusei Shidou é um atacante extremamente imprevisível. Possui instinto ofensivo excepcional e capacidade de marcar gols em posições difíceis, utilizando movimentos acrobáticos e finalizações surpreendentes."
}
}


/* ==================================
   ELEMENTOS DO MODAL
================================== */

const modal = document.getElementById("modalJogador");

const imagemJogador = document.getElementById("imagemJogador");

const imagemFallback = document.getElementById("imagemFallback");


/* ==================================
   ABRIR PERFIL DO JOGADOR
================================== */

function abrirJogador(id) {

    const jogador = jogadores[id];

    if (!jogador) {
        console.error("Jogador não encontrado!");
        return;
    }

    // Informações principais

    document.getElementById("nomeJogador").textContent =
        jogador.nome;

    document.getElementById("descricaoJogador").textContent =
        jogador.descricao;

    document.getElementById("idadeJogador").textContent =
        jogador.idade;

    document.getElementById("alturaJogador").textContent =
        jogador.altura;

    document.getElementById("armaJogador").textContent =
        jogador.arma;

    document.getElementById("timeJogador").textContent =
        jogador.time;

    document.getElementById("posicaoJogador").textContent =
        jogador.posicao;


    // Carregar imagem

    imagemJogador.style.display = "block";
    imagemFallback.hidden = true;

    imagemJogador.src = jogador.imagem;
    imagemJogador.alt = "Imagem de " + jogador.nome;

    imagemJogador.onerror = function() {

        imagemJogador.style.display = "none";
        imagemFallback.hidden = false;

    };


    // Mostrar janela

    modal.classList.add("ativo");

    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

}


/* ==================================
   FECHAR PERFIL
================================== */

function fecharJogador() {

    modal.classList.remove("ativo");

    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}


/* ==================================
   CLIQUE NOS JOGADORES
================================== */

const botoesJogadores = document.querySelectorAll("[data-jogador]");

botoesJogadores.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const id = this.dataset.jogador;

        abrirJogador(id);

    });

});


/* ==================================
   BOTÃO DE FECHAR
================================== */

document.getElementById("fecharModal").addEventListener(
    "click",
    fecharJogador
);


/* ==================================
   FECHAR CLICANDO FORA
================================== */

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        fecharJogador();

    }

});


/* ==================================
   FECHAR COM ESC
================================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape" && modal.classList.contains("ativo")) {

        fecharJogador();

    }

});


/* ==================================
   SISTEMA DE TREINAMENTO
================================== */

const btnIniciar = document.getElementById("btnIniciar");

const btnParar = document.getElementById("btnParar");

const indicadorStatus = document.getElementById("indicadorStatus");

const tituloStatus = document.getElementById("tituloStatus");

const descricaoStatus = document.getElementById("descricaoStatus");

const mensagemControle = document.getElementById("mensagemControle");


/* INICIAR TREINAMENTO */

btnIniciar.addEventListener("click", function() {

    indicadorStatus.className = "status-indicador online";

    tituloStatus.textContent = "Treinamento iniciado";

    descricaoStatus.textContent = "Sistema de treinamento em funcionamento.";

    mensagemControle.textContent =
        "O treinamento Blue Lock foi iniciado com sucesso!";

});


/* PARAR TREINAMENTO */

btnParar.addEventListener("click", function() {

    indicadorStatus.className = "status-indicador offline";

    tituloStatus.textContent = "Treinamento interrompido";

    descricaoStatus.textContent = "Sistema de treinamento parado.";

    mensagemControle.textContent =
        "O treinamento foi interrompido.";

});
