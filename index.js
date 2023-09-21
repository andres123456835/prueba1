let opt = +prompt("Introduce un tipo de operacion: \n 1.Multiplicacion \n 2.Mayor ")


const multiplicar = () => {
    let num1 = + prompt("Introduce el numero");
    let num2 = + prompt("Introduce el numero");   
    let resultado = num1 *num2;
    alert(resultado);
} 

const mayor = () =>{
    let num1 = + prompt("Introduce el numero");
    let num2 = + prompt("Introduce el numero");
    if(num1>num2){
        alert("numero 1 es mayor");
    }
    else{
        alert("numero 2 es mayor");
    }
}

switch (opt){
    case 1:
        multiplicar();
        break;
    case 2:
        mayor(); 
        break;
    default:
        alert("no existe opcion");
        break;
}
