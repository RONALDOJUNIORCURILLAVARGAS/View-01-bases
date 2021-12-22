    const saludar= (nombre ='Peter' )=> `Hola ${nombre}`;
const nombre='Tony';

//console.log(saludar(nombre));
/*
const getUser=()=>{
    return {
        uid:'ABC123',
        username:'Tony001'
    }
}
*/
const getUser=()=>({
    uid:'ABC123',
    username:'Tony001'
});
//console.log(getUser());
const heroes = [{
    id:1,
    name:'Batman'
},{
    id:2,
    name:'Superman'
}];
/*
const existe=(obj)=> obj.id===1;
console.log(heroes.some(existe));
*/
// la funcion find retorna el valor del elemento q busque
//La funcion some retorna un estado de existentcia en true o false
const existe=heroes.some((heroe)=>heroe.id===1);
const {name}=heroes.find((heroe)=>heroe.id===1);
console.log(existe);
console.log(name);