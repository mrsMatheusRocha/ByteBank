import selecionaCotacao from "./imprimeCotacao.js";

const graficoDolar = document.getElementById("graficoDolar");

const graficoParaDolar = new Chart(graficoDolar, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Dólar',
            data: [],
            borderWidth: 1
        }]
    }
});

function geraHorario() {
    let data = new Date();
    let horario = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
    return horario;
}

function adicionarDados(grafico, legenda, dados) {
    grafico.data.labels.push(legenda);
    grafico.data.datasets.forEach((dataset) => {
        dataset.data.push(dados)
    })
    grafico.update();
}

let workerDolar = new Worker('./script/workers/workerDolar.js');
workerDolar.postMessage("usd");

workerDolar.addEventListener("message", e => {
    let tempo = geraHorario();
    let valor = e.data.ask;
    adicionarDados(graficoParaDolar, tempo, valor);
    selecionaCotacao("dolar", valor);
})

const graficoIene = document.getElementById('graficoIene');
const graficoParaIene = new Chart(graficoIene, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Iene',
            data: [],
            borderWidth: 1
        }]
    }
})

let workerIene = new Worker("./script/workers/workerIene.js");
workerIene.postMessage("iene");
workerIene.addEventListener("message", e => {
    let tempo = geraHorario();
    let valor = e.data.ask;
    adicionarDados(graficoParaIene, tempo, valor);
    selecionaCotacao("iene", valor);
})

const graficoRublo = document.getElementById('graficoRublo');
const graficoParaRublo = new Chart(graficoRublo, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Rublo',
            data: [],
            borderWidth: 1
        }]
    }
})

let workerRublo = new Worker("./script/workers/workerRublo.js");
workerRublo.postMessage("rublo");
workerRublo.addEventListener("message", e => {
    let tempo = geraHorario();
    let valor = e.data.ask;
    adicionarDados(graficoParaRublo, tempo, valor);
    selecionaCotacao("rublo", valor);
})