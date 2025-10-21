/**
 * @file Punto de entrada principal de la aplicación de lista de tareas.
 * @description Este archivo inicializa la aplicación, gestiona el bucle principal y mantiene el estado de la lista de tareas.
 */

import { mainMenu } from './mainMenu';
import { TaskObject } from '../types/taskTypes';

/**
 * Función principal que ejecuta la aplicación.
 * @returns {void}
 */
function main(): void {
   const username: string = "Usuario"; // pedir nombre usuario
   let loop: boolean = true;
   // Lista de tareas en memoria (se pasa al menú)
   const listaTareas: TaskObject[] = [];
   
   do {
      loop = mainMenu(listaTareas, username);
   } while (loop); // agregar salida al menu
}

main();