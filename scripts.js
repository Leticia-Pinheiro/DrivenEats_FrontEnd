let prato;
let bebida;
let sobremesa;

let valorp;
let valorbebida;
let valorsobremesa;


// PRATO

function selecionarprato(opcprato){
    prato = opcprato.innerHTML;    
  
  const botaoSelecionado = document.querySelector(".pratoselecionado");
  if (botaoSelecionado !== null) {    
    botaoSelecionado.classList.remove("pratoselecionado");
  }  
  opcprato.classList.add("pratoselecionado");

  valorp = document.getElementsByName('.pratoselecionado spam')
//   valornovo = parseInt(valorp)
  console.log(valorp)
  
//   valorp = document.getElementById('.pratoselecionado valorprato').innerText
//   console.log('valor não vertido ' + valorp)
//   const convert =  parseFloat(valorp.toFixed(2))

//   console.log(convert)

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
  check();
}






// SOBREMESA

function selecionarsobremesa(opcsobremesa){
    sobremesa = opcsobremesa.innerHTML;    
  
  const botaoSelecionado = document.querySelector(".sobremesaselecionada");
  if (botaoSelecionado !== null) {    
    botaoSelecionado.classList.remove("sobremesaselecionada");
  }
  
  opcsobremesa.classList.add("sobremesaselecionada");
  check();
}






// CHECK

function check(){
    
    if (prato && bebida && sobremesa) {
        document.querySelector(".botao1").classList.add("escondido");
        document.querySelector(".botao2").classList.remove("escondido");  
    }
}






// FINALIZAR

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
Total: R$ `

location.href = `https://wa.me/${encodeURIComponent(number)}?text=${encodeURIComponent(msg)}`;

}


