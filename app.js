require('colors');

const functions = require('./modules/functions.js');

const main = async () => {

    const numero = 99;
    functions.interfazSigno(numero);
    

    const caracter = 'a';
    console.log(functions.interfazencontroCaracter(caracter.toUpperCase()));

    const bebida = 'vino'
    console.log(functions.interfazbusquedabebida(bebida));
    
    const medio = 'carro'
    console.log(functions.interfazmediotransporte(medio));

    const cantidad = 10;
    const precio = 100;
    const descuento = 50;
    functions.interfazfacturaproducto(cantidad,precio,descuento);

    const menu = 'pescado';
    console.log(functions.interfazbebidacomida(menu));

    const pago = '3000';
    functions.interfazsalajuegos(pago);

    const cont = 7;
    functions.interfazcontarnumero(cont);

    const numero1 = 20;
    functions.interfaznumerospares(numero1);

    const numero2 = 9;
    functions.interfaztablamultiplicar(numero2);

    const caracter1 = 'Z';
    const numerojh = 15;
    functions.interfazrepetircaracter(caracter1,numerojh);

    const base = 10;
    functions.interfazcotadorbase(base);

    const clave = ["clave1", "clave*", "clave"];
    functions.interfaziniciasesion(clave);
   

    const  numeros = [`8`,`6`,`7`,`9`,`15`,`2`];
    console.log(functions.minimomaximo(numeros));


    const numeross = [`4`,`8`,`7`,`14`,`13`,`5`];
    functions.numerospares1(numeross);
}

main();