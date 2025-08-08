async function fetchAPI() {
  const conecta = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL");
  const resposta = await conecta.json();
  postMessage(resposta.USDBRL);
}

addEventListener("message", () => {
  fetchAPI();
  setInterval(() => fetchAPI(), 5000);
})