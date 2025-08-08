async function fetchAPI() {
  const conecta = await fetch("https://economia.awesomeapi.com.br/last/RUB-BRL");
  const resposta = await conecta.json();
  postMessage(resposta.RUBBRL);
}

addEventListener("message", e => {
  fetchAPI();
  setInterval(() => fetchAPI(), 5000);
})
