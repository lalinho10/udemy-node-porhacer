const colors = require('colors');

const argv = require('./configuracion/yargs').argv;

const tareasPorHacer = require('./tareas/por-hacer');

const comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log(colors.blue('Se crea una tarea por hacer:'));

        let tarea = tareasPorHacer.crear(argv.descripcion);

        console.log(tarea.descripcion);

        break;
    case 'listar':
        console.log(colors.blue('Mostrando las tareas por hacer\n'));
        console.log(colors.yellow('P - Pendientes'));
        console.log(colors.green('C - Completas'));
        console.log(colors.blue('\n******************************'));

        let listaTareas = tareasPorHacer.getLista();

        for (let tarea of listaTareas) {
            console.log(`${ tarea.completa ? colors.green('(C)') : colors.yellow('(P)') } - ${ tarea.descripcion }`);
            console.log(colors.blue('******************************'));
        }

        break;
    case 'actualizar':
        console.log(colors.blue('Se actualiza una tarea por hacer'));
        console.log(argv.descripcion);

        let resultado = tareasPorHacer.actualizar(argv.descripcion, argv.completa);

        if (resultado) {
            console.log(colors.green('¡Tarea actualizada de manera exitosa!'));
        } else {
            console.log(colors.red('Tarea no actualizada'));
        }

        break;
    case 'eliminar':
        console.log(colors.blue('Se elimina una tarea por hacer'));
        console.log(argv.descripcion);

        let res = tareasPorHacer.eliminar(argv.descripcion);

        if (res) {
            console.log(colors.green('¡Tarea eliminada de manera exitosa!'));
        } else {
            console.log(colors.red('Tarea no eliminada'));
        }

        break;
    default:
        console.log(colors.red('Comando desconocido'));
        break;
}