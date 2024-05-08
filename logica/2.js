/*
  Los primeros dispositivos móviles tenían un teclado llamado T9
  con el que se podía escribir texto utilizando únicamente su
  teclado numérico (del 0 al 9).

  Crea una función que transforme las pulsaciones del T9 a su representación con letras.
    - Debes buscar cuál era su correspondencia original
    - Cada bloque de pulsaciones va separado por un guión.
    - Si un bloque tiene más de un número, debe ser siempre el mismo.
    - Ejemplo:
      Entrada: 6-666-88-777-33-3-33-888
      Salida: MOUREDEV
 */

const t9Keyboard = (value) => {
  const t9KeyboardMapping = {
    2: "ABC",
    3: "DEF",
    4: "GHI",
    5: "JKL",
    6: "MNO",
    7: "PQRS",
    8: "TUV",
    9: "WXYZ",
  };

  const blockConverter = (block) => {
    let result = "";
    let prevNumber = null;

    for (const number of block) {
      if (number === prevNumber) continue;
      const letters = t9KeyboardMapping[number] || "";
      result += letters.charAt(block.length - 1);
      prevNumber = number;
    }
    return result;
  };

  const blocks = value.split("-");
  const result = blocks.map(blockConverter).join("");

  return result;
};
