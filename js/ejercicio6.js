/* Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.*/
let numero1=parseInt(prompt('ingrese el primer número'));
let numero2=parseInt(prompt('ingrese el segundo número'));
if(numero1>numero2){
    document.write(numero1);
}else{
    document.write('el mayor es: '+numero2);
}