/**
 * @module tools/ver/ver
 * @description Proporciona un menú para filtrar y ver tareas.
 */

import { menuPrompt } from '../input/promptSync';
import { listado } from './listado';
import { TaskObject } from '../../types/taskTypes';

/**
 * Muestra un menú para que el usuario elija cómo filtrar las tareas y luego muestra la lista filtrada.
 * @param {TaskObject[]} tareas - La lista completa de tareas a filtrar.
 * @returns {void}
 */
export function ver(tareas: TaskObject[]): void {
    console.clear();
    console.log("¿Que tareas deseas ver?");
    console.log("1- Todas");
    console.log("2- Pendientes");
    console.log("3- En curso");
    console.log("4- Terminadas");
    console.log("0- Volver");
    
    const opcion: number = menuPrompt("Elige una opcion: ", 0, 4);
    if (opcion === 0) { return; }
    
    let filtradas: TaskObject[] = [];
    if (opcion === 1) { 
        filtradas = tareas; 
    }
    if (opcion === 2) {
        filtradas = tareas.filter(t => t.estado === 'pendiente');
    }
    if (opcion === 3) {
        filtradas = tareas.filter(t => t.estado === 'en curso');
    }
    if (opcion === 4) {
        filtradas = tareas.filter(t => t.estado === 'completada');
    }
    listado(filtradas, opcion);
}