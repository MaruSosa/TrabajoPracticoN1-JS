/*Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.*/
let numero1=parseInt(prompt('ingrese el primer número'));
let numero2=parseInt(prompt('ingrese el segundo número'));
let numero3=parseInt(prompt('ingrese el tercer número'));
if(numero1>numero2&& numero1>numero3){
    document.write('el '+numero1+' es el numero más grande');
}else{
    if(numero2>numero3){
        document.write('el '+numero2+' es el numero más grande');
    }else{
        document.write('el '+numero3+' es el numero más grande');
    }
}