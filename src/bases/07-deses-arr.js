const characters = ['Goku','Vegeta','Trunks'];
const [g,v,t,goten='No tiene valor'] =characters;
console.log(v);
const returnArray=(arr)=>{
    return [arr[0],arr[1]]
}
const returnArray2=([letters,numbers])=>(
     [letters,numbers]
     )

const [letters,numbers]=returnArray(['XYZ',987]);
const [letras,numeros]=returnArray2(['XYZ',455]);
console.log(letters,numbers);
console.log(letras,numeros);