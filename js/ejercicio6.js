/* Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.*/
let numero1=parseInt(prompt('ingrese el primer número'));
let numero2=parseInt(prompt('ingrese el segundo número'));
if(numero1>numero2){
    document.write('el '+numero1+' es el numero más grande');
}else{
    document.write('el '+numero2+' es el numero más grande');
}