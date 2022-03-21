/* if usuário apertar submit , ciar uma variavel 
let novoCard = document.createElement 
console log (novoCard);
ciar no html estrutura do card
*/

//Criando uma função para capturar info dos usuários 
let botao = document.querySelector("#submit");
let newcard = document.querySelector('.card');

botao.addEventListener("click",function(e){
    e.preventDefault();

    let tituloCard = document.querySelector("#entrada1").value;
    let imagem = document.querySelector("#entrada2").value;
    let texto = document.querySelector("#entrada3").value;

    document.getElementById('titulo').innerHTML = tituloCard;
    //imagem nao funcionou!
    document.getElementById('img').innerHTML = imagem;
    document.getElementById('txt').innerHTML = texto;
       
    console.log(tituloCard,imagem,texto);
    
});

//Criando um novo Card// não funcionooouu!
//Perguntar sobre o ${}
    //let novoCard = document.createElement('card')
    //novoCard.innerHTML = `
        //<div class="card"> 
            //<h2 id="titulo"></h2>
            //<img src = "id = img">
            //<p>
        
            //</p>
       // </div>`;
        
//function crateCard(){
    
//container1.insertBefore(novoCard, container1.firstChild);
//}

//botao.onclick = crateCard


  
//container1.lastElementChild.remove();
//container1.lastElementChild.remove();


//Quando for necessário exibir o card inteiro
 //novoCard.appendChild(card1);

 //let inserirImg = document.querySelectorAll('img');
 //let novoCard = document.querySelectorAll('h2');
 //SetAtribute= Adiciona um novo atributo ou modifica o valor 
 //let link = inserirImg.setAtribute("src", link);
    