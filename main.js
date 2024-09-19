let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");
let botonLimpiar = document.getElementById("limpiar");
let nivelSeguridad;
let botonCopiar = document.getElementById("copiar");

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generar(){
    let numeroDigitado = parseInt (cantidad.value);

    if (numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor que 8");
    }

    let password = "";
    for (let i=0; i<numeroDigitado; i++){
        
        let caracterALeatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];
        password+=caracterALeatorio;
    }

    contrasena.value = password;

    setTimeout(function() { //SetTimeout es una funcion que permite retrasar el tiempo de entrada
        nivelSeguridad = validarContrasena(password);
        alert(`la contraseña es: ${nivelSeguridad}`);
    }, 100); // este es el tiempo que se va a tardar en entrar 100 milisegundos
}

function limpiarCampo(){
    contrasena.value = "";
}

function validarContrasena(contrasena){
    let nivel = "debil";

    if (contrasena.length >= 8){
        nivel = "segura";
    }
    if (contrasena.length >= 12){
        nivel = "Fuerte"
    }
    if (/[A-Z]/.test(contrasena) && /[a-z]/.test(contrasena) && /[0-9]/.test(contrasena)){
        nivel = "Segura";
    }
    if (/[A-Z]/.test(contrasena) && /[a-z]/.test(contrasena) && /[0-9]/.test(contrasena) && /[!-)]/.test(contrasena)){
        nivel = "Fuerte";
    }

    return nivel;
}

async function copiarAlPortapepeles(texto) {
    try {
        await navigator.clipboard.writeText(texto);
        alert("Contraseña copiada al portapapeles");
    } catch (err){
        console.error("Error al copiar al portapeles: ", err);
    }
}

botonCopiar.addEventListener("click", function(){
    let contraseña = contrasena.value;
    copiarAlPortapepeles(contraseña);
})







