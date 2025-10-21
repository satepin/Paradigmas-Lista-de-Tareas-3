/**
 * @module tools/alta/agregar
 * @description Orquesta la adición de una nueva tarea a la lista.
 */

/* Estas creando una nueva tarea
1. Ingresa el titulo: -
2. Ingresa la descripcion: -
3. estado (pendiente, en curso, terminada): -
4. dificultad (facil, medio, dificil): -
5. vencimiento (dd/mm/aaaa): -

¡Datos Guardados!
presiona cualquier tecla para continuar...

- Nuestra persona usuaria debe poder ingresar un cada atributo por separado.
- Para el atributo Estado, deben darse opciones de ingreso, ya que los valores son acotados.
- Para el atributo Dificultad, deben darse opciones de ingreso, ya que los valores son acotados.
- Debe informarse que se han guardado los datos.
- La persona debe poder volver al Menu principal o al Menu anterior (a criterio del equipo de desarrollo)
- Fecha de Vencimiento (BONUS)

agregar.ts recibe una tarea creada y verificada en crear.ts y la agrega a una lista de tareas
*/

import { crear } from './crear';
import { TaskObject } from '../../types/taskTypes';

/**
 * Guía al usuario para crear una nueva tarea y la agrega a la lista de tareas.
 * @param {TaskObject[]} listaTareas - La lista de tareas a la que se agregará la nueva tarea.
 * @returns {void}
 */
export function agregar(listaTareas: TaskObject[]): void {
    console.clear();
    console.log("Agregar Tarea");
    const nuevaTarea = crear();
    listaTareas.push(nuevaTarea);
    console.log("\n¡Tarea Agregada a la Lista!");
    console.log(`Total de Tareas: ${listaTareas.length}`);
    //presione cualquier tecla para continuar...
}