let firstName;
let lastName='Curilla';
//console.log(`${firstName || 'No firstname'} ${lastName || 'No last name'}`)
const isActive=true;
//Nueva forma de hacer if y else  cuando se retorne un valor
const message=(isActive)?'Activo':'Inactivo';
/* if(isActive){
    message='Activo';
}
else{
    message='Inactivo';
} */
console.log(message);