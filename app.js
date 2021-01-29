class Tarea {

    constructor(id, descripcion) {
        this.id = id;
        this.descripcion = descripcion;
    }

    crearTarea(id, descripcion) {
        constructor(id, descripcion);
    }
    editarTarea(id, descripcion) {
        this.id = id;
        this.descripcion = descripcion;
    }

}



function editarTarea(id, listaTareas, nuevaDescripcion) {

    debugger;

    for (let tarea of listaTareas) {
        for (let task in tarea) {
            if ((task == "id") && (tarea[task] === id)) {

                tarea.editarTarea(id, nuevaDescripcion);


            }
        }

    }

}

function borrarTarea(id, listaTareas) {

    for (let tarea of listaTareas) {
        for (let task in tarea) {
            if ((task == "id") && (tarea[task] === id)) {

                listaTareas.splice(id - 1, 1);


            }
        }

    }


}

function mostrarLista(listaTareas) {
    console.log(`Cantidad de Tareas: ${listaTareas.length}`);
    console.table(listaTareas);
}

function encontrarTarea(id, listaTareas) {
    let encontrado = false;
    for (let tarea of listaTareas) {
        for (let task in tarea) {
            if ((task == "id") && (tarea[task] === id)) {


                encontrado = true;

            }
        }

    }
    return encontrado;
}

let misTareas = [];

function principal() {

    let contadorTarea = 0;
    let descripcion = '';
    let miTarea = new Object();
    let n = 0;
    let idMod = 0;
    let encontrado = false;


    do {
        try {

            n = Number(window.prompt('Digite la opcion que desea realizar'));

            switch (n) {

                case 1:
                    contadorTarea++;
                    descripcion = window.prompt('ingrese la descripcion de la tarea');
                    miTarea = new Tarea(contadorTarea, descripcion);
                    misTareas.push(miTarea);
                    mostrarLista(misTareas);

                    break;

                case 2:
                    if (contadorTarea > 0) {

                        idMod = Number(window.prompt('ingrese el id que desea modificar'));
                        encontrado = encontrarTarea(idMod, misTareas);

                        if (encontrado) {

                            descripcion = window.prompt('ingrese la nueva descripcion');
                            editarTarea(idMod, misTareas, descripcion);
                            mostrarLista(misTareas);

                        } else {

                            throw new Error("No existe la tarea");
                        }

                        break;
                    } else {
                        throw new Error('No se ha asignado aún ninguna tarea, por tanto no se puede modificar')
                    }

                case 3:
                    if (contadorTarea > 0) {

                        idMod = Number(window.prompt('ingrese el id que desea eliminar'));
                        encontrado = encontrarTarea(idMod, misTareas);

                        if (encontrado) {

                            borrarTarea(idMod, misTareas);
                            mostrarLista(misTareas);

                        } else {
                            throw new Error("No se encontro el id de la tarea que se quiere eliminar, intente de nuevo")
                        }

                        break;
                    } else {
                        throw new Error('No se ha asignado aún ninguna tarea, por tanto no se puede eliminar')
                    }

                case 4:
                    break;
            }
        } catch (error) {

            alert(error);
        }


    } while (n != 4)



}
setTimeout(() => {
    principal()
}, 7000)