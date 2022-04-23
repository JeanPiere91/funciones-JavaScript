alert("¡BIENVENIDO A VIAJES BELLOTA PERÚ!");

let nombreCliente = prompt("Antes de iniciar el proceso de cotizacion, nos gustaría saber tu nombre: ");

seleccionarDestino();
function seleccionarDestino(){
    let texto = "Hola " + nombreCliente + " mucho gusto !!\n" +
                "Por favor, seleccione su destino en Perú:\n" +
                "1.- Cusco\n" +
                "2.- Puno\n" +
                "3.- Lima";

    let opcion = prompt(texto);

    switch (opcion) {
        case "1":
            mostrarToursPorDestino(opcion);
            break;
        case "2":
            mostrarToursPorDestino(opcion);
            break;
        case "3":
            mostrarToursPorDestino(opcion);
            break;
        default:
            let salir = confirm("No selecciono un destino correcto, ¿Desea volver a intentar?");
            
            if(salir)
                seleccionarDestino();
            else
                alert("Gracias por utilizar nuestro Sistema");
            break;
    }
}

function mostrarToursPorDestino(destino){
    switch (destino){
        case "1":
            let tours1 = "1.- Machu Picchu\n" +
                        "2.- Valle Sagrado\n" +
                        "3.- City Tour\n" +
                        "4.- Laguna de Humantay"
            let tourSeleccionado1 = prompt(tours1);

            cotizarPaquete(destino, tourSeleccionado1);
            break;
        case "2":
            let tours2 ="1.- Isla de Uros\n" +
                        "2.- Isla Taquile\n" +
                        "3.- Isla Sillustani"
            let tourSeleccionado2 = prompt(tours2);

            cotizarPaquete(destino, tourSeleccionado2);
            break;
        case "3":
            let tours3 ="1.- Recorrido comida peruana\n" +
                        "2.- Paracas, Ica y Huacachina"
            let tourSeleccionado3 = prompt(tours3);

            cotizarPaquete(destino, tourSeleccionado3);
            break;
    }
}

function cotizarPaquete(destino, tour){
    let precio = 0;
    switch(destino){
       case "1":{
           switch (tour){
               case "1" :
                    precio = 220;
                    break;
                case "2" :
                    precio = 100;
                    break;
                case "3" :
                    precio = 45;
                    break;
                case "4" :
                    precio = 80;
                    break;
                default :
                    let seleccionar = confirm("La opción seleccionada no es válida, ¿Desea volver a seleccionar?");
                    if(seleccionar)
                        mostrarToursPorDestino(destino);
                    else
                        alert("Gracias por utilizar nuestro Sistema");
                    break;
           }
       }
       break;
       case "2":{
            switch (tour){
                case "1" :
                    precio = 120;
                    break;
                case "2" :
                    precio = 180;
                    break;
                case "3" :
                    precio = 220;
                    break;
                default :
                    let seleccionar = confirm("La opción seleccionada no es válida, ¿Desea volver a seleccionar?");
                    if(seleccionar)
                        mostrarToursPorDestino(destino);
                    else
                        alert("Gracias por utilizar nuestro Sistema");
                    break;
            }
        }
        break;
        case "3":{
            switch (tour){
                case "1" :
                    precio = 300;
                    break;
                case "2" :
                    precio = 250;
                    break;
                default :
                    let seleccionar = confirm("La opción seleccionada no es válida, ¿Desea volver a seleccionar?");
                    if(seleccionar)
                        mostrarToursPorDestino(destino);
                    else
                        alert("Gracias por utilizar nuestro Sistema");
                    break;
            }
        }
        break;
        default:
            precio = 0;
            break;
    }

    if(precio != 0){
        let confirmarVenta = confirm(`Estimado : ${nombreCliente} el costo del Tour en el destino seleccionado es de ${precio}, ¿Desea confirmar la compra?`);

        if(confirmarVenta){
            let correo = prompt("Por favor ingrese su correo:");
            alert(`Se estará enviando el itineario del tour reservado al correo ${correo}, muchas gracias por su preferencia`);
        }else
            alert("Muchas Gracias, esperamos tenerlo pronto");
    }
    
}