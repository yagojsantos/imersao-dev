<h1 align="center"> Imersão Dev 6° Edição</h1>

<div align="center">

  <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-aluraflix.svg" alt="Logo da Imersão Dev">
  <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-aluraflix.svg#vitrinedev" width="0px" alt="Logo da Imersão Dev">
  
</div>

<br>

<p align="center">Um maravilhoso evento online e totalmente gratuito para quem quer decolar no mundo tech ! <strong></strong> </p>

<div align="center">

![yagojsantos-repo-status](https://img.shields.io/badge/Status-Concluído-lightgrey?style=for-the-badge&logo=headspace&logoColor=green&color=lightgrey)

</div>

<hr>

## Geral
Os projetos presentes neste repositório são fruto da junção entre a base, fornecida em cada videoaula, e as modificações pertinentes para a conclusão dos desafios. Há também, alguns incrementos provindos de pesquisas e aprendizado de novas funções, elementos, etc.

## Projetos

   <div style="margin:10px 0">
    <h3 align="center">Aula 1</h3>
    <div><img src="https://github.com/yagojsantos/imersao-dev/blob/main/aula1-conversor-de-moedas/Conversor%20de%20Moedas%20yagojsantos.gif" width="100%"></div>
    <div>
    <p><strong>Proposta: </strong>Criar um conversor de moedas onde é possível transformar em real, um produto que esteja com o preço em dólar!</p>
    <p><strong>Alterações: </strong>A fim de tornar o projeto mais completo e dinâmico, implementei um input do tipo texto para a coleta de informação ao invés de utilizar o prompt, conforme a aula. Também incluí mais opções de moedas a serem convertidas, através de um drop-down list, e adicionei verificações de preenchimento para que o programa tenha o devido funcionamento quando o botão “Converter” for ativado.</p>
    <p><strong>Deploy: </strong><a href="https://conversor-de-moedas-yagojsantos.netlify.app/">Conversor de Moedas</a></p>
    </div>
   </div>
  <div style="margin:10px 0">
    <h3 align="center">Aula 2</h3>
    <div><img src="https://github.com/yagojsantos/imersao-dev/blob/main/aula2-jogo-mentalista/O%20Mentalista%20yagojsantos.gif" width="100%"></div>
    <div>
    <p><strong>Proposta: </strong>Criar um jogo de adivinhação onde o programa escolhe um número aleatório e o usuário tenta acertar.</p>
    <p><strong>Alterações: </strong>Implementei inputs do tipo text e button para interação com usuário. O programa verifica se o usuário preencheu o campo e se a informação inserida é do tipo numérico. 
    Além de dar o retorno caso a tentativa  não seja válida, o software não permite que esse chute contabilize no número total de chances (18). 
    Caso a informação inserida seja validada, o usuário terá acesso a dados importantes para suas próximas decisões, tais como: se o seu palpite está acima ou abaixo do objetivo, quantos chutes já foram e um histórico de palpites anteriores.
    </p>
    <p><strong>Deploy: </strong><a href="https://jogo-mentalista-yagojsantos.netlify.app/">O Mentalista</a></p>
    </div>
   </div>
   <div style="margin:10px 0">
    <h3 align="center">Aula 3</h3>
    <div><img src="https://github.com/yagojsantos/imersao-dev/blob/main/aula3-aluraflix/Aluraflix%20yagojsantos.gif" width="100%"></div>
    <div>
    <p><strong>Proposta: </strong>Criar uma lista com o filme preferido de cada pessoa e exibir os pôsteres de cada um na tela do navegador, seguindo as boas práticas de programação.</p>
    <p><strong>Alterações: </strong>Incluí inputs do tipo text e button para que seja possível a inserção de novos links através da interface, não somente por código. 
    O programa verifica se o campo não está vazio antes de executar o cadastro do novo cartaz, além de não permitir a inserção de URLs repetidas.
    </p>
    <p><strong>Deploy: </strong><a href="https://aluraflix-yagojsantos.netlify.app/">Aluraflix</a></p>
    </div>
   </div>
   <div style="margin:10px 0">
    <h3 align="center">Aula 4</h3>
    <div><img src="https://github.com/yagojsantos/imersao-dev/blob/main/aula4-aluraflix2/Aluraflix%202%20yagojsantos.gif" width="100%"></div>
    <div>
    <p><strong>Proposta: </strong>Utilizar um input para que a entrada de dados não seja através do código ou console, mas na tela.  Refatorar o projeto da aula anterior para continuar integrando o HTML e o JavaScript, fazendo com que as partes certas do programa funcionem no momento correto.</p>
    <p><strong>Alterações: </strong>Foi criado os inputs para inserção do nome e link do teaser do filme. O software não executa o cadastro em casos como: todos os campos não estejam preenchidos, a extensão do link do cartaz não seja num formato válido (.png, .jpeg, .jpg), ou se já existe um título cadastrado com o mesmo nome.
    Um campo e um botão para remoção, também foram elaborados. Antes de executar a exclusão do elemento, o programa verifica se o campo de texto está preenchido e, caso esteja, se existe um filme com o nome desejado.
    Em todas situações a aplicação dá um retorno ao usuário por meio de um alert.
    </p>
    <p><strong>Deploy: </strong><a href="https://aluraflix2-yagojsantos.netlify.app/">Aluraflix 2</a></p>
    </div>
   </div>
   <div style="margin:10px 0">
    <h3 align="center">Aula 5 - Final :/</h3>
    <div><img src="https://github.com/yagojsantos/imersao-dev/blob/main/aula5-tabela-de-pontos/Tabela%20de%20pontos%20yagojsantos.gif" width="100%"></div>
    <div>
    <p><strong>Proposta: </strong>Criar uma tabela de classificação, manipular os valores, realizar cálculos, incluir no HTML e aprender o que são objetos no Javascript!</p>
    <p><strong>Alterações: </strong>Com base nos desafios feitos durante a aula, desenvolvi funcionalidades e verificações importantes para o devido funcionamento do software.
    Foi incluído dois campos e um novo botão para que seja possível, a inserção de jogadores através da interface do programa, não somente por código. 
    Há verificações que impedem o cadastro de um novo player nos seguintes casos: o campo de nome e imagem não estejam preenchidos, o link da imagem do jogador não esteja em um formato válido (.png, .jpeg, .jpg).
    Uma lógica para contabilizar os empates, também foi elaborada. Quando o botão de empate é clicado, a contagem é atualizada para todos os players, independentemente de qual jogador o botão pertence. Essa contagem também é exibida caso um novo usuário seja inserido no meio de um jogo, onde já existe uma quantidade contada, porém, apenas o número de empates é imputado a este jogador, a pontuação não.
    Por último, mas não menos importante, foi codificado uma opção de zerar a pontuação para cada jogador. 
    </p>
    <p><strong>Deploy: </strong><a href="https://tabela-de-pontos-yagojsantos.netlify.app/">Tabela de Pontos</a></p>
    </div>
   </div>



   
