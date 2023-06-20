

const miFunction = (a,b) => {
    let resultado ={
        Suma : a + b,
        Resta : a - b,
        Multiplicacion : a * b,
        Division : a % b,
    }
    console.log(resultado);
}

miFunction(5,5);
