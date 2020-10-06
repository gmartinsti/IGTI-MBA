window.addEventListener('load', start); 
function start() {
    function calcImc(){
    // pegando o id do formulario
    var formulario = document.getElementById("formulario")
    var resultado = document.getElementById('resposta')	
        
    var kilos  		= +formulario.kilos.value
    var metros 		= +formulario.metros.value
    var centimetros = +formulario.centimetros.value
        
    var altura = (metros * 100 + centimetros) / 100
     
    var imc = kilos / (altura * altura)
    
    
    formulario.imc.value = imc.toFixed(2)
    
    if(imc < 20)
    {
        resposta.innerHTML = "Você esta abaixo do peso!";
     
    } 
    else if(imc >20 && imc <= 25)
    {
        resposta.innerHTML = "Peso Ideal"
    }
    else if(imc >25 && imc <= 30)
    {
        resposta.innerHTML = "Sobrepeso"
    }
    else if(imc >30 && imc <= 35)
    {
        resposta.innerHTML = "Obesidade Moderada"
    }
    else if(imc >35 && imc <= 40)
    {
        resposta.innerHTML = "Obesidade Severa"
    }
    else if(imc >40 && imc <= 50)
    {
        resposta.innerHTML = "Obesidade Morbida"
    }
    else
    {
        resposta.innerHTML = 'Gordinho'
    }
}
}
export default { calcImc };
