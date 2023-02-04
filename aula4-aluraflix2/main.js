function gerenciarFilmes(){
    const campoAdicionarFilme = document.querySelector("#adicionar-filme");
    const campoRemoverFilme = document.querySelector("#remover-filme");
    const campoUrlFilme = document.querySelector("#filme");
    const campoTrailerFilme = document.querySelector("#trailer-filme");
    const btnAdicionarFilme = document.querySelector("#btn-adicionar-filme");
    const btnRemoverFilme = document.querySelector("#btn-remover-filme");
    const divListaFilmes = document.querySelector("#lista-filmes");
    let extensaoAceita = ["PNG","png","JPEG","jpeg","JPG","jpg"];
    let listaNomes = ["CREED"];
    let listaUrl = ["https://br.web.img2.acsta.net/pictures/15/10/14/14/58/220036.jpg"];
    let listaTrailer = ["https://www.youtube.com/watch?v=661sQScpXJc"];
    let frase ="";
    let status ="";
    let nomeFilme ="";
    let urlFilme = "";
    let trailerFilme = "";

    renderizar();
    
    btnAdicionarFilme.addEventListener("click",()=>{
        nomeFilme = campoAdicionarFilme.value;
        urlFilme = campoUrlFilme.value;
        trailerFilme = campoTrailerFilme.value;
        let i = 0;
        
       if(nomeFilme!="" && urlFilme!="" && trailerFilme !=""){
            //estrutura de validação da extenção inserida
            for (let v = 0; v < extensaoAceita.length; v++) {
                
                if (urlFilme.endsWith(extensaoAceita[v])==true) {
                    status="valido";
                    break;
                }
                
            }
            if (status=="valido") {
                while(i<listaNomes.length){
                    if(listaNomes[i]==nomeFilme){
                        status = "repetido";
                        break;
                    }else {
                        i++;
                    }
                }
                if(status=="repetido"){
                    frase = "Já existe um filme com este nome. Por favor, tente outro!";
                }else{
                    listaNomes.push(nomeFilme);
                    listaUrl.push(urlFilme);
                    listaTrailer.push(trailerFilme);
                    frase="Filme cadastrado com sucesso!";  
                    divListaFilmes.innerHTML = divListaFilmes.innerHTML+
                    `<div id="${nomeFilme}">
                         <h4>${listaNomes[listaNomes.length-1]}</h4>
                         <a href="${listaTrailer[listaTrailer.length-1]}">
                         <img src="${listaUrl[listaUrl.length-1]}">
                         </a>
                     </div>`;
                     campoAdicionarFilme.value ="";
                     campoUrlFilme.value ="";
                     campoTrailerFilme.value="";
                }          
            }else {

                frase = "Extesão inválida. Por favor, insira um cartaz com a extensão aceita(.png, .jpeg, .jpg)!";
            }

        }else{
            frase="Preencha todos os campos!";
        }
       alert(frase);
    });


    btnRemoverFilme.addEventListener("click",()=>{
        let nomeFilme = campoRemoverFilme.value;
        
        if (nomeFilme!="") {
            
            for (let e = 0; e < listaNomes.length; e++) {
                
                if (listaNomes[e]==nomeFilme) {
        
                    let rm = document.getElementById(nomeFilme);
                    divListaFilmes.removeChild(rm)
                    listaNomes.splice([e],1);
                    listaUrl.splice([e],1);
                    listaTrailer.splice([e],1);
                    frase = "Filme excluído com sucesso!";
                    campoRemoverFilme.value="";
                    break;
                }else{
                    frase = "Filme não encontrado!";
                }
                
            }
        }else{
            frase = "Por favor, insira o nome do filme a ser excluído!"
        }
        alert(frase);

    });
    function renderizar(){
        for(let s = 0; s < listaNomes.length; s++){
            divListaFilmes.innerHTML = divListaFilmes.innerHTML+
            `<div id="${listaNomes[s]}">
                <h4>${listaNomes[s]}</h4>
                <a href="${listaTrailer[s]}">
                <img src="${listaUrl[s]}">
                </a>
            </div>`;
        }
    }
   
}

