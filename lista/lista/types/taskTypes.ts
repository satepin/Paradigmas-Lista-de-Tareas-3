/**
 * @module types/taskTypes
 * @description Define los tipos e interfaces utilizados en toda la aplicación.
 */

/**
 * Define los posibles estados de una tarea.
 * @typedef {'pendiente' | 'en curso' | 'completada' | 'cancelada'} TaskStatus
 */
export type TaskStatus = 'pendiente' | 'en curso' | 'completada' | 'cancelada';

/**
 * Define los posibles niveles de dificultad de una tarea.
 * @typedef {'facil' | 'medio' | 'dificil'} TaskDifficulty
 */
export type TaskDifficulty = 'facil' | 'medio' | 'dificil';

/**
 * @interface Task
 * @description Representa la estructura de datos de una tarea.
 * @property {string} titulo - El título de la tarea.
 * @property {string} descripcion - La descripción de la tarea.
 * @property {TaskStatus} estado - El estado actual de la tarea.
 * @property {Date | null} creacion - La fecha de creación de la tarea.
 * @property {Date | null} uEdicion - La fecha de la última edición de la tarea.
 * @property {Date | null} vencimiento - La fecha de vencimiento de la tarea.
 * @property {TaskDifficulty} dificultad - El nivel de dificultad de la tarea.
 */
export interface Task {
    titulo: string;
    descripcion: string;
    estado: TaskStatus;
    creacion: Date | null;
    uEdicion: Date | null;
    vencimiento: Date | null;
    dificultad: TaskDifficulty;
}

/**
 * @interface ValidationFlag
 * @description Define las reglas de validación para una entrada de texto.
 * @property {number} maxLength - La longitud máxima permitida.
 * @property {boolean} puedeVacio - Si la entrada puede estar vacía.
 */
export interface ValidationFlag {
    maxLength: number;
    puedeVacio: boolean;
}

/**
 * @interface TaskFlags
 * @description Agrupa todas las banderas de validación para los campos de una tarea.
 * @property {ValidationFlag} titulo - Banderas para el título.
 * @property {ValidationFlag} descripcion - Banderas para la descripción.
 * @property {Map<TaskStatus, number>} estado - Mapa de opciones para el estado.
 * @property {Map<TaskDifficulty, number>} dificultad - Mapa de opciones para la dificultad.
 */
export interface TaskFlags {
    titulo: ValidationFlag;
    descripcion: ValidationFlag;
    estado: Map<TaskStatus, number>;
    dificultad: Map<TaskDifficulty, number>;
}

/**
 * @interface TaskObject
 * @description Define la interfaz pública de un objeto de tarea.
 * @property {() => void} view - Muestra los detalles de la tarea.
 * @property {() => void} edit - Permite editar la tarea.
 * @property {string} titulo - El título de la tarea (solo lectura).
 * @property {TaskStatus} estado - El estado de la tarea (solo lectura).
 */
export interface TaskObject {
    view: () => void;
    edit: () => void;
    readonly titulo: string;
    readonly estado: TaskStatus;
}