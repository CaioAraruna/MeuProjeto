var contextoGrafico2 = document.getElementById('grafico_time').getContext('2d');
var labels2 = [];
var contagem2 = [];

var grafico2 = new Chart(contextoGrafico2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [{
            label: "Times Selecionados",
            data: contagem2,  // Proporções das fatias
            backgroundColor: [],
            borderWidth: 1
        }]
    },
    options: {
        // Configurações adicionais do gráfico
    }
});

async function dados2() {
    try {
        const response = await fetch("/grafico/team", { method: "GET" });
        if (!response.ok) {
            throw new Error("Erro!");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro 400", error);
        throw error;
    }
}

 async function testeDados2() {
     try {
         var dados = await dados2();
         console.log(dados);
         labels2 = [];
         contagem2 = [];

         for (i in dados.dados){
             labels2.push(dados.dados[i].team);
             contagem2.push(dados.dados[i]["COUNT(team)"]);
         }
    
         grafico2.data.labels = labels2;
          grafico2.data.datasets[0].data = contagem2;
          grafico2.data.datasets[0].backgroundColor = coresAleatorias2(contagem2.length);

          grafico2.update();

         console.log("Dados do gráfico", dados);
         return grafico2;
     } catch (error) {
         console.error("Erro ao obter dados", error);
         throw error;
     }
 }

     function resetarGrafico2(){
         var grafico2 = testeDados2();
     }

 testeDados2();

 function coresAleatorias2(contador){
     var tamanho = labels2.lenght;
     var cores = [];
     for(var i = 0; i < contador; i++){
         cores.push(hexadecimal2());
     }
     console.log(cores);
    return cores;
 }


 function hexadecimal2(){
     var caracteres = "0123456789ABCDEF";
     var cor = "#";

     for(var i = 0; i < 6; i++){
         cor += caracteres[Math.floor(Math.random()*16)];
     }
     return cor;
 }
