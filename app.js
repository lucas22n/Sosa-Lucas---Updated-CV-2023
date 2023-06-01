let boton=document.querySelector("#cambiar_color");


let aleatorio1= (240);
let aleatorio2= (236);
let aleatorio3= (226);
let aleatorio4= (220);

// console.log("Ale1:",aleatorio1);
// console.log("Ale2: ",aleatorio2);
// console.log("Ale3: ",aleatorio3);
// console.log("Ale4: ",aleatorio4);



    boton.addEventListener("click", ()=>
    {
        document.body.style.backgroundColor=`rgba(${aleatorio1}, ${aleatorio2}, ${aleatorio3}, ${aleatorio4})`;
    });