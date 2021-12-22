const person={
    name:'Tony',
    age:45,
    codeName:'Ironman'
}

const {name,age,codeName,power='No tiene poder'}=person;

/* console.log(name);
console.log(age);
console.log(codeName);
console.log(power); */
const createHero =({name,age,codeName,power})=>{
    return{
        id:1121345,
        //CUando la propiedad tiene el mismo nombre de la variable declarada
        //No es necesario ponerlos dos veces segun ES6
        name,
        age,
        codeName,
        power,    
    }
}
const createHero2 =({name:nombre,age,codeName,power})=>({
        id:1121345,
        nombre,
        age,
        codeName,
        power,    
})
console.log(createHero(person));
console.log(createHero2(person));