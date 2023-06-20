let personas = [
    {
        nombre:'Carlos',
        edad:26,
        ciudad: 'Lara'
    },
    {
        nombre:'Maria',
        edad:25,
        ciudad: 'Lara'

    },
    {
        nombre:'gladys',
        edad:21,
        ciudad: 'Lara'
    }
];
const crearMensajeDepresentacion = (personas = []) =>{
    const mensajes = [];
    for (let index = 0; index < personas.length; index++) {
    const element = personas[index];
    const msg = `Hola soy ${element.nombre}  tengo ${element.edad} y vivo en ${element.ciudad}`;
    mensajes.push(msg)
   }
    return mensajes;
}
const result = crearMensajeDepresentacion(personas);
result.map(i => console.log(i));
