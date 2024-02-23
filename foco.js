//se ejecuta al cargar la pagina completa
window.addEventListener('load', function(){
    //llama a la funcion foco()
    foco();
});

function foco(){
    //le agrega una clase body
    document.querySelector('body').classList.add('oscuridad');

    //agrega el titulo 
    const titulo = document.createElement("h1");
    titulo.classList.add("titulo");
    const anio = new Date().getFullYear();
    titulo.innerText = `Demostraciones de desarrollo web ${anio}`;
    document.body.appendChild(titulo);
    const img = document.createElement("img"); //crea un elemento HTML imagen
    img.classList.add('foco'); //le agrega una clase
    img.setAttribute('src', 'images/foco-apagado.jpg');

    //Agregamos una función en el evento click
    img.addEventListener('click', ()=> {
        //busca si la cadena 'apagado' esta en el atributo src
        if(img.src.indexOf("apagado")>0){
            //cambiamos la imagen y el fondo
            img.setAttribute('src', 'images/foco-prendido.jpg');
            document.body.classList.remove('oscuridad');
            document.body.classList.add('luz');
        }else{
            //cambiamos la imagen y el fondo
            img.setAttribute('src', 'images/foco-apagado.jpg');
            document.body.classList.remove('luz');
            document.body.classList.add('oscuridad');
        }
    });

    //agrega la imagen al DOM
    document.body.appendChild(img);
    
}