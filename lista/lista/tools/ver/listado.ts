/**
 * @module tools/ver/listado
 * @description Muestra una lista de tareas y permite al usuario seleccionar una para ver sus detalles.
 */

import { menuPrompt } from "../input/promptSync";
import { TaskObject } from '../../types/taskTypes';

/**
 * Muestra una lista de tareas en la consola.
 * @param {TaskObject[]} tareas - La lista de tareas a mostrar.
 * @param {string | number} [etiqueta=''] - Una etiqueta opcional para mostrar sobre la lista.
 * @returns {void}
 */
export function listado(tareas: TaskObject[], etiqueta: string | number = ''): void {
    if (etiqueta) console.log(`\nResultados para: ${etiqueta}`);
    if (!Array.isArray(tareas) || tareas.length === 0) {
        console.log('No hay tareas para mostrar.');
        return;
    }
    tareas.forEach((t, i) => {
        console.log(`[${i + 1}] - ${t.titulo}`);
    });
    console.log("\n¿Deseas ver los detalles de alguna?");
    elegir(tareas);
}

/**
 * Permite al usuario elegir una tarea de la lista para ver sus detalles.
 * @param {TaskObject[]} tareas - La lista de tareas de la que elegir.
 * @private
 */
function elegir(tareas: TaskObject[]): void {
    const index: number = menuPrompt("Introduce el número de la tarea a ver o 0 para volver: ", 0, tareas.length);
    if (index === 0) return;
    const tareaSeleccionada = tareas[index - 1];
    if (tareaSeleccionada) {
        tareaSeleccionada.view();
    }
}