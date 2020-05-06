async function getMarsWeather() {
  const response = await axios.get("https://api.nasa.gov/insight_weather/?api_key=oXj5PnRzPch835WTgoThSVfQdftEDm8WsqJsM4e4&feedtype=json&ver=1.0");
  console.log(response.data);
  for (let key in response.data) {
    let card = document.createElement('div')
    card.innerHTML = `For SOL Day ${key}, the lowest temperature was ${response.data[key].AT.mn}. The maximum temperature was ${response.data[key].AT.mx}.`
    document.getElementById('container').appendChild(card)
  }
  console.log(response)
}
getMarsWeather();