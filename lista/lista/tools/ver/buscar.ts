/**
 * @module tools/ver/buscar
 * @description Permite al usuario buscar tareas por título.
 */

import { prompt } from "../input/promptSync";
import { taskFlags } from '../../core/task';
import { listado } from '../ver/listado';
import { TaskObject } from '../../types/taskTypes';

/**
 * Solicita al usuario un término de búsqueda, filtra las tareas por título y muestra los resultados.
 * @param {TaskObject[]} listaTareas - La lista de tareas en la que buscar.
 * @returns {void}
 */
export function buscar(listaTareas: TaskObject[]): void {
    console.clear();
    console.log("Buscar Tarea");
    const busqueda: string = prompt("Introduce el titulo de una tarea para buscarla: ", taskFlags.titulo);
    
    const resultados = listaTareas.filter(tarea => 
        tarea.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );
    
    if (resultados.length > 0) {
        listado(resultados, busqueda);
    } else {
        console.log("\nNo hay tareas relacionadas con la busqueda");
    }
    //presione cualquier tecla para continuar...
}