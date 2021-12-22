import axios from 'axios'
const apiKey='ySPyJciotDNWmNKObTVfT2PosYc4HpR9';
//`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
const gipphyAPI=axios.create({
    baseURL:'https://api.giphy.com/v1/gifs',
    params:{
        api_key:apiKey
    }
})
export default gipphyAPI;

/* gipphyAPI.get('random')
.then(({data})=>data.data)
.then(({images})=>{
const {url}=images.original;
const img= document.createElement('img');
        img.src= url;
        document.body.append(img);
}); */

/* 
.then( resp=>{
    const data=resp.data.data;
    const {url}=data.images.original;
        const img= document.createElement('img');
        img.src= url;
        document.body.append(img);
}); */