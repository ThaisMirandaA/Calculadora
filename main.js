// let operacao = "";
//     let numero1 = "";
//     let numero2 = ""; 
//     let pergunta = "sim";
    
//     function soma (numero1, numero2) {
//         return numero1 + numero2; 
//     }
    
//     function subtrai (numero1, numero2) {
//         return numero1 - numero2;
//     }
    
//     function multiplica (numero1, numero2) {
//         return numero1 * numero2;
//     }
    
//     function divide (numero1, numero2) {
//         return numero1 / numero2;  
//     }

//     function confereNumero (numero1, numero2) {
//         if (isNaN(numero1, numero2)){
//             alert ('Por favor, digite apenas números.');
//         }   
//     }
    
//         while (pergunta != "não") {
//             pergunta = prompt ('Deseja realizar uma operação matemática? Responda "sim" ou "não".'); 
//                 if (pergunta === "sim") {
//                     operacao = prompt ('Escolha uma das opções para realizar a operação: "soma", "subtração", "multiplicação", "divisão". Caso queira finalizar, digite "sair".'); 
//                     if (operacao === "sair") {
//                         alert('Até a próxima!');
//                         break;
//                     } else if (operacao === "soma" || operacao === "subtração" || operacao === "multiplicação" || operacao === "divisão" ) {
//                         numero1 = Number(prompt("Digite o primeiro número da operação."));
//                         numero2 = Number(prompt ("Digite o segundo número da operação."));
//                         confereNumero(numero1, numero2); 
//                             if (operacao === "soma") {
//                                 alert (soma (numero1, numero2)); 
//                             } else if (operacao === "subtração") {
//                                 alert (subtrai (numero1, numero2)); 
//                             } else if (operacao === "multiplicação") {
//                                 alert (multiplica (numero1, numero2));
//                             } else if (operacao === "divisão") {
//                                 alert (divide (numero1, numero2));  
//                             }           
//                     } else {
//                         alert ('Operação inválida.');
//                     } 
    
//                     } else if (pergunta === "não") {
//                         break; 
//                     } else {
//                         alert('Por favor, responda com "sim" ou "não".'); 
//                     } 
            
//         }

function insert (num) {
    var numero = document.getElementById('numeros-leitor').innerHTML;
    document.getElementById('numeros-leitor').innerHTML = numero + num; 
}

function clean() {
    document.getElementById('numeros-leitor').innerHTML = ""; 
}

function back() {
    var numeroFinal = document.getElementById('numeros-leitor').innerHTML;
    document.getElementById('numeros-leitor').innerHTML = numeroFinal.substring(0, numeroFinal.length -1);
}


function calcular () {
    var resultado = document.getElementById('numeros-leitor').innerHTML;
    if (resultado) {
        document.getElementById('numeros-leitor').innerHTML = eval(resultado); 
    } else {
        document.getElementById('numeros-leitors').innerHTML = "";
    }
   
}   

function clearScreen() {
    screen.innerText = "";
    numero = "";
  }

