function mentalizar(){
    const inputNumPensado = document.querySelector("#num-pensado");
    const btnVerificar = document.querySelector("#btn-verificar");
    const divHistorico = document.querySelector(".historico");
    const numSecreto = parseInt(Math.random()*1000);
    const maximoTentativas = 18;
    let contTentativa = 0 ;

    btnVerificar.addEventListener("click",()=>{
        let valorNumPensado = parseInt(inputNumPensado.value);
        let saida = "";

        if(isNaN(valorNumPensado)==false){
            contTentativa++;

            if (contTentativa<maximoTentativas+1) {

                if(valorNumPensado>numSecreto){
                    saida= `O número secreto é MENOR do que ${valorNumPensado}.\nTetativa n° ${contTentativa}`; 
                }else if(valorNumPensado<numSecreto){
                    saida= `O número secreto é MAIOR do que ${valorNumPensado}.\nTetativa n° ${contTentativa}`;
                }else{
                    saida=`Parabéns, você acertou!\nTetativa n° ${contTentativa}`;
                }
                //limpando campo de tentativa
                inputNumPensado.value="";

                //saida após processamento
                alert(saida);
                
                // exibição dos números tentados
                divHistorico.innerHTML = divHistorico.innerHTML+`<p>Tentativa n° ${contTentativa} - ${valorNumPensado}</p>`;


            }else{
                alert(`Você excedeu o número de tentativas :/\nO número era: ${numSecreto}`);
                //forçando o recarregamento da página
                window.location.reload(true);
            }
            
        }else{
            alert("Por favor, isira um número válido!");
        }
    })
}