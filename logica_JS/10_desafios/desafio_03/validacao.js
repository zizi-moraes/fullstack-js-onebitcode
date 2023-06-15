let old_person = prompt("Qual o nome da pessoa mais velha?");
let old_person_age = prompt("Qual a idade da pessoa mais velha?");

let new_person = prompt("Qual nome da pessoa mais nova?");
let new_person_age = prompt("Qual a idade da pessoa mais nova?");

calc_diferenca = old_person_age - new_person_age;

alert(
  "A pessoa mais velha tem a idade: " +
    old_person_age +
    "\nA pessoa mais nova tem a idade: " +
    new_person_age +
    "\nA diferença de idade é de: " +
    calc_diferenca
);
