let prato;
let bebida;
let sobremesa;

let valorprato;
let valorbebida;
let valorsobremesa;
let valortotal;

let valorp;
let valorb;
let valors;



// PRATO

function selecionarprato(opcprato){
    prato = opcprato.innerHTML;    
  
  const botaoSelecionado = document.querySelector(".pratoselecionado");
  if (botaoSelecionado !== null) {    
    botaoSelecionado.classList.remove("pratoselecionado");
  }  
  opcprato.classList.add("pratoselecionado");

  valorprato = Number(document.querySelector('.pratoselecionado spam').innerText)  

  check();  
}





// BEBIDA

function selecionarbebida(opcbebida){
    bebida = opcbebida.innerHTML;    
  
  const botaoSelecionado = document.querySelector(".bebidaselecionada");
  if (botaoSelecionado !== null) {    
    botaoSelecionado.classList.remove("bebidaselecionada");
  }
  
  opcbebida.classList.add("bebidaselecionada");
  valorbebida = Number(document.querySelector('.bebidaselecionada spam').innerText)
//   valorb = Number(valorbebida)

  check();}






// SOBREMESA

function selecionarsobremesa(opcsobremesa){
    sobremesa = opcsobremesa.innerHTML;    
  
  const botaoSelecionado = document.querySelector(".sobremesaselecionada");
  if (botaoSelecionado !== null) {    
    botaoSelecionado.classList.remove("sobremesaselecionada");
  }
  
  opcsobremesa.classList.add("sobremesaselecionada");
  valorsobremesa = Number(document.querySelector('.sobremesaselecionada spam').innerText)
//   valors = Number(valorsobremesa)

  check();
}


// CHECK

function check(){
    
    if (prato && bebida && sobremesa) {
        document.querySelector(".botao1").classList.add("escondido");
        document.querySelector(".botao2").classList.remove("escondido");                  
    }

    

    
}


// function total(valorprato, valorbebida, valorsobremesa){
//     const valortotal = valorprato + valorbebida + valorsobremesa
// }
// function total(valortotal){
//     valortotal = valorprato + valorbebida + valorsobremesa
// }



// FINALIZAR

function mostrarjanela(){
    document.querySelector(".janela").classList.remove("escondido"); 

        valortotal = valorprato + valorbebida + valorsobremesa;   
        document.querySelector(
          ".mensagemconfirmar"
        ).innerText = `
        ${document.querySelector(".pratoselecionado h1").innerText} ${encodeURIComponent(valorprato)} 
        ${document.querySelector(".bebidaselecionada h1").innerText} ${encodeURIComponent(valorbebida)}
        ${document.querySelector(".sobremesaselecionada h1").innerText} ${encodeURIComponent(valorsobremesa)}
        Total: R$ ${encodeURIComponent(valortotal)}`     
        
      }


function finalizar(){
    
    if (prato && bebida && sobremesa) {
        document.querySelector(".botao1").classList.add("escondido");
        document.querySelector(".botao2").classList.remove("escondido");        

      } else {
        alert("Você deve marcar todas as opções");
      }
      
}




// MENSAGEM WPP

function wpp(){    

const number = '5512982867392'

const msg = `Olá, gostaria de fazer o pedido:
- Prato: ${document.querySelector(".pratoselecionado h1").innerText} 
- Bebida: ${document.querySelector(".bebidaselecionada h1").innerText}
- Sobremesa: ${document.querySelector(".sobremesaselecionada h1").innerText}
Total: R$${encodeURIComponent(valortotal)}`

location.href = `https://wa.me/${encodeURIComponent(number)}?text=${encodeURIComponent(msg)}`;

}


function voltar(){
    document.querySelector(".janela").classList.add("escondido");
}


