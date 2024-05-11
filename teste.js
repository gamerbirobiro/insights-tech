//Captura todos os clientes
var clientes = document.querySelectorAll(".cliente")

//passa por cada encomenda, calculando o valor da repetição
for (var count = 0; count < clientes.length; count++){
    //captura a quantidade encomendada
    var qtde = clientes[count].querySelector(".qtd").textContent;

    //captura o valor unitario do produto
    var unitario = clientes[count].querySelector(".valor").textContent;

    //muda a cor caso o valor seja nulo
    if(qtde < 1 || isNaN(qtde)){
        clientes[count].querySelector(".qtd").textContent = "Qtde inválida";
        clientes[count].querySelector(".qtd").style.color="red";
    }else{ 
        clientes[count].querySelector(".valor").textContent = formataValor(parseFloat(unitario));
        clientes[count].querySelector(".total").textContent = calculaTotal(qtde,unitario);
        
    } 
    if (unitario < 1 || isNaN(qtde)){
        clientes[count].querySelector(".valor").textContent = "valor inválido";
        clientes[count].style.backgroundColor = "red";
        clientes[count].querySelector(".qtd").style.color="white";
    }
}

//função para calcular o valor total da encoomenda
function calculaTotal(qtde,unitario){
    var total = 0;
    total=qtde*unitario;

    return formataValor(total);
}

function valida(qtde,unitario){
    var qtd = 0;
    
}

function formataValor(valor){

    return valor.toLocaleString("pt-br", {style: 'currency', currency: 'BRL'});
}

//funcão de adicionar linha

// var botaoAdicionar = document.querySelector("#adicionar-encomenda");

// botaoAdicionar.addEventListener("click", function(event){
//     event.preventDefault();
//     console.log("Agora sim, o botão foi clicado!");
// });


