const persona={
    nombre:'Tony',
    apellido:'Stark',
    edad:45,
    direccion:{
        ciudad:'New York',
        zip:521654,
        lat:14.3232,
        lng:34.456842
    }
}
//crea un nuevo objeto rompiendo las dependencias {...}
const persona2 =  {...persona};
persona2.nombre='Peter'
console.log(persona);
console.log(persona2);
