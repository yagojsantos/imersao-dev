function conterMoeda(){
    const btnConverter = document.querySelector("#btn-converter");
    const valorMoeda = document.querySelector("#valor-moeda");
    const listaMoeda = document.querySelector("#lista-moedas");
    var cotacao = 0.0;
    var opcaoListaMoeda = null;
    var quantiaMoeda = null;

    listaMoeda.addEventListener("click",()=>{
        // capturando o valor da opção selecionada
        opcaoListaMoeda = listaMoeda.options[listaMoeda.selectedIndex].value;

        if(opcaoListaMoeda=="dolar"){
            
            valorMoeda.setAttribute("placeholder","$ Valor");
            cotacao = 5.07;

        }else if(opcaoListaMoeda=="euro"){

            valorMoeda.setAttribute("placeholder","€ Valor");
            cotacao = 5.53;

        }else if(opcaoListaMoeda=="libra-esterlina"){

            valorMoeda.setAttribute("placeholder","£ Valor");
            cotacao = 6.25;
        }else{
            valorMoeda.setAttribute("placeholder","Moeda...")
        }

    })

    btnConverter.addEventListener("click",()=>{
        let saida = "";
        quantiaMoeda = parseFloat(valorMoeda.value);
        if(opcaoListaMoeda!=null && isNaN(quantiaMoeda)==false && quantiaMoeda>0){
            let valorConvertido = cotacao*quantiaMoeda;
            saida = `A converção em real é igual à: R$${valorConvertido.toFixed(2)}\nÚltima data de atualização das cotações: 01/02/2023`;
            // limpando campo de texto e resetando a lista para a primeira opção
            valorMoeda.value="";
            listaMoeda.selectedIndex=0;
        } else{
            saida = `Preencha os campos com valores válidos!`
        }
        alert(saida);
        
    })

    
}