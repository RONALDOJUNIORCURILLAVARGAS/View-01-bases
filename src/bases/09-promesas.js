import {getHeroById} from './bases/08-imp-exp';
/* console.log('Inicio');
new Promise((resolve,reject)=>{
  console.log('cuerpo de la promesa');  
  //resolve('Promesa resuelta','asdfsd');
  reject('Promesa resuelta con error');
})
.then(msg=>console.log(msg))
//cuando se enviar un argumento y se ejecuta en una funcion
//no es necesaria declararla si solo se usara eso
//por ejemplo el console.log usara el argumento q se le envie
.catch(console.log);

console.log('Fin'); */
const getHeroByIdAsync =(id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const hero = getHeroById(id);
            if(hero){
                resolve(hero);
            }else{
                reject('Heroe no existe');
            }
        },1000);
    });
}
getHeroByIdAsync(2)
.then(hero=>console.log(`El héroe es : ${hero.name}`))
.catch(console.log);