let form = document.getElementById('form');
let card = document.querySelector('card');


function createCard(){
form.addEventListener("submit",function(e){
    
    
        let tituloCard = document.querySelector("#entrada1").value;
        let imagem = document.querySelector("#entrada2").value;
        let texto = document.querySelector("#entrada3").value;
    
        document.getElementById('titulo').innerHTML = tituloCard;
        document.getElementById('img').src = imagem;
        document.getElementById('txt').innerHTML = texto;

        //card.push({ titulo: tituloCard, img:imagem, txt: texto });
           
        console.log(tituloCard,imagem,texto);
       e.preventDefault();
        
});  
}

let novoCard = createCard();
let lista;
let container = document.getElementById("container");

function salvarCard(){
 
  for(let i=0; i< container.length ; i++){
    lista += novoCard[i].titulo + novoCard[i].img + novoCard[i].txt;
  }
  lista= document.getElementById("container").textContent; 

}
let container1 = document.querySelector('container1');

var btnSalvar = document.getElementById("submit");
btnSalvar.addEventListener("click", salvarCard());



//card.insertBefore(createCard, card.firstChild);
//Como adicionar varios cards?
//let novoCard = createCard();
//container1.insertBefore(novoCard, container1.firstChild);




//Criando uma função para capturar info dos usuários 
//let botao = document.querySelector("#submit");
//let newcard = document.querySelector('.card');

//botao.addEventListener("click",function(e){
  //  e.preventDefault();
//
  //  let tituloCard = document.querySelector("#entrada1").value;
    //let imagem = document.querySelector("#entrada2").value;
    //let texto = document.querySelector("#entrada3").value;

    //document.getElementById('titulo').innerHTML = tituloCard;
    //imagem nao funcionou!
    //document.getElementById('img').innerHTML = imagem;
    //document.getElementById('txt').innerHTML = texto;
       
    //console.log(tituloCard,imagem,texto);
    
//});

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
    

 //lista dos cards e card que agrupa infos