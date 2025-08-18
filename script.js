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
