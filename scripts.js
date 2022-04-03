let prato;
let bebida;
let sobremesa;

let valorprato;
let valorbebida;
let valorsobremesa;
let valortotal;



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

  check();
}


// CHECK

function check(){
    
    if (prato && bebida && sobremesa) {
        document.querySelector(".botao1").classList.add("escondido");
        document.querySelector(".botao2").classList.remove("escondido");                  
    }

    
}


function total(valorprato, valorbebida, valorsobremesa){
    const valortotal = valorprato + valorbebida + valorsobremesa
}
// function total(valortotal){
//     valortotal = valorprato + valorbebida + valorsobremesa
// }



// FINALIZAR

function mostrarjanela(){
    document.querySelector(".janela").classList.remove("escondido"); 

        
        document.querySelector(
          ".mensagemconfirmar"
        ).innerText = `
        ${document.querySelector(".pratoselecionado h1").innerText} ${document.querySelector(".pratoselecionado spam").innerText} 
        ${document.querySelector(".bebidaselecionada h1").innerText} ${document.querySelector(".bebidaselecionada spam").innerText}
        ${document.querySelector(".sobremesaselecionada h1").innerText} ${document.querySelector('.sobremesaselecionada spam').innerText}
        Total: R$ `     
        
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
Total: R$`

location.href = `https://wa.me/${encodeURIComponent(number)}?text=${encodeURIComponent(msg)}`;

}


function voltar(){
    document.querySelector(".janela").classList.add("escondido");
}


