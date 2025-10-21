/**
 * @module core/mainMenu
 * @description Gestiona el menú principal de la aplicación y la navegación.
 */

import { menuPrompt } from "../tools/input/promptSync";
import { ver } from "../tools/ver/ver";
import { buscar } from "../tools/ver/buscar";
import { agregar } from "../tools/alta/agregar";
import { TaskObject } from '../types/taskTypes';

/**
 * Muestra el menú principal en la consola.
 * @param {string} username - El nombre del usuario a saludar.
 * @private
 */
function seeMainMenu(username: string): void {
    console.log(`Hola ${username}`);
    console.log("¿Que deseas hacer?");
    console.log("1- Ver mis Tareas");
    console.log("2- Buscar una Tarea");
    console.log("3- Agregar una nueva Tarea");
    console.log("0- salir");
}

/**
 * Orquesta el menú principal, permitiendo al usuario elegir una acción.
 * @param {TaskObject[]} listaTareas - La lista de tareas actual.
 * @param {string} username - El nombre del usuario.
 * @returns {boolean} `false` si el usuario elige salir, de lo contrario `true`.
 */
export function mainMenu(listaTareas: TaskObject[], username: string): boolean {
    seeMainMenu(username);
    const menuIndex: number = menuPrompt("", 0, 3);
    switch (menuIndex) {
        case 1:
            //ver tarea
            ver(listaTareas);
            break;
        case 2:
            //buscar una tarea
            buscar(listaTareas);
            break;
        case 3:
            //agregar una nueva tarea a la lista de tareas
            agregar(listaTareas);
            break;
        case 0:
            console.log("Saliendo...");
            return false;
        default:
            console.log("Opción no válida");
            break;
    }
    return true;
}