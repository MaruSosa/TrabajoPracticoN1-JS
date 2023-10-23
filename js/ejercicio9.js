/*Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)*/
let frase = prompt("Introduce una frase:");
let vocales = "";
for (var i = 0; i < frase.length; i++) {
  var caracter = frase.charAt(i);
  if ("aeiou".indexOf(caracter) !== -1) {
    if (vocales.indexOf(caracter) === -1) {
      vocales += caracter;
    }
  }
}
if (vocales.length > 0) {
  document.write("Las vocales en la frase son: " + vocales);
} else {
    document.write("No se encontraron vocales en la frase.");
}