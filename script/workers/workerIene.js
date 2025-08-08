async function fetchAPI() {
  const conecta = await fetch("https://economia.awesomeapi.com.br/last/JPY-BRL");
  const resposta = await conecta.json();
  postMessage(resposta.JPYBRL);
}

addEventListener("message", e => {
  fetchAPI();
  setInterval(() => fetchAPI(), 5000);
})
