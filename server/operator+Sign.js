console.log(typeof ([] + []));


// Respuesta Correcta: D) string
// El operador + por lo general intentará realizar una concateneción, en este caso, el interprete de JavaScript, por coerción de tipos intentará convertir los arreglos a cadenas de texto, haciendo algo como esto aunque no lo veamos:

// console.log(typeof ([].toString() + [].toString())); //string console.log(typeof ("" + "")); console.log(typeof ("")); //string
