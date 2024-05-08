/*
  Dado un array de números enteros positivos, donde cada uno
  representa unidades de bloques apilados, debemos calcular cuantas unidades
  de agua quedarán atrapadas entre ellos.

  - Ejemplo: Dado el array [4, 0, 3, 6, 1, 3].

  💧💧💧🪣💧💧
  💧💧💧🪣💧💧
  🪣💧💧🪣💧💧
  🪣💧🪣🪣💧🪣
  🪣💧🪣🪣💧🪣
  🪣💧🪣🪣🪣🪣

  Representando bloque con 🪣︎ y agua con 💧, quedarán atrapadas 7 unidades
  de agua. Suponemos que existe un suelo impermeable en la parte inferior
  que retiene el agua.
 */

const waterBlocks = (value) => {
  // Me tomo el atrevimiento de comentar cada paso para una mayor comprensión del camino hacia el resultado.

  let units = 0; // Inicializamos la cantidad total de unidades de agua atrapada
  let currentBlockHeight = 0; // Altura del bloque actual
  let nextBlockHeight = 0; // Altura del próximo bloque

  // Iteramos sobre cada bloque en el contenedor
  value.forEach((blockHeight, index) => {
    // Verificamos si el bloque tiene una altura negativa
    if (blockHeight < 0) {
      throw new Error("La altura del bloque no puede ser negativa.");
    }

    // Si no estamos en el último bloque y encontramos una nueva pared
    if (
      index !== value.length - 1 &&
      (index === 0 || nextBlockHeight === blockHeight)
    ) {
      // Establecemos la altura del bloque actual
      currentBlockHeight = index === 0 ? blockHeight : nextBlockHeight;
      nextBlockHeight = Math.max(...value.slice(index + 1)); // Altura del próximo bloque
    } else {
      // Calculamos la altura de agua entre los bloques
      const referenceBlockHeight = Math.min(
        nextBlockHeight,
        currentBlockHeight
      );
      const waterHeight = Math.max(0, referenceBlockHeight - blockHeight);
      units += waterHeight; // Sumamos la altura de agua atrapada
    }
  });

  return units;
};
