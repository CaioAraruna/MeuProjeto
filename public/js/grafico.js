var contextoGrafico1 = document.getElementById('graficoPizza_lado').getContext('2d');
var labels = [];
var contagem = [];

var grafico1 = new Chart(contextoGrafico1, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            data: contagem,  // Proporções das fatias
            backgroundColor: [],
            borderWidth: 1
        }]
    },
    options: {
        // Configurações adicionais do gráfico
    }
});

async function dados1() {
    try {
        const response = await fetch("/grafico/posicao", { method: "GET" });
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

async function testeDados() {
    try {
        var dados = await dados1();
        console.log(dados);
        labels = [];
        contagem = [];

        for (i in dados.dados){
            labels.push(dados.dados[i].posicao);
            contagem.push(dados.dados[i]["COUNT(posicao)"]);
        }
    
        grafico1.data.labels = labels;
         grafico1.data.datasets[0].data = contagem;
         grafico1.data.datasets[0].backgroundColor = coresAleatorias();

         grafico1.update();

        console.log("Dados do gráfico", dados);
        return grafico1;
    } catch (error) {
        console.error("Erro ao obter dados", error);
        throw error;
    }
}

     function resetarGrafico(){
         var grafico = testeDados();
    }

testeDados();

function coresAleatorias(contador){
    var cores = [];
    for(var i = 0; i < contador; i++){
        cores.push(hexadecimal());
    }
}


function hexadecimal(){
    var caracteres = "0123456789ABCDEF";
    var cor = "#";

    for(var i = 0; i < 6; i++){
        cor += caracteres[Math.floor(Math.random()*16)];
    }
    return cor;
}

