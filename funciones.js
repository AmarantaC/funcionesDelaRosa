let dia = parseInt(prompt("Ingrese su dia de nacimiento: "));
let mes = prompt("Ingrese su mes de nacimiento: ");

function signo(){
if (((dia >= 21 )&&( dia <= 31) && (mes == "marzo"))||
((dia >= 1 )&&( dia <= 19) && (mes == "abril"))){
    alert("Aries");      
} 

else if (((dia >= 20 )&&( dia <= 30) && (mes == "abril"))||
((dia >= 1 )&&( dia <= 20 ) && (mes == "mayo"))){
    alert("Tauro");      
}

else if (((dia >= 21 )&&( dia <= 31) && (mes == "mayo"))||
((dia >= 1 )&&( dia <= 20 ) && (mes == "junio"))){
    alert("Geminis");      
}

else if (((dia >= 21 )&&( dia <= 30) && (mes == "junio"))||
((dia >= 1 )&&( dia <= 22 ) && (mes == "julio"))){
    alert("Cancer");      
}

else if (((dia >= 23 )&&( dia <= 31) && (mes == "julio"))||
((dia >= 1 )&&( dia <= 22 ) && (mes == "agosto"))){
    alert("Leo");      
}

else if (((dia >= 23 )&&( dia <= 31) && (mes == "agosto"))||
((dia >= 1 )&&( dia <= 22 ) && (mes == "septiembre"))){
    alert("Virgo");      
}

else if (((dia >= 23 )&&( dia <= 30) && (mes == "septiembre"))||
((dia >= 1 )&&( dia <= 22 ) && (mes == "octubre"))){
    alert("Libra");      
}

else if (((dia >= 23 )&&( dia <= 31) && (mes == "octubre"))||
((dia >= 1 )&&( dia <= 21 ) && (mes == "noviembre"))){
    alert("Escorpio");      
}

else if (((dia >= 22 )&&( dia <= 30) && (mes == "noviembre"))||
((dia >= 1 )&&( dia <= 21 ) && (mes == "diciembre"))){
    alert("Sagitario");      
}

else if (((dia >= 22 )&&( dia <= 31) && (mes == "diciembre"))||
((dia >= 1 )&&( dia <= 20 ) && (mes == "enero"))){
    alert("Capricornio");      
}

else if (((dia >= 21 )&&( dia <= 31) && (mes == "enero"))||
((dia >= 1 )&&( dia <= 19 ) && (mes == "febrero"))){
    alert("Acuario");      
}

else if (((dia >= 20 )&&( dia <= 29) && (mes == "febrero"))||
((dia >= 1 )&&( dia <= 20 ) && (mes == "marzo"))){
    alert("Picis");      
}

else {
    alert("Tipico de picis");    
}       
}

signo();


//--------------//

