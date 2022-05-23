const moeda = async () => {
  const requisicao = await fetch('https://economia.awesomeapi.com.br/json/all');
  const requestJson = await requisicao.json();
  return requestJson;
};

export default moeda;
