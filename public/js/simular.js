var altura = input_altura.value;
var peso = input_peso.value;
var time = input_time.value;
var lado = input_lado.value;

function simular(){
    altura = input_altura.value;
    peso = input_peso.value;
    time = input_time.value;
    lado = input_lado.value;

    fetch("/simular", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          alturaServer: altura,
          pesoServer: peso,
          timeServer: time,
          ladoServer: lado,
        })
      })
    }