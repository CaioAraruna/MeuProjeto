
function simular() {
  var altura = input_altura.value;
  var peso = input_peso.value;
  var time = input_time.value;
  var lado = input_lado.value;
  var posicao = "";

  

  if (lado == "Ataque" && altura <= 180 && peso > 75 & peso <= 100) {
    div_resultado.innerHTML = `Você poderia ser um Running Back no ${time} "COLOCAR IMAGEM DE ALGUM JOGADOR"`;
    posicao = "Running Back";
  }

  if (lado == "Ataque" && altura > 180 && peso < 100) {
    div_resultado.innerHTML = `Você poderia ser um Wide Receiver no ${time} "COLOCAR IMAGEM DE ALGUM JOGADOR"`
    posicao = "Wide Receiver";
  }

  if (lado == "Ataque" && altura >= 188 && peso < 100) {
    div_resultado.innerHTML = `Você poderia ser um Quaterback no ${time} "COLOCAR IMAGEM DE ALGUM JOGADOR"`
    posicao = "Quaterback";
  }

  if (lado == "Ataque" && altura >= 188 && peso > 100) {
    div_resultado.innerHTML = `Você poderia ser um jogador de linha no ${time} "COLOCAR IMAGEM DE ALGUM JOGADOR"`
    posicao = "OL";
  }

  if (lado == "Defesa" && altura < 180 && peso < 100) {
    div_resultado.innerHTML = `Você poderia ser um Safety no ${time} "COLOCAR IMAGEM DE ALGUM JOGADOR"`
    posicao = "Safety";
  }

  if (lado == "Defesa" && altura > 180 && peso < 100) {
    div_resultado.innerHTML = `Você poderia ser um Corner Back no ${time} "COLOCAR IMAGEM DE ALGUM JOGADOR"`
    posicao = "Corner Back";
  }

  if (lado == "Defesa" && altura > 185 && peso >= 100) {
    div_resultado.innerHTML = `Você poderia ser um LineBacker no ${time} "COLOCAR IMAGEM DE ALGUM JOGADOR"`
    posicao = "LineBacker";
  }

  if (lado == "Defesa" && altura > 190 && peso >= 110) {
    div_resultado.innerHTML = `Você poderia ser um Defensive Line no ${time} "COLOCAR IMAGEM DE ALGUM JOGADOR"`
    posicao = "Defensive Line";
  }


  fetch("/simular", {
    method:"POST",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify({
      posicaoServer: posicao,
      timeServer: time
    })
  })
  resetarGrafico();
}
