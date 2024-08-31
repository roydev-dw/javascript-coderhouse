let tareas = [];

function agregarTarea(tarea) {
  tareas.push(tarea);
  alert('Se ha agregado la tarea "' + tarea + '" exitosamente.');
}

function verTareas(listaTareas) {
  alert('Revisa la lista de tareas en la consola del navegador.')
  console.log('Lista de tareas: ');
  if (listaTareas.length === 0) {
    console.log('No hay ningúna tarea en la lista.');
  } else {
    for (let i = 0; i < listaTareas.length; i++) {
      console.log((i + 1) + '. ' + listaTareas[i]);
    }
  }
}

const eliminarTarea = (indice) => {
  if (indice > 0 && indice <= tareas.length) {
    let tareaEliminada = tareas.splice(indice - 1, 1);
    alert('La tarea ' + tareaEliminada + ', ha sido eliminada exitosamente.');
  } else {
    alert('El número de tareas ingresado no es válido.');
  }
}

function menu() {

  let ciclo = true;

  while (ciclo) {

    opcionUsuario = parseInt(prompt('Seleccione una opción:\n1. Agregar tarea\n2. Ver tareas\n3. Eliminar tarea\n4. Salir'));

    switch (opcionUsuario) {

      case 1:
        let nuevaTarea = prompt('Ingrese el nombre de la tarea que desea agregar: ');
        agregarTarea(nuevaTarea);
        break;

      case 2:
        verTareas(tareas);
        break;

      case 3:
        let indice = parseInt(prompt('Ingrese el número de la tarea que desea eliminar'));
        eliminarTarea(indice);
        break;

      case 4:
        let confirmarSalida = confirm('¿Desea salir de ToDo List?');
        if (confirmarSalida) {
          alert('*** Gracias por usar ToDo List ***');
          ciclo = false
        }
        break;

      default:
        alert('La opción ingresada no es valida, intentelo nuevamente.')
        break;
    }
  }
}

menu();