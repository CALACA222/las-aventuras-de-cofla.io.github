//Arrays
// let frutas = ["manzana ", "pera ", "banana ", "mango ", "fresa"];

//0bjetos
// let pc1 = {
//   nombre: "BrandonPC",
//   prosesador:"Intel Core I5",
//   ram:"8GB ",
//   espacio:"1TB"
// };
// let nombre = pc1["nombre"];
// let prosesador = pc1["prosesador"];
// let ram = pc1["ram"];
// let espacio = pc1["espacio"];
// frace =` El nombre de mi PC es: ${nombre} <br>
//         su prosesador es: ${prosesador} <br>
//         la memoria ram es: ${ram} <br>
//         y su almacenamineto es de: ${espacio}`;
// document.write(frace);

// sentencia while
// let numero = 0;
// while (numero <= 10) {
//   numero++;
//   document.write(numero + "<br>");
// }

// sentencia do while
// let numero = 0;
// do {
//   document.write(numero + "<br>");
//   numero++;
// }
// while (numero <= 10) 

//sentencia break
// let numero = 0;
// while(numero < 1000) {
//   numero++;
//   document.write(numero + "<br>");
//   if (numero == 10) {
//     break;
//   }
// }
// document.write("fin");

// let i;
// for (i = 0; i < 20; i++) {
//   if (i == 10) {
//     break;
//   }
//     document.write(i + "<br>");
// }
// document.write(i);

//for
// let i;
// for (i = 0; i < 20; i++) {
//     document.write(i + "<br>");
// }
// document.write(i);

//for continue
//for
// let i;
// for (i = 0; i < 20; i++) {
//   if (i == 10) {
//     continue;
//   }
//     document.write(i + "<br>");
// }
// document.write(i);

//for in y for of
// let animales = ["Gato ", "Perro ", "Vaca ", "Toro"];
// for (animal in animales) {
//     document.write(animal + "<br>");
// }
// document.write("<br>");
// for (animal of animales) {
//   document.write(animal + "<br>");
// }

// label
// array1 = ["maria ", "josefa ", "roberta"];
// array2 = ["pedro ", "marcelo ", array1, "josefina"];
// forRancio:
// for (let array in array2) {
//   if (array == 2) {
//     for (let array of array1){
//       document.write(array + "<br>");
//       break forRancio;
//     }
//   } else {
//     document.write(array2[array] + "<br>");
//   }
// }

//Funciones
// function saludar(){
//   respuesta = prompt("Hola Brandon ¿Como fue tu dia?");
// if (respuesta == "bien") {
//   alert("me alegro");
// } else {
//   alert("una pena");
// }
// };
// saludar();

//return o mejor dicho retorna la funcion
// function saludar(){
//   alert("hola");
//   return saludar;
// }
// let saludo = saludar();
// document.write(saludo);

//Parametros dentro de una funcion
// function suma(num1,num2){
//   let res = num1 + num2;
//   return res;
// };
// let res = suma(23,34);
// document.write(res + "<br>");
// let res2 = suma(43,3);
// document.write(res2 + "<br>");

//Scope dentro de una funcion
// function saludar(nombre){
//   let frase = `¡Hola ${nombre}! ¿Como estas?`
//   document.write(frase);
// }
// saludar("Brandon");

//Funcion otra manera de declarar un funcion
// const saludar = function(nombre){
//   let frase = `¡Hola ${nombre}! ¿Como estas?`;
//   document.write(frase);
// }
// saludar("pedro");

//Funcion flecha
// const saludar = (nombre)=> {
//   let frase = `¡Hola ${nombre}! ¿Como estas?`;
//   document.write(frase);
// }
// saludar("pedro");

//Capitulo de cofla
//Problema 1
// let free = false;
// const validarCliente = (time)=>{
//   let edad = prompt("¿Cual es tu edad?");
//   if (edad > 18) {
//       if (time >= 2 && time < 7 && free == false) {
//         alert("podes pasar gratis porque sos la primera persona que vino despues de las 2AM");
//         free = true;
//       } else {
//         alert(`son las ${time}:00Hs y podes pasar, pero tenes que pagar la entrada`);
//       }
//   } else {
//     alert("Mira papu eres menor de edad por ende no vas a poder pasar");
//   } 
// };
// validarCliente(23);
// validarCliente(24);
// validarCliente(0.2);
// validarCliente(0.6);
// validarCliente(1);
// validarCliente(2);
// validarCliente(2.3);
// validarCliente(2.4);
// validarCliente(3);

//Problema 2


let cantidad = prompt("¿Cuantos alumnos son?");
let alumnosTotales = [];
for (i = 0; i < cantidad; i++) {
  alumnosTotales[i] = [prompt("Nombre del alumno" + (i+1)),0];
}
const tomarAsistencia = (nombre,p)=>{
  let presencia = prompt(nombre);
  if (presencia == "p" || presencia == "P"){
    alumnosTotales[p][1]++;
  }
}
for (i = 0; i < 30; i++){
  for (alumno in alumnosTotales) {
      tomarAsistencia(alumnosTotales[alumno][0],alumno);
  }
}
for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    --------Presentes:<b> ${alumnosTotales[alumno][1]} </b><br>
    --------Ausente: <b>${30 - alumnosTotales[alumno][1]}</b>`;
    if (30 - alumnosTotales[alumno][1] > 18) {
    resultado+= "Reprobado por inasistencias"
    } else {
      resultado+= "<br><br>"
    }
    document.write(resultado);
};