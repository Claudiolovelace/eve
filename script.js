/* =========================================
   FRASES RANDOM
========================================= */

const frases = [

    "💙 Hoy estás oficialmente autorizada para ser insoportable.",

    "😂 No sé por qué estás leyendo esto, pero ya llegaste hasta acá.",

    "🌸 Si estás viendo esto, alguien se tomó el tiempo de hacerte una página.",

    "💙 Eres increíble... la mayoría de las veces 😂.",

    "🌼 Recuerda tomar agua. Este mensaje es patrocinado por el agua.",

    "😂 Departamento de cosas random: esta página fue aprobada.",

    "💙 Espero que tengas un día bonito, aunque seas kchuda.",

    "✨ Sonríe, que todavía es gratis.",

    "🌸 No tengo nada más que decir. Solo quería molestarte.",

    "😂 Si llegaste hasta aquí, te ganaste un abrazo imaginario.",

    "💙 Esta página tiene flores porque obviamente tenía que tener flores.",

    "😂 Y sí... también tiene BL."

];


let indice = 0;


function cambiarFrase() {

    const frase =
        document.getElementById("frase");


    frase.style.opacity = "0";


    setTimeout(() => {

        indice++;

        if (indice >= frases.length) {

            indice = 0;

        }


        frase.textContent =
            frases[indice];


        frase.style.opacity = "1";

    }, 300);

}


setInterval(
    cambiarFrase,
    3500
);


/* =========================================
   ELEMENTOS
========================================= */

const boton =
    document.getElementById(
        "botonFeliz"
    );


const hackScreen =
    document.getElementById(
        "hackScreen"
    );


const hackTexto =
    document.getElementById(
        "hackTexto"
    );


const progreso =
    document.getElementById(
        "progreso"
    );


const porcentaje =
    document.getElementById(
        "porcentaje"
    );


const mensaje =
    document.getElementById(
        "mensajeFinal"
    );


const galeria =
    document.getElementById(
        "galeriaBL"
    );


const flores =
    document.getElementById(
        "flores"
    );


const ramoFlores =
    document.getElementById(
        "ramoFlores"
    );


const foto1 =
    document.querySelector(
        ".foto1"
    );


const foto2 =
    document.querySelector(
        ".foto2"
    );


const foto3 =
    document.querySelector(
        ".foto3"
    );


/* =========================================
   BOTÓN
========================================= */

boton.addEventListener(
    "click",
    iniciarHackeo
);


/* =========================================
   SIMULACIÓN DE HACKEO
========================================= */

function iniciarHackeo() {

    boton.disabled = true;

    boton.textContent =
        "⚠️ Procesando...";


    hackScreen.classList.add(
        "mostrar"
    );


    let progresoActual = 0;

    let mensajeActual = 0;


    const mensajes = [

        "Conectando con el dispositivo...",

        "Analizando almacenamiento...",

        "Buscando fotos...",

        "Buscando mensajes...",

        "Analizando archivos personales...",

        "Extrayendo información...",

        "Descargando datos...",

        "Acceso concedido..."

    ];


    const carga =
        setInterval(() => {

            progresoActual += 4;


            progreso.style.width =
                progresoActual + "%";


            porcentaje.textContent =
                progresoActual + "%";


            /*
             Cambiar mensajes
            */

            if (
                progresoActual % 12 === 0 &&
                mensajeActual <
                mensajes.length - 1
            ) {

                mensajeActual++;

                hackTexto.textContent =
                    mensajes[
                        mensajeActual
                    ];

            }


            /*
             Llegamos al 100%
            */

            if (
                progresoActual >= 100
            ) {

                clearInterval(carga);


                hackTexto.textContent =
                    "DATOS DEL CELULAR COMPROMETIDOS";


                setTimeout(() => {

                    hackTexto.textContent =
                        "JAJAJAJA... ERA BROMA 😂";

                }, 1300);


                setTimeout(() => {

                    hackScreen.classList.remove(
                        "mostrar"
                    );


                    iniciarSorpresa();

                }, 3000);

            }

        }, 150);

}


/* =========================================
   SORPRESA
========================================= */

function iniciarSorpresa() {

    boton.textContent =
        "🌸 Feliz día de las flores azules 💙";


    /*
     1. Aparece el ramo
    */

    setTimeout(() => {

        ramoFlores.classList.add(
            "mostrar"
        );

    }, 300);


    /*
     2. Flores azules flotando
    */

    setTimeout(() => {

        crearFlores();

    }, 1800);


    /*
     3. Desaparece el ramo
    */

    setTimeout(() => {

        ramoFlores.classList.remove(
            "mostrar"
        );

    }, 5000);


    /*
     4. Aparece el mensaje
    */

    setTimeout(() => {

        mensaje.classList.add(
            "mostrar"
        );

    }, 5000);


    /*
     5. Aparece la galería
    */

    setTimeout(() => {

        galeria.classList.add(
            "mostrar"
        );

    }, 6500);


    /*
     6. Primera foto
    */

    setTimeout(() => {

        foto1.classList.add(
            "animar"
        );

    }, 6900);


    /*
     7. Segunda foto
    */

    setTimeout(() => {

        foto2.classList.add(
            "animar"
        );

    }, 7500);


    /*
     8. Tercera foto
    */

    setTimeout(() => {

        foto3.classList.add(
            "animar"
        );

    }, 8100);

}


/* =========================================
   FLORES AZULES FLOTANTES
========================================= */

function crearFlores() {

    const cantidad = 50;


    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        setTimeout(() => {

            const flor =
                document.createElement(
                    "div"
                );


            flor.classList.add(
                "florAzul"
            );


            /*
             Posición aleatoria
            */

            flor.style.left =
                Math.random() *
                100 +
                "vw";


            /*
             Tamaño
            */

            const tamanio =
                15 +
                Math.random() *
                25;


            flor.style.width =
                tamanio + "px";


            flor.style.height =
                tamanio + "px";


            /*
             Duración
            */

            flor.style.animationDuration =
                (
                    4 +
                    Math.random() *
                    4
                ) +
                "s";


            flores.appendChild(
                flor
            );


            /*
             Eliminar
            */

            setTimeout(() => {

                flor.remove();

            }, 8500);


        }, i * 100);

    }

}