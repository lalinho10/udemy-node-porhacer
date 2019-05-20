const descripcion = { alias: 'd', demand: true, desc: 'Descripción de la tarea pendiente por hacer' };

const completa = { alias: 'c', default: true, desc: 'Bandera que indica si la tarea ya fue hecha o no' }

const argv =
    require('yargs')
    .command('crear', 'Crea una tarea pendiente por hacer', {
        descripcion
    })
    .command('listar', 'Muestra la lista de tareas pendientes por hacer', {})
    .command('actualizar', 'Actualiza una tarea pendiente por hacer', {
        descripcion,
        completa
    })
    .command('eliminar', 'Elimina una tarea de la lista de pendientes por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}