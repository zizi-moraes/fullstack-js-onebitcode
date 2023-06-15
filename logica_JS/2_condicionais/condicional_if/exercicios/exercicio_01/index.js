let pilotoName = prompt("Qual o seu nome?");
let velocity = 0;
let new_velocity = prompt("Para qual velocidade gostaria de acelerar?");
let confirm_velocity = confirm(
  "Confirma a alteração da velocidade para: " + new_velocity + " km/s?"
);

if (confirm_velocity) {
  velocity = new_velocity;
}

if (velocity <= 0) {
  alert("A nave está parada. Considere partir e aumentar a velocidade");
} else if (velocity < 40) {
  alert("Você está devagar, podemos aumentar mais.");
} else if (velocity < 80) {
  alert("Parece boa velocidade para manter.");
} else if (velocity < 100) {
  alert("Velocidade alta. Considere diminuir.");
} else {
  alert("Velocidade perigosa. Controle automático forçado.");
}

alert("Nome: " + pilotoName + "\nVelocidade: " + velocity + " km/s.");
