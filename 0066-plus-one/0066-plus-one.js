/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var valor1 = "";

    for (let i = 0; i < digits.length; i++) {
        valor1 = valor1 + digits[i];
    }

    let valor2 = BigInt(valor1);

    valor2 = valor2 + 1n;

    let valor3 = valor2.toString();

    var resultado = valor3.split('');
    return resultado;

};