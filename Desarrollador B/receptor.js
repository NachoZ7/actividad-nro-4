document.addEventListener("DOMContentLoaded", function () {
    const parametrosURL = new URLSearchParams(window.location.search);
    const nombre = parametrosURL.get("nombre");
    const email = parametrosURL.get("email");
    const edad = parametrosURL.get("edad");
    const pais = parametrosURL.get("pais");
    const terminos = parametrosURL.get("terminos");
    if (nombre && email && edad && pais) {
        
        document.getElementById("res-nombre").value = nombre;
        document.getElementById("res-email").value = email;
        document.getElementById("res-edad").value = `${edad} años`;
        document.getElementById("res-pais").value = pais;
        document.getElementById("res-terminos").value = terminos === "aceptado" ? "Aceptados correctamente" : "No aceptados";
    } else {
        const contenedor = document.getElementById("contenedor-datos");
        contenedor.innerHTML = `<p style="font-size: 1.8rem; color: #ef4444; font-weight: bold; text-align: center;">
                                    No se encontraron datos recibidos en la URL.
                                </p>`;
    }
});