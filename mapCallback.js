const miMap = (array, funcion) => {
  return array.map(e => funcion(e));
}

const porDos = (nro) => {
 return (nro * 2);
};

// Probando miMap
arrayViejo = [1, 2, 3, 4, 5];
var arrayNuevo = miMap(arrayViejo, porDos);
console.log(arrayNuevo); // arrayNuevo = [2,4,6,8,10]
