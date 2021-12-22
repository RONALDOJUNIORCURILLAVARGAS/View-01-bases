const apiKey='ySPyJciotDNWmNKObTVfT2PosYc4HpR9';
//https://api.giphy.com/v1/gifs/random?api_key=ySPyJciotDNWmNKObTVfT2PosYc4HpR9

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp=>resp.json())
    .then(({data})=>{
        const {url}=data.images.original;
        const img= document.createElement('img');
        img.src= url;
        document.body.append(img);
    });
console.log('hola mundo');