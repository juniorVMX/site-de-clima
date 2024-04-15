let chave ='cebcd482eda57fa9a6714c1c2ba91885'

 function colocarnatela(dados){
document.querySelector(".cidade").innerHTML="tempo em " + dados.name
document.querySelector(".tempo").innerHTML = Math.floor(dados.main.temp) +"°C" 
document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon +".png"
document.querySelector(".umidade").innerHTML= "umidade " + dados.main.
humidity+"%"
}

function cliqueinobotao() {
    let cidade = document.querySelector(".input-cidade").value
    buscarcidade(cidade)
}

 async function buscarcidade(cidade){
 let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric").then( resposta => resposta.json())
 console.log(dados)

 colocarnatela(dados)
}
