var campoFiltro = document.querySelector("#filtrar-tabelaa");

campoFiltro.addEventListener("input", function(){
    var clientes = document.querySelectorAll(".cliente");

    //verifica se há um termo de busca

    if(this.value.length > 0){
        for(var cli=0; cli < clientes.length; cli++){
            var nome = clientes[cli].querySelector(".cli").textContent;
            
            var expressao = new RegExp(this.value, "i");

            //Verifica os clientes para filtrar a tabela
            //if(nome != this.value){
            if(!expressao.test(nome)){
                clientes[cli].classList.add("invisivel");
            } else {
                clientes[cli].classList.remove("invisivel");
            }
        }
    } else {
        for(var cli=0; cli < clientes.length; cli++){
            clientes[cli].classList.remove("invisivel");
        }
    }

})