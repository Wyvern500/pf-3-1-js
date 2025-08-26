
export function addTwoNumbers(i1, i2){
  return i1 + i2;
}

export function addThreeNumbers(i1, i2, i3){
  return i1 + i2 + i3;
}

export function subTwoNumbers(i1, i2){
  return i1 - i2;
}

export function mulTwoNumbers(i1, i2){
  return i1 * i2;
}

export function divTwoNumbers(i1, i2){
  return i1 / i2;
}

function getParams() {
  return {
    i1: parseInt(prompt("Ingrese un valor: ")),
    i2: parseInt(prompt("Ingrese otro valor: "))
  };
}

let option = "";

do {
  option = prompt("Seleccione una opcion.\n 1.- Sumar\n 2.- Restar \n 3.- Multiplicar \n 4.- Dividir\n 5.- Salir");

  switch(option) {
    case "1":
      let params = getParams();
      console.log(addTwoNumbers(params.i1, params.i2));
      break;
    case "2":
      let params2 = getParams();
      console.log(subTwoNumbers(params2.i1, params2.i2));
      break;
    case "3":
      let params3 = getParams();
      console.log(mulTwoNumbers(params3.i1, params3.i2));
      break;
    case "4":
      let params4 = getParams();
      console.log(divTwoNumbers(params4.i1, params4.i2));
      break;
    default:
      console.log("Porfavor elija otro numero");
  }
} while(option != "5");