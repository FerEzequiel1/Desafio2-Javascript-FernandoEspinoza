const DADO = Math.round(Math.random()*6)
let apuesta;
let valorDelDado; 
let saldo=0


validarEdad()

function validarEdad(){
    let advertencia = confirm("Continue sólo si es mayor.") 
    ingresarEdad(advertencia)
}

function ingresarEdad(advertencia) {
    if(advertencia){
        let edad = Number(prompt("Ingrese su edad por favor."))
        
        confirmarEdad(edad)
        } else{
            alert("Lo sentimos,necesitamos verificar su edad.")
        }
    
}
function confirmarEdad (edad){
    
    if ( edad >= 18){
        seleccionarOperacion()
    }else{
        alert("Lo sentimos,usted no puede ingresar.")
        validarEdad()
    }
}

   


function seleccionarOperacion (){
    console.log("1-----Jugar.")
    console.log("2-----Ingresar dinero.")
    console.log("3-----Consultar saldo.")
    console.log("4-----Salir.")
    console.log("----------------")
    
    let operacion = Number(prompt("Que deseas realizar?"))
    switch(operacion){
        case 1:
            Jugar()
            break
        case 2:
            IngresarDinero()
            break 
        case 3:
            DineroEnCuenta() 
            break
        case 4:
            Salir()   
        default:
            console.log("Operación invalida,intente nuevamente.")
    }
}

function Jugar(){
    console.log("El juego consiste en una tirada de dados,si usted acierta recibe un duplicado de lo que aposto,de lo contrario se le descontara de su saldo.")
    if(saldo==0){
        alert("Lo sentimos,debe tener un saldo para jugar.")
        seleccionarOperacion()
    }else{}
    Tirar()
}
function IngresarDinero (){
    saldo = Number(prompt("Ingrese su dinero."))
    alert ("Su saldo a sido ingreado con éxito.")
    console.log("Su saldo es $"+ saldo )
    seleccionarOperacion()
}
function DineroEnCuenta(){
    console.log("Su saldo es de $"+saldo)
    seleccionarOperacion()
}
function Salir(){
    alert("Fin del proceso.")
}


function Tirar(){
     apuesta = Number (prompt("Ingrese cuánto desea apostar." ))
     if(apuesta>saldo){ 
                  alert("Lo sentimos,pero no puede apostar mayor a su saldo actual.")
                  seleccionarOperacion()
     } else {}
     valorDelDado = Number (prompt("Ingrese el valor del dado a salir." ))
     console.log("El valor del dado es "+DADO);
     Resultado()
                         }

function Resultado(DADO){
    if ( valorDelDado == DADO ){
        saldo = apuesta + saldo;
    } else{
        saldo = saldo -= apuesta;
    }
    console.log("Su saldo es $"+saldo)
    console.log("")
    seleccionarOperacion()
    }
