const { white } = require("colors");

const functions = {};


const Signo = (numero) => {
    if (numero >= 0) {
        return `positivo`      
    } else {
        return `negativo`
    }
}


const encontroCaracter = (caracter) => {
    const datos = [`A`,`B`,`C`,`C`,`D`,`E`];
    if (datos.includes(caracter)) {
        return `se encuentra`
    } else {
        return `no se encuentra`;
    }
}

const busquedabebida = (bebida) => {
     const liquidos =[`vino`, `cerveza`, `gaseosa`, `agua`];
     if (liquidos.includes(bebida)) {
        return `puedes seguir a la  barra`
     } else {
        return `ve a a la tienda`
     }
}

const mediotransporte = (medio) => {
    switch (medio) {
        case `avion`: 
            return(`tener dinero para el pasaje`);
            break;
        case `flota`:
            return(`tener dinero para el pasaje`);
            break;
        case `carro`:
            return(`llevar la ropa apropiada`);
            break;
        case `bicicleta`:
            return (`a llevar la ropa apropiada`);
            break;
        default: `otro tipo de transporte`
            return(`no ir`);
            break; 
    }
}


function facturaproducto(cantidad,precio,descuento) {
    if (cantidad > 0 || precio < 0 || descuento >= 0 || descuento <= 100 ) {
        const subtotal = cantidad * precio;
        const descuentomonto = (descuento / 100) * subtotal;
        const precioventa = subtotal - descuentomonto;
        return precioventa 

    } else {
        return `verefica los valores`;
    }
  
  }


  const bebidacomida = (menu) => {
    switch (menu) {
        case `carne`:
            return `vino tinto`;
            break;
        case `pescado` :
            return `vino blanco`;
            break;
        case `verdura`:
            return `agua`;
            break;    
        default: `otro menu`
            return `agua`
            break;
    }
}

const salajuegos = (pago) => {
    switch (pago) {
        case `4000`:
            return `consola,juegos 2D,3D,realidad virtual`;
            break;
        case `3000` :
            return `consola,juegos 2D,3D`;
            break;
        case `2000`:
            return `consola,juegos 2D`;
            break;    
        case `1000`:
            return `consola`
        default: `pagas menos`
            return `tienes que pagar mas`
            break;
    }
}

const contarnumero = (cont) => {
    let enterospsitivos ="";
    for (var i = 1; i < cont; i++) {
        console.log(i); 
    }
    return enterospsitivos.trim();
}


const numerospares = (numero1) => {
    let hola =``;
    for (let i = 0; i <= numero1; i++) {
         if (i % 2===0) {
            console.log(i);
         }
    }
    return hola.trim();
}

function TablaMultiplicar(numero2) {
    let holaa =``;
    for (let i = 0; i <= 10; i++) {
            const resultado = numero2 * i;    
            console.log(`${numero2} x ${i} = ${resultado}`);
        }
        return holaa.trim();
    };

    function repetirCaracter(caracter1, numerojh) {
        let resultado = ``;
        
        for (let i = 0; i < numerojh; i++) {
                resultado += caracter1;
        }
                return resultado;
              
     };   
     

     function contadorBase(base) {
        let holaaa = "";
        if (base < 9) {
          console.log("La base debe ser al menos 2.");
          return;
        }  
      for (let i = 0; i < base; i++) 
          for (let j = 0; j < base; j++) {
            const numberInBase = i * base + j;
            console.log(numberInBase);
          }
        return holaaa.trim();
        
        }  

const iniciosesion = (clave) => {
    let linea = `*`.blue
    let holaaaa = "";
    const contraseñas = ["clave1", "clave2", "clave3"];
    let intentosFallidos = 3;
  
    for (let intento = 0; intento < 3; intento++) {
  
      if (contraseñas.includes(clave[intento])) {
        console.log("Acceso concedido");
        return;
      } else {
        intentosFallidos= intento +1;
        console.log(linea + `Intento ${intentosFallidos} fallido. Te quedan ${3 - intentosFallidos} intentos.`+ linea);
      }
    }
    if (intentosFallidos === 3) {
    console.log( linea + "Intruso detectado. Alerta de seguridad activada."+ linea);
    }
    return holaaaa.trim();

};       
    



const minimomaximo = (numeros) => {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        return;
    }
    const minnumero = Math.min (...numeros);
    const maxnumero = Math.max(...numeros);
    const sum = numeros.reduce((total, num) => total + num, 0);
    const promedio = sum / numeros.length;


    console.log(`*********************************`.red);
    console.log(`*  `.red + `    funcion min/max/pro  `.yellow + `    *`.red);
    console.log(`*********************************`.red);
    console.log(`*    `.red + `NUMERO MENOR:${minnumero}`.yellow +
     `             *`.red);
    console.log(`*    `.red + `NUMERO MAYOR:${maxnumero}`.yellow + 
    `            *`.red);
    console.log(`*    `.red + `PROMEDIO:${promedio}`.yellow + `*`.red);
    console.log(`*********************************\n`.red);
    
}


const numerospares1 = (numeross) => {
    if (!Array.isArray(numeross) || numeross.length === 0) {
    return;
    }

    const numerospares1 = numeross.filter(numer => numer % 2 === 0);
    const numer0numeropares = numerospares1.length;

    console.log(`*********************************`.green);
    console.log(`*`.green + `funcion cantidad numeros pares`.white + ` *`.green);
    console.log(`*********************************`.green);
    console.log(`*  `.green + `cantidad de numero pares: ${numer0numeropares}`.white + 
    `  *`.green);
    if ( numer0numeropares > 0) {
        console.log (`*`.green + `     numeros pares: ${numerospares1.join(",")}`.white + 
        `     *`.green);
    console.log(`*********************************\n`.green)
   }
}     



const interfazSigno =  (numero) =>{
    //console.clear();
    console.log(`*********************************`.blue);
    console.log(`*      `.blue +  `funcion signos     `.white  + 
    `      *`.blue);
    console.log(`*********************************`.blue);
    console.log(`* `.blue +`  el numero ${numero}  es`.white + `  ` + 
    functions.Signo(numero).white + `  *`.blue);
    console.log(`*********************************\n`.blue);
}



const interfazencontroCaracter =  (caracter) =>{
    //console.clear();
    console.log(`*********************************`.green);
    console.log(`* `.green +`    funcion encontro caracter`.white+ ` *`.green);
    console.log(`*********************************`.green);
    console.log(`* `.green +`  el caracter ${caracter.toUpperCase()} `.white + 
            functions.encontroCaracter(caracter.toUpperCase()) + `  *`.green);
    console.log(`*********************************\n`.green);

}


const interfazbusquedabebida =  (bebida) =>{
    //console.clear();
    console.log(`*********************************`.red);
    console.log(`*      `.red+`  funcion bebidas `.white+`       *`.red);
    console.log(`*********************************`.red);
    console.log(`*  `.red + `      si tomas  ${bebida}`.white+`\n   ` + 
    functions.busquedabebida(bebida).white + `    *`.red);
    console.log(`*********************************\n`.red);
}

const interfazmediotransporte =  (medio) => {
    //console.clear();
    console.log(`*********************************`.yellow);
    console.log(`*   `.yellow + `   funcion viaje    `.white + `        *`.yellow);
    console.log(`*********************************`.yellow);
    console.log(`*  `.yellow + ` los que viajan en ${medio}`.white + `\n ` +
    functions.mediotransporte(medio).white + `       *`.yellow);
    console.log(`*********************************\n`.yellow);

}


const interfazfacturaproducto =  (cantidad,precio,descuento) =>{
    //console.clear();
    console.log(`*********************************`.blue);
    console.log(`*   `.blue+`   funcion producto `.red+`        *`.blue);
    console.log(`*********************************`.blue);
    console.log(`* el precio es `.red +
     `${functions.facturaproducto(cantidad,precio,descuento)}`.red +
     `\n con un descuento de ${descuento}%  `.red+`     *`.blue);
    console.log(`*********************************\n`.blue);
}


const interfazbebidacomida =  (menu) =>{
    //console.clear();
    console.log(`*********************************`.green);
    console.log(`*   `.green + `funcion bebida comida `.yellow + `      *`.green);
    console.log(`*********************************`.green);
    console.log(`* `.green + `  si comes  ${menu} \n te recomiendo`.yellow + 
             `${functions.bebidacomida(menu)}`.yellow + `       *`.green);
    console.log(`*********************************\n`.green);
}

const interfazsalajuegos =  (pago) =>{
    //console.clear();
    console.log(`*********************************`.blue);
    console.log(`*   `.blue+`   funcion sala de juegos `.green + `  *`.blue);
    console.log(`*********************************`.blue);
    console.log(`* `.blue + ` si pagas ${pago}  puedes jugar\n    `.green + 
              functions.salajuegos(pago).green + `        *`.blue);
    console.log(`*********************************\n`.blue);
}

const interfazcontarnumero =  (cont) =>{
    //console.clear();
    console.log(`*********************************`.yellow);
    console.log(`*   `.yellow+ `   funcion contar numero `.red + `   *`.yellow);
    console.log(`*********************************`.yellow);
    console.log(`*   `.yellow + `   numero   ${cont}  `.red + 
            `${functions.contarnumero(cont)}`.red + 
    `             *`.yellow);
    console.log(`*********************************\n`.yellow);
}


const interfaznumerospares =  (numero1) =>{
    //console.clear();
    console.log(`*********************************`.green);
    console.log(`*`.green + `  funcion contar numeros pares `.white+`*`.green);
    console.log(`*********************************`.green);
    console.log(`* `.green + `          ${numero1}  `.yellow +
      functions.numerospares(numero1).white + 
    `                *`.green);
    console.log(`*********************************\n`.green);
}

const interfaztablamultiplicar =  (numero2) =>{
    //console.clear();
    console.log(`*********************************`.red);
    console.log(`*`.red +` funcion tabla de multiplicar`.blue + ` *`.red);
    console.log(`*********************************`.red);
    console.log(`* `.red+ functions.TablaMultiplicar(numero2).blue + 
    `   la tabla del        ${numero2}`.blue +`      *`.red);
    console.log(`*********************************\n`.red);
}

const interfazrepetircaracter =  (caracter1,numerojh) =>{
    //console.clear();
    console.log(`*********************************`.green);
    console.log(`* `.green +`funcion repetir caracter  `.red +`    *`.green);
    console.log(`*********************************`.green);
    console.log(`*  `.green + ` `.red + 
    functions.repetirCaracter(caracter1,numerojh).red + 
    `             *`.green);
    console.log(`*********************************\n`.green);
}

const interfazcotadorbase =  (base) =>{
    //console.clear();
    console.log(`*********************************`.yellow);
    console.log(`*   `.yellow + `    funcion base n    `.blue + 
    `      *`.yellow);
    console.log(`*********************************`.yellow);
    console.log(`* `.yellow + `               ${base} `.blue + 
    `${functions.contadorBase(base)}`.blue +
     `             *`.yellow);
    console.log(`*********************************\n`.yellow);
}

const interfaziniciasesion =  (clave) =>{
    //console.clear();
    console.log(`******************************************`.blue);
    console.log(`*  `.blue + `      funcion contraseña    `.green +
     `          *`.blue);
    console.log(`******************************************`.blue);
    console.log(``.blue + `${functions.iniciosesion(clave)}`.green );
    console.log(`*********************************\n`.blue);
}






functions.Signo = Signo;
functions.interfazSigno = interfazSigno;
functions.encontroCaracter = encontroCaracter;
functions.interfazencontroCaracter = interfazencontroCaracter;
functions.busquedabebida = busquedabebida;
functions.interfazbusquedabebida = interfazbusquedabebida;
functions.mediotransporte = mediotransporte;
functions.interfazmediotransporte = interfazmediotransporte;
functions.facturaproducto = facturaproducto;
functions.interfazfacturaproducto = interfazfacturaproducto;
functions.bebidacomida = bebidacomida;
functions.interfazbebidacomida = interfazbebidacomida;
functions.salajuegos = salajuegos;
functions.interfazsalajuegos = interfazsalajuegos;
functions.contarnumero = contarnumero;
functions.interfazcontarnumero = interfazcontarnumero;
functions.numerospares = numerospares;
functions.interfaznumerospares = interfaznumerospares;
functions.TablaMultiplicar = TablaMultiplicar;
functions.interfaztablamultiplicar = interfaztablamultiplicar;
functions.repetirCaracter = repetirCaracter;
functions.interfazrepetircaracter = interfazrepetircaracter;
functions.contadorBase = contadorBase;
functions.interfazcotadorbase = interfazcotadorbase;
functions.iniciosesion = iniciosesion;
functions.interfaziniciasesion = interfaziniciasesion;
functions.minimomaximo = minimomaximo;
functions.numerospares1 = numerospares1;

module.exports = functions;