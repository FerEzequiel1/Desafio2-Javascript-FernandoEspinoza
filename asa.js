const DADO = Math.round(Math.random()*6)


function Resultado(Tirar){
if ( valorDelDado = DADO ){
     apuesta + saldo;
} else{
        saldo -= apuesta;
}
console.log(saldo)
seleccionarOperacion()

}

function Tirar(){
    console.log(DADO);
    Resultado()
}

function Jugar(){
    console.log("El juego consiste en una tirada de dados,si usted acierta recibe un duplicado de lo que aposto,de lo contrario se le descontara de su saldo ")
    let apuesta = Number(prompt("Ingrese cuánto desea apostar"))
    let valorDelDado = Number(prompt("Ingrese el valor del dado a salir"))
    Tirar()
}
function IngresarDinero (){
    let saldo = Number(prompt("Ingrese su dinero"))
    alert ("Su saldo a sido ingreado con éxito")
    console.log("Su saldo es "+ saldo )
    seleccionarOperacion()
}
function Salir(){
    alert("Fin del proceso")
}


function seleccionarOperacion (){
    console.log("1-----Jugar")
    console.log("2-----Ingresar dinero")
    console.log("3-----Salir")
    console.log("----------------")
    
    let operacion = Number(prompt("Que deseas realizar"))
    switch(operacion){
        case 1:
            Jugar()
            break
    case 2:
          IngresarDinero()
        break 
        case 3:
            Salir()
            break
        default:
            console.log("Operación invalida,intente nuevamente.")
    }
}

function confirmarEdad (edad){
    
    if ( edad >= 18){
     seleccionarOperacion()
    }else{
        alert("Lo sentimos,usted no puede ingresar.")
    }
}


function ingresarEdad(advertencia) {
    if(advertencia){
        let edad = Number(prompt("Ingrese su edad por favor."))
        confirmarEdad(edad)
        } else{
            alert("Es necesario que verifiquemos su edad.")
        }
 
}
function validarEdad(){
    let advertencia = confirm("continue solo si es mayor") 
    ingresarEdad(advertencia)
}

validarEdad()