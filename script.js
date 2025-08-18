// 1. Saudação com alert()
document.getElementById("btnSaudacao").addEventListener("click", function () {
  alert("Olá! Obrigado por visitar meu currículo.");
});

// 2. Mostrar/Ocultar seção
document
  .getElementById("btnToggleSecao")
  .addEventListener("click", function () {
    const secao = document.getElementById("habilidades");
    if (secao.style.display === "none") {
      secao.style.display = "block";
    } else {
      secao.style.display = "none";
    }
  });

// 3. Alterar conteúdo dinamicamente
document
  .getElementById("btnAlterarTexto")
  .addEventListener("click", function () {
    document.getElementById("textoDinamico").innerText =
      "Conteúdo alterado dinamicamente!";
  });

// 4. Coletar e exibir dados de um campo
document.getElementById("btnExibirNome").addEventListener("click", function () {
  const nome = document.getElementById("nome").value;
  document.getElementById("resultadoNome").innerText = `Olá, ${nome}!`;
});

// 5. Canvas simples
function desenharCanvas() {
  const canvas = document.getElementById("meuCanvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#4CAF50";
    ctx.fillRect(90, 20, 100, 80);
    ctx.strokeStyle = "#222";
    ctx.strokeRect(90, 20, 100, 80);
    ctx.font = "20px Arial";
    ctx.fillStyle = "#fff";
    ctx.fillText("Skill!", 120, 65);
  }
}
desenharCanvas();

// ======================
// 1. Saudação com nome
// ======================
const header = document.querySelector("header h1");

// Cria campo de nome e botão dinamicamente
const nomeDiv = document.createElement("div");
nomeDiv.innerHTML = `
  <label for="nomeUsuario" style="color:white; font-size:1.1rem; margin-right:8px;">Digite seu nome:</label>
  <input type="text" id="nomeUsuario" placeholder="Seu nome" style="padding:5px; border-radius:6px;">
  <button id="btnNome" style="margin-left:8px; padding:6px 10px; border:none; border-radius:6px; cursor:pointer; background:#68ee85; font-weight:bold;">Enviar</button>
`;
document.querySelector("main").prepend(nomeDiv);

// Evento para atualizar saudação
document.getElementById("btnNome").addEventListener("click", () => {
  const nome = document.getElementById("nomeUsuario").value;
  if (nome.trim() !== "") {
    header.textContent = `Bem-vindo, ${nome}!`;
    localStorage.setItem("usuarioNome", nome); // salva o nome no navegador
  }
});

// Se já existir nome salvo no localStorage, mostra automaticamente
const nomeSalvo = localStorage.getItem("usuarioNome");
if (nomeSalvo) {
  header.textContent = `Bem-vindo, ${nomeSalvo}!`;
}

// ================================
// 2. Alterar cor de fundo/imagem
// ================================
const btnFundo = document.createElement("button");
btnFundo.textContent = "Alterar Fundo";
btnFundo.style =
  "margin:20px auto; display:block; padding:8px 15px; border:none; border-radius:8px; background:#68ee85; font-weight:bold; cursor:pointer;";
document.querySelector("main").appendChild(btnFundo);

let fundoImagem = false;

btnFundo.addEventListener("click", () => {
  if (!fundoImagem) {
    document.body.style.background =
      "url('https://picsum.photos/1600/900') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
  } else {
    document.body.style.background = "rgb(27,27,27)";
  }
  fundoImagem = !fundoImagem;
});

// ======================
// 3. Contador de visitas
// ======================
let visitas = localStorage.getItem("contadorVisitas");

// Se não existir, inicializa em 0
if (!visitas) {
  visitas = 0;
}

// Incrementa
visitas++;
localStorage.setItem("contadorVisitas", visitas);

// Mostra no rodapé
const footer = document.querySelector("footer");
const contador = document.createElement("p");
contador.style.marginTop = "10px";
contador.textContent = `Número de visitas: ${visitas}`;
footer.appendChild(contador);
