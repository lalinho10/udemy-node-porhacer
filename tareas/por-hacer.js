const fs = require('fs');

const colors = require('colors');

let listaTareas = [];

const cargarBD = () => {
    try {
        listaTareas = require('../db/data.json');
    } catch (err) {
        listaTareas = [];
    }
}

const guardarDB = () => {
    var fileData = JSON.stringify(listaTareas);

    fs.writeFile('db/data.json', fileData, (err) => {
        if (err) throw new Error('No se pudo guardar la tarea en la BD', err);
    });
}

const crear = (descripcion) => {
    let tarea = {
        descripcion,
        completa: false
    };

    cargarBD();
    listaTareas.push(tarea)
    guardarDB();

    return tarea;
}

const getLista = (completa) => {
    cargarBD();

    if (completa !== undefined) {
        listaTareas = listaTareas.filter(tarea => tarea.completa === (completa === 'true'));
    }

    return listaTareas;
}

const actualizar = (descripcion, completa = true) => {
    cargarBD();

    const index = listaTareas.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listaTareas[index].completa = completa;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const eliminar = (descripcion) => {
    cargarBD();

    const index = listaTareas.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listaTareas.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getLista,
    actualizar,
    eliminar
}