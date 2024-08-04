

const key = "56e6b43abe919fec0b87d0cbba596823"

function exibirDados(dados) {
    document.querySelector(".city").innerHTML = dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".prevtxt").innerHTML = dados.weather[0].description

    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
}


async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())

    exibirDados(dados)

}



function buttonClick() {
    const cidade = document.querySelector(".input-city").value

    buscarCidade(cidade)
}

