function adicionarFilme(){
    const campoNomeFilme = document.querySelector("#nome-filme");
    const campoUrlFilme = document.querySelector("#filme");
    const campoTrailerFilme = document.querySelector("#trailer-filme");
    const btnAdicionarFilme = document.querySelector("#btn-adicionar-filme");
    const divListaFilmes = document.querySelector("#lista-filmes");
    let extensaoAceita = ["PNG","png","JPEG","jpeg","JPG","jpg"];
    let listaNomes = ["Teste"];
    let listaUrl = ["https://s2.glbimg.com/rUZ6iOFK81TmuSlq1w6WLBh68SM=/362x536/https://s2.glbimg.com/nG3Bh6hAKSSKcF6xLeSUFL8PaBM=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2021/T/R/NEwrt0RkyOGTAmyNmUyQ/1498208-poster.jpg"];
    let listaTrailer = ["https://www.youtube.com/watch?v=04F4xlWSFh0"];
    let nomeFilme = "";
    let urlFilme ="";
    let trailerFilme ="";
    let frase ="";
    let status ="";
    
    btnAdicionarFilme.addEventListener("click",()=>{
        nomeFilme = campoNomeFilme.value;
        urlFilme = campoUrlFilme.value;
        trailerFilme = campoTrailerFilme.value;
        
       if(nomeFilme!="" && urlFilme!="" && trailerFilme !=""){
            //estrutura de validação da extenção inserida
            for (let v = 0; v < extensaoAceita.length; v++) {
                
                if (urlFilme.endsWith(extensaoAceita[v])==true) {
                    status="valido";
                    break;
                }
                
            }
            if (status=="valido") {
                listaNomes.push(nomeFilme);
                listaUrl.push(urlFilme);
                listaTrailer.push(trailerFilme);
                frase="Filme cadastrado com sucesso!";            
            }else {

                frase = "Extesão inválida. Por favor, insira um cartaz com a extensão aceita(.png, .jpeg, .jpg)!";
            }

        }else{
            frase="Preencha todos os campos!";
        }

       alert(frase);
       divListaFilmes.innerHTML = divListaFilmes.innerHTML+
       `<div>
            <h4>${listaNomes[listaNomes.length-1]}</h4>
            <a href="${listaTrailer[listaTrailer.length-1]}">
            <img src="${listaUrl[listaUrl.length-1]}">
            </a>
        </div>`;
        campoNomeFilme.value ="";
        campoUrlFilme.value ="";
        campoTrailerFilme.value="";

    });
    for(let s = 0; s < listaNomes.length; s++){
        divListaFilmes.innerHTML = divListaFilmes.innerHTML+
        `<div>
            <h4>${listaNomes[s]}</h4>
            <a href="${listaTrailer[s]}">
            <img src="${listaUrl[s]}">
            </a>
        </div>`;
    }
}

