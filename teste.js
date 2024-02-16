//Captura todos os clientes
var clientes = document.querySelectorAll(".cliente")

//passa por cada encomenda, calculando o valor da repetição
for (var count=0; count < clientes.length; count++){
    //captura a quantidade encomendada
    var qtde = clientes[count].querySelector(".qtd").textContent;

    //captura o valor unitario do produto
    var unitario = clientes[count].querySelector(".valor").textContent;

    //Calcula o valor total da encomenda
    clientes[count].querySelector(".total").textContent = calculaTotal(qtde,unitario);
}

//função para calcular o valor total da encoomenda
function calculaTotal(qtde,unitario){
    var total = 0;
    total=qtde*unitario;

    return total;
}