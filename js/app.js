
    var uno = document.getElementById("1");
    var dos = document.getElementById("2");
    var tres = document.getElementById("3");
    var cuatro = document.getElementById("4");
    var cinco = document.getElementById("5");
    var seis = document.getElementById("6");
    var siete = document.getElementById("7");
    var ocho = document.getElementById("8");
    var nueve = document.getElementById("9");
    var cero = document.getElementById("0");
    var suma = document.getElementById("mas");
    var resta = document.getElementById("menos");
    var multiplicacion = document.getElementById("por");
    var division = document.getElementById("dividido");
    var igual = document.getElementById("igual");
    var signo = document.getElementById("sign");
    var punto = document.getElementById("punto");
    var resultado = document.getElementById("display");
    var on = document.getElementById("on");
    
    

    var operandoa;
    var operandob;
    var operacion;

    //Evento

    uno.onclick = function(e){
        resultado.textContent = resultado.textContent.slice(0,7) + "1";
       
    }

    dos.onclick = function(e){
        resultado.textContent = resultado.textContent.slice(0,7) + "2";
    }

    tres.onclick = function(e){
        resultado.textContent = resultado.textContent.slice(0,7) + "3";
    }

    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent.slice(0,7) + "4";
    }

    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent.slice(0,7) + "5";
    }

    seis.onclick = function(e){
       resultado.textContent = resultado.textContent.slice(0,7) + "6";
    }

    siete.onclick = function(e){
        resultado.textContent = resultado.textContent.slice(0,7) + "7";
    }

    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent.slice(0,7) + "8";
    }

    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent.slice(0,7) + "9";
    }

    cero.onclick = function(e){
        resultado.textContent = resultado.textContent.slice(0) + "0";
        
    }
    punto.onclick = function(e){
        resultado.textContent = resultado.textContent + ".";
    }



    on.onclick = function(e){
        resetear ();
    }
    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "mas";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "menos";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "por";
        limpiar();
    }
    division.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "dividido";
        limpiar();
        
    }
    signo.onclick = function(e){
        resultado.textContent = "-" + resultado.textContent;
        //operandoa = resultado.textContent;
    }
    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }


function limpiar() {
    resultado.textContent ="";
   
}
function resetear() {
    resultado.textContent = "";
    operandoa = "";
    operandob = "";
    operacion = "";
}

function resolver(){
    var resolver;
    switch (operacion) {
        case "mas":
            resolver = parseFloat (operandoa) + parseFloat (operandob); 
            break;
        case "menos":
            resolver = parseFloat (operandoa) - parseFloat (operandob); 
            break;
        case "por":
            resolver = parseFloat (operandoa) * parseFloat (operandob); 
            break;
        case "dividido":
            resolver = parseFloat (operandoa) / parseFloat (operandob); 
            break;
        default:
            return;
    }
    resetear();
    resultado.textContent = resolver;
}



