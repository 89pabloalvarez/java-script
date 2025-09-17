// funcion para filtrar muebles por tipo
function filtrarPorTipo(tipoMueble) {
  return muebles.filter(function (mueble) {
    return mueble.tipo.toLowerCase().startsWith(tipoMueble.toLowerCase());
  });
}