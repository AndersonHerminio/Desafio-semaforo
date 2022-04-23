const luzes = {
  vermelho: document.getElementById("luz-vermelho"),
  amarelo: document.getElementById("luz-amarelo"),
  verde: document.getElementById("luz-verde"),
};
let luzAtiva = "verde";

let tempo = 0;

setInterval(() => {
  tempo++;

  if (luzAtiva === "verde" && tempo >= 10) {
    luzAtiva = "amarelo";
    tempo = 0;

    luzes.verde.classList.remove("verde");
    luzes.amarelo.classList.add("amarelo");
  }

  if (luzAtiva === "amarelo" && tempo === 5) {
    luzAtiva = "vermelho";
    tempo = 0;

    luzes.amarelo.classList.remove("amarelo");
    luzes.vermelho.classList.add("vermelho");
  }

  if (luzAtiva === "vermelho" && tempo === 15) {
    luzAtiva = "verde";
    tempo = 0;

    luzes.vermelho.classList.remove("vermelho");
    luzes.verde.classList.add("verde");
  }
}, 1000);

const fecharSinal = () => {
  if (luzAtiva !== "verde") {
    return;
  }

  tempo += 8;
};
