function enviarFilme(){
    const divFilmes = document.querySelector(".filmes");
    const inputUrlFilme = document.querySelector("#url-filme");
    const btnEnviar = document.querySelector("#btn-enviar");
    let listaFilmes = [
        "https://upload.wikimedia.org/wikipedia/pt/4/47/Jackass_poster.jpg",
"https://legadodadc.com.br/wp-content/uploads/2023/01/shazam-2-poster-oficial-legadodadc.webp",
"https://br.web.img3.acsta.net/pictures/22/03/02/19/26/3666027.jpg",
"https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/29/73/19874041.jpg",
"https://sm.ign.com/ign_br/screenshot/default/pixels-regposter-brazil_p1ja.jpg"];

    btnEnviar.addEventListener("click",()=>{
        let urlFilme = inputUrlFilme.value;
        let statusFilme ="novo";
        let i = 0;
        while(i<listaFilmes.length){
            if(listaFilmes[i]==urlFilme){
                statusFilme = "repetido";
                break;
            }else {
                i++;
            }
        }
        if(statusFilme!=="repetido"){
            listaFilmes.push(urlFilme);
            alert("Filme cadastrado com sucesso!");
            divFilmes.innerHTML = divFilmes.innerHTML + `<img src=${listaFilmes[listaFilmes.length-1]}>`
        }else{
            alert("Esse cartaz já existe, por favor tente outro!");
        }
            inputUrlFilme.value ="";
    });
    listaFilmes.forEach((itemListaFilmes)=>{
        divFilmes.innerHTML = divFilmes.innerHTML + `<img src="${itemListaFilmes}">`
    });
    
}