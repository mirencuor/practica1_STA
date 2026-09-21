alert("¡Hola, el archivo JS está enlazado!");


// 1. Seleccionamos los elementos del HTML
const inputBuscador = document.getElementById('buscador');
const botonEnviar = document.getElementById('boton');
const contenedorResultado = document.getElementById('resultado');

// Reemplaza ESTO por la clave que te llegó al correo
const miApiKey = "TU_CLAVE_AQUI"; 

// 2. Le decimos al botón qué hacer cuando le hagan clic
botonEnviar.addEventListener('click', function() {
    // Obtenemos el texto que escribió el usuario
    const titulo = inputBuscador.value; 
    
    // 3. Preparamos la URL de la API de OMDB
    const url = `https://www.omdbapi.com/?t=${titulo}&apikey=${miApiKey}`;

    // 4. Hacemos la petición a la API usando "fetch"
    fetch(url)
        .then(respuesta => respuesta.json()) // Convertimos la respuesta a formato JSON
        .then(datos => {
            // Comprobamos si la película existe
            if (datos.Response === "True") {
                // Mostramos el Director y el Año como pide la práctica
                contenedorResultado.innerHTML = `
                    <p><strong>Director:</strong> ${datos.Director}</p>
                    <p><strong>Año:</strong> ${datos.Year}</p>
                `;
            } else {
                contenedorResultado.innerHTML = `<p>Película no encontrada.</p>`;
            }
        })
        .catch(error => {
            console.error("Hubo un error con la petición:", error);
        });
});
