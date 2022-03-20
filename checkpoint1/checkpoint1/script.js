/* if usuário apertar submit , ciar uma variavel 
let novoCard = document.createElement 
console log (novoCard);

ciar no html estrutura do card
*/

//Criando uma função para capturar info dos usuários 
let botao = document.querySelector("#submit");
botao.addEventListener("click",function(e){
    e.preventDefault();

    const tituloCard = document.querySelector("#entrada1");
    const imagem = document.querySelector("#entrada2");
    const texto = document.querySelector("#entrada3");
   
    let titulo = tituloCard.value;
    let img = imagem.value;
    let txt = texto.value;

    console.log(titulo, img, txt);
    
});

//Criando um novo Card
//let novoCard = document.createElement('div');


//novoCard.innerHTML = `
//<div class="card"> 
    //<h2>titulo</h2>
    //<img src="img">
    // <p>
    // txt
    // </p>
 //</div>`;

//Quando for necessário exibir o card inteiro
 //novoCard.appendChild(card1);

 //let inserirImg = document.querySelectorAll('img');
 //let novoCard = document.querySelectorAll('h2');
 //SetAtribute= Adiciona um novo atributo ou modifica o valor 
 //let link = inserirImg.setAtribute("src", link);
