var botaoAdicionar = document.querySelector("#Adicionar-encomenda");

botaoAdicionar.addEventListener("click",function(event){

    event.preventDefault();

    // captura o formulário da pagina
    var form = document.querySelector("#form-adiciona");

    // captura os dados da nova encomenda
    var encomenda = obtemEncomenda(form);

    // Valida se a encomendapode ser inserida
    if(validaEncomenda(encomenda).length >0){
        console.log(validaEncomenda(encomenda));
    } else {
        //Insere a nova encomenda na tabela
        addEncomenda(encomenda);

        //limpa o formulario
        form.reset();
    }
});

//Função para capturar os dados da nova encomenda
function obtemEncomenda(dadosForm){

    var encomenda = {
        nome: dadosForm.nomecliente.value,
        qtde: dadosForm.qtdeE.value,
        produto: dadosForm.prodE.value,
        unitario: dadosForm.Vunitario.value,
    }

    return encomenda;
}

// Função para adicionar a nova encomenda na tabela
function addEncomenda(novaEncomenda){
    /* 
        1. Montar as TDs
        3. Criar uma TR
        3. Colocar as TDs na TR
        4. Colocar a TR na TABLE
    */
    
    var tabela = document.querySelector("#tabela-clientes");

    tabela.appendChild(montaTR(novaEncomenda));
}

// Monta uma coluna nova
function montaTD(dado){

    var td = document.createElement("td");
    td.textContent = dado;

    return td;
}

//Monta um nova TR
function montaTR(novaEncomenda){

    var tr = document.createElement("tr");

    tr.appendChild(montaTD(novaEncomenda.nome));
    tr.appendChild(montaTD(novaEncomenda.qtde));
    tr.appendChild(montaTD(novaEncomenda.produto));
    tr.appendChild(montaTD(formataValor(parseFloat(novaEncomenda.unitario))));
    tr.appendChild(montaTD(calculaTotal(novaEncomenda.qtde, novaEncomenda.unitario)));

    return tr;
}

//Função para validação da quantidade e do unitário
function validaEncomenda(encomenda){

    var erros =[];

    //Verifica se o nome foi informado
    if(encomenda.nome==""){
        erros.push("O nome não pode ser vazio");
    }

    //Verifica se a quantidade é maior que zero e um número
    if(encomenda.qtde <=0 || isNaN(encomenda.qtde)){
        erros.push("A quantidade deve ser numérica e maior que zero");
    }

    //Verifica se a quantidade é maior que zero e um número
    if(encomenda.qtde <=0 || isNaN(encomenda.unitario)){
        erros.push("A quantidade deve ser numérica e maior que zero");
    }

    return erros;
}