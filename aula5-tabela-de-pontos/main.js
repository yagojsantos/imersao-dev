let extensaoAceita = ["PNG","png","JPEG","jpeg","JPG","jpg"];
const listaJogadores = [];
const elementoTabela = document.querySelector("#tabela-jogadores");
let empate = 0;

function adicionarJogador(){
    const campoNomeJogador = document.querySelector("#nome-jogador");
    const campoImgJogador = document.querySelector("#img-jogador");
    let nomeJogador = campoNomeJogador;
    let imgJogador = campoImgJogador;
    let status ="";

    if (nomeJogador.value!="" && imgJogador.value!="") {
           
        for (let v = 0; v < extensaoAceita.length; v++) {
            if ((imgJogador.value).endsWith(extensaoAceita[v])==true) {
                status="valida";
                break;
            }
            
        }
        if (status=="valida") {
            listaJogadores.push({
                imagem:imgJogador.value,
                nome:nomeJogador.value,
                vitorias: 0,
                empates: empate,
                derrotas: 0,
                pontos:0
            });
            //limpando campos
            nomeJogador.value="";
            imgJogador.value="";
            //invocando função de exibir
            exibirTabela();
        } else {
            alert("Extesão inválida. Por favor, insira uma imagem com um dos seguintes formatos (.png, .jpeg, .jpg)!");
        }
        
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}

function exibirTabela(){
    const elementoTabela = document.querySelector("#tabela-jogadores");
    elementoTabela.innerHTML="";
    for (let l = 0; l < listaJogadores.length; l++) {
        elementoTabela.innerHTML += `
        <tr>
            <td><img src="${listaJogadores[l].imagem}"></td>
            <td>${listaJogadores[l].nome}</td>
            <td>${listaJogadores[l].vitorias}</td>
            <td>${listaJogadores[l].empates}</td>
            <td>${listaJogadores[l].derrotas}</td>
            <td>${listaJogadores[l].pontos}</td>
            <td><button onClick="adicionarVitoria(${l})">Vitória</button></td>
            <td><button onClick="adicionarEmpate()">Empate</button></td>
            <td><button onClick="adicionarDerrota(${l})">Derrota</button></td>
            <td><button onClick="limparPontos(${l})">Zerar</button></td>
        </tr>
        `  
    }
}

function adicionarVitoria(index) {
    listaJogadores[index].vitorias++;
    listaJogadores[index].pontos = listaJogadores[index].pontos + 3;
    exibirTabela();
  }
  
  function adicionarEmpate() {
    empate = empate + 1;
    for (let i = 0; i < listaJogadores.length; i++) {
        listaJogadores[i].empates=empate;
        listaJogadores[i].pontos++;
        
    }
        
    exibirTabela();
  }
  
  function adicionarDerrota(index) {
    listaJogadores[index].derrotas++;
    exibirTabela();
  }
  
  function limparPontos(index) {
    listaJogadores[index].vitorias = 0;
    listaJogadores[index].derrotas = 0;
    listaJogadores[index].pontos = 0;
    exibirTabela();
  }