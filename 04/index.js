

const xFunction = (msg)=>{
    const palabras = msg.split(' ');
   // console.log(palabras);

    const invertido = palabras.reverse();
    //console.log(invertido);

    const normal = invertido.join();
    console.log(normal)

}

xFunction('1 2 3');

