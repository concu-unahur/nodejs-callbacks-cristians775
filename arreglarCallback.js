function suma(numero_uno, numero_dos, next) {
  setTimeout(function() {
    var resultado = numero_uno + numero_dos;
    next(resultado);
  }, 1000);
}

//var resultado = suma(2, 5);

/* console.log(resultado); */

const sumaBien = (n1, n2, next) => {
  suma(n1, n2, res => {
    next(res);
  });
};
sumaBien(2, 5, resultado => {
  console.log(resultado);
});
