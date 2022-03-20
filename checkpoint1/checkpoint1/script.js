/* if usuário apertar submit , ciar uma variavel 
let novoCard = document.createElement 
console log (novoCard);

ciar no html estrutura do card
*/

//Criando uma função para capturar info dos usuários 
let botao = document.querySelector("#submit");
let newcard = document.querySelector('.card');
let container1 = document.querySelector('.container1')
let titulo;
let img;
let txt;

botao.addEventListener("click",function(e){
    e.preventDefault();

    let tituloCard = document.querySelector("#entrada1");
    let imagem = document.querySelector("#entrada2");
    let texto = document.querySelector("#entrada3");
   
    titulo = tituloCard.value;
    img = imagem.value;
    txt = texto.value;

    console.log(titulo, img, txt);
    
});

//Criando um novo Card// não funcionooouu!
function createCard(){
    if (txt != null )

    let novoCard = document.createElement('div')
    novoCard.innerHTML = `
        <div class="container1"> 
            <h2>${titulo}</h2>
            <img src="${img}">
            <p>
            "${txt}"
            </p>
        </div>`;
}

container1.insertBefore(novoCard, container1.firstChild);    
//container1.lastElementChild.remove();
//container1.lastElementChild.remove();


//Quando for necessário exibir o card inteiro
 //novoCard.appendChild(card1);

 //let inserirImg = document.querySelectorAll('img');
 //let novoCard = document.querySelectorAll('h2');
 //SetAtribute= Adiciona um novo atributo ou modifica o valor 
 //let link = inserirImg.setAtribute("src", link);
