# Aplicación de consola Tareas por hacer

Este proyecto fue generado manualmente, utilizando NodeJS y Git.

La aplicación permite crear, actualizar, eliminar y mostrar tareas en una lista de pendientes por hacer.

## Instalación de librerías

Ejecute `npm install` para instalar las librerías necesarias para ejecutar la aplicación.

## Crear una tarea y agregarla a la lista de pendientes por hacer

Ejecute `node index crear --descripcion="mensaje"` donde `mensaje` es la descripción de la tarea pendiente por hacer que se va a crear.

## Actualizar una tarea en la lista de pendientes por hacer

Ejecute `node index actualizar --descripcion="mensaje" --completa=bandera` donde `mensaje` es la descripción de la tarea pendiente por hacer y `bandera` es el nuevo estatus de la tarea (el valor por default es true).

## Eliminar una tarea de la lista de pendientes por hacer

Ejecute `node index eliminar --descripcion="mensaje"` donde `mensaje` es la descripción de la tarea pendiente por hacer que se va a eliminar.

## Mostrar lista de pendientes por hacer

Ejecute `node index listar --completa=bandera` donde `bandera` es el estatus de la tarea (es un parámetro opcional).