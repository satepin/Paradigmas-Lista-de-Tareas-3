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

crear.ts se encarga de la creacion y validacion de una unica unidad de tarea, que sera retornada para su manejo en agregar.ts
*/

import { prompt, set, datePrompt} from '../input/promptSync';
import { taskFlags } from '../../core/task';
import { createTask } from '../../core/factory';
import { Task, TaskObject } from '../../types/taskTypes';

/**
 * Recopila los datos del usuario y utiliza el factory para crear un nuevo objeto de tarea.
 * @returns {TaskObject} El objeto de tarea recién creado.
 */
export function crear(): TaskObject {
    console.clear();
    console.log("Estas creando una nueva tarea");

    // 1. Título
    const titulo: string = prompt("1. Ingresa el titulo: ", taskFlags.titulo);

    // 2. Descripción
    const descripcion: string = prompt("2. Ingresa la descripcion: ", taskFlags.descripcion);

    // 3. Estado
    const estado = set(taskFlags.estado);

    // 4. Dificultad
    const dificultad = set(taskFlags.dificultad);
    
    // 5. Vencimiento (BONUS)
    const vencimiento: Date | null = datePrompt("5. Ingresa la fecha de vencimiento (aaaa/mm/dd) o deja en blanco: ");

    // Fechas de creación y edición
    const fechaActual: Date = new Date();
    
    // Crear la tarea usando el template
    const nuevaTarea: Task = {
        titulo: titulo,
        descripcion: descripcion,
        estado: estado,
        creacion: fechaActual,
        uEdicion: fechaActual,
        vencimiento: vencimiento,
        dificultad: dificultad
    };

    const taskObject = createTask(nuevaTarea);

    console.log("\n¡Datos Guardados!");
    taskObject.view();

    //presione cualquier tecla para continuar...

    return taskObject;
}