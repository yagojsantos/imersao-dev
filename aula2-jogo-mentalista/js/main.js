function mentalizar(){
    const inputNumPensado = document.querySelector("#num-pensado");
    const btnVerificar = document.querySelector("#btn-verificar");
    const divHistorico = document.querySelector(".historico");
    const numSecreto = parseInt(Math.random()*1000);
    const maximoTentativas = 2;
    let contTentativa = 0 ;


    alert(`${numSecreto}`);

    btnVerificar.addEventListener("click",()=>{
        let valorNumPensado = inputNumPensado.value;
        let saida = "";
        if(valorNumPensado!=NaN && valorNumPensado!=null){
            contTentativa++;

            if (contTentativa<maximoTentativas+1) {

                if(valorNumPensado>numSecreto){
                    saida= `O número secreto é MENOR do que ${valorNumPensado}.\nTetativa n° ${contTentativa}`; 
                }else if(valorNumPensado<numSecreto){
                    saida= `O número secreto é MAIOR do que ${valorNumPensado}.\nTetativa n° ${contTentativa}`;
                }else{
                    saida=`Parabéns, você acertou!\nTetativa n° ${contTentativa}`;
                }
                inputNumPensado.value="";
                alert(saida);
                
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