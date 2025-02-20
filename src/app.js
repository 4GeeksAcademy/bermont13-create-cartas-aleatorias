import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
  let simbolos = [ "♦", "♥", "♠", "♣"]
  
  let numero = numeros[Math.floor(Math.random() * numeros.length)]
  let simbolo = simbolos[Math.floor(Math.random() * simbolos.length)]
  
  let simboloArriba = document.querySelector(".carta-arriba")
  simboloArriba.innerText = simbolo
  let simboloAbajo = document.querySelector(".carta-abajo")
  simboloAbajo.innerText = simbolo

  let simboloValor = document.querySelector(".valor")
  simboloValor.innerText = numero
  if (simbolo == "♦" || simbolo == "♥") {
    simboloArriba.classList.add("texto-rojo")
    simboloAbajo.classList.add("texto-rojo")
  }

};

