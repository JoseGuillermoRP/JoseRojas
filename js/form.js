document.querySelector('#enviar').addEventListener('click',function(){
    let nombre = document.querySelector('#nombre').value;
    let numerocelular = document.querySelector('#numerocelular').value;
    let email = document.querySelector('#email').value;
    let mensaje = document.querySelector('#mensaje').value;

    let url = "https://api.whatsapp.com/send?phone=+51969198897&text=*Informacion*%0A*de*%0A*Contacto*%0A%0A*Nombre:*%0A" + nombre + "%0A*Numero*%0A*de*%0A*Celular:*%0A" + numerocelular + "%0A*Correo*%0A*electronico:*%0A" + email + "%0A*Mensaje:*%0A" + mensaje;
    window.open(url);
});