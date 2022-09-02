let dia = parseInt(prompt("Ingrese su dia de nacimiento: "));
let mes = prompt("Ingrese su mes de nacimiento: ");


class signo {
    constructor(nombre, diaInicio, diasMes, mesInicio, diaFin, mesFin ){
        this.nombre = nombre;
        this.diaInicio = diaInicio;
        this.diasMes = diasMes;
        this.mesInicio = mesInicio;    
        this.diaFin = diaFin;
        this.mesFin = mesFin;
       
    }
}

const aries = new signo("Aries", 21, 31, "marzo", 19, "abril");
const tauro = new signo("Tauro", 20, 30, "abril", 20, "mayo");
const geminis = new signo("Geminis", 21, 31, "mayo", 20, "junio");
const cancer = new signo("Cancer", 21, 30, "junio", 22, "julio");
const leo = new signo("Leo", 23, 31, "julio", 20, "agosto");
const virgo = new signo("Virgo", 23, 31, "agosto", 22, "septiembre");
const libra = new signo("Libra", 23, 30, "septiembre", 22, "octubre");
const escorpio = new signo("Escorpio", 23, 31, "octubre", 21, "noviembre");
const sagitario = new signo("Sagitario", 22, 30, "noviembre", 21, "diciembre");
const capricornio = new signo("Capricornio", 22, 31, "diciembre", 20, "enero");
const acuario = new signo("Acuario", 21, 31, "enero", 19, "febrero");
const picis = new signo("Picis", 20, 29, "febrero", 20, "marzo");

for (let i = 1; i < signo.length; i++) {

    horoscopo = function(){
    
        if (((dia >= this.diaInicio )&&( dia <= this.diasMes) && (mes == this.mesInicio))||
        ((dia >= 1 )&&( dia <= this.diaFin) && (mes == this.mesFin))){
            alert(this.nombre);      
        } 
        else
        {
            alert("Tipico de picis"); 
        }
    };   
    
}






