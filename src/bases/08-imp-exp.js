import {owners} from '../data/heroes';
//Con el export default puedes poner cualquier nombre eln el impor
//porque es lo que se exporta x defecto no importa el nombre
import superheroes from '../data/heroes';
const [dc,marvel]=owners;
//console.log(heroes);

//getHeroById (id)
//funciones de flecha
//find
export const getHeroById=(id)=>superheroes.find(heroe=>heroe.id===id);

//filter

export const getHeroesByOwner=(owner)=>superheroes.filter((heroe)=>heroe.owner===owner);

//getHeroesByOwner ('DC','Marvel') 


//ASi funciona cuando importamos en otro archivo
/* import {getHeroById,getHeroesByOwner} from './bases/08-imp-exp';

console.log(getHeroById(2))

console.log(getHeroesByOwner('DC'));  */