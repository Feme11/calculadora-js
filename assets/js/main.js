var pantalla = document.getElementById("pantalla")
var valor_anterior = undefined;
var operacion = ''

function number(n){
    actual = pantalla.value
    nuevo = actual + n
    pantalla.value = nuevo;
}

function add(){
    operacion = '+'
    valor_anterior = pantalla.value;
    pantalla.value = "";
}

function mult(){
    operacion = '*'
    valor_anterior = pantalla.value;
    pantalla.value = "";
}

function sust(){
    operacion = '-'
    valor_anterior = pantalla.value;
    pantalla.value = "";
}
function divi(){
    operacion = '/'
    valor_anterior = pantalla.value;
    pantalla.value = "";
}

function result(){
    if(operacion == '+'){
        pantalla.value = parseInt(pantalla.value) + parseInt(valor_anterior);
    }

    else if(operacion == '*'){
        pantalla.value = parseInt(pantalla.value) * parseInt(valor_anterior);
    }

    else if(operacion == '-'){
        pantalla.value = parseInt(valor_anterior) - parseInt(pantalla.value);
    }

    else if(operacion == '/'){
        pantalla.value = parseInt(valor_anterior) / parseInt(pantalla.value);
    }
}

function resetear(){
	operacion = 0;
	pantalla.value = "";
}
