/*Escribe un programa que pida un número y diga si es divisible por 2*/
let num= parseInt(prompt('ingrese un número: '));
if(num %2 ==0){
 document.write('el '+num+' es divisible por 2');
}else{
    document.write('el '+num+' No es divisible por 2');
}