//Variables 
const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");

//Funcion
const cifrar = () =>{
    const textoIngresado = texto.value;
    textoCifrado.value = textoIngresado
    .split("")
    .map((caracter) =>{
        let mayus = caracter === caracter.toUpperCase() ? true : false;
        let valorEntero = caracter.toLowerCase().charCodeAt(0);
        
        if(valorEntero >= 97 && valorEntero <= 122){
            const valorDesplazamiento = parseInt(desplazamiento.value);
            if(valorEntero + valorDesplazamiento > 122){
                valorEntero = 97 + (valorEntero - 122) + valorDesplazamiento -1;
            }else{
                valorEntero = valorEntero + valorDesplazamiento;
            }
        }
        let cifrado = String.fromCharCode(valorEntero);
        return mayus ? cifrado.toUpperCase() : cifrado;
    })
    .join("");
}
texto.addEventListener("keyup", cifrar);
desplazamiento.addEventListener("change", cifrar);