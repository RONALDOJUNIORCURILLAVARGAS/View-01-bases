const miPromesa=()=>{
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
           // resolve('Tenemos un valor en la promesa')
            reject('Error en mi promesa');
        },1000);
    });
}
const medirTiempoAsync=async()=>{
    try {
        console.log('Inicio');
        const respuesta=await miPromesa();
        console.log(respuesta);
        console.log('Fin');
        return 'Fin de medir tiempo';
       
    } catch (error) {
       // return 'catch en medir tiempo async';
        throw 'Error en medir TiempoAsync'
    }
}
//Un asyn convierte una funcion en algo que retorna una promesa
medirTiempoAsync()
    .then(console.log)
    .catch(console.log);