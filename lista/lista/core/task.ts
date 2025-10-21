/**
 * @module core/task
 * @description Define la estructura de datos y las banderas de validación para las tareas.
 */

import { Task, TaskFlags, TaskStatus, TaskDifficulty, ValidationFlag } from '../types/taskTypes';

/**
 * Plantilla por defecto para un objeto de tarea.
 * @type {Task}
 */
const task: Task = {
    titulo: '',
    descripcion: '',
    estado: 'pendiente',
    creacion: null,
    uEdicion: null,
    vencimiento: null,
    dificultad: 'facil'
};

/**
 * Lista de tareas en memoria (actualmente no utilizada, se gestiona en index.ts).
 * @type {Task[]}
 * @deprecated
 */
const listaTareas: Task[] = [];

/**
 * Banderas de validación para el título de una tarea.
 * @type {ValidationFlag}
 */
const flagTitulo: ValidationFlag = {
    maxLength: 100,
    puedeVacio: false
};

/**
 * Banderas de validación para la descripción de una tarea.
 * @type {ValidationFlag}
 */
const flagDescripcion: ValidationFlag = {
    maxLength: 500,
    puedeVacio: true
};

/**
 * Mapa de opciones para el estado de una tarea.
 * @type {Map<TaskStatus, number>}
 */
const flagEstado = new Map<TaskStatus, number>([
    ["pendiente", 1],
    ["en curso", 2], 
    ["completada", 3],
    ["cancelada", 4]
]);

/**
 * Mapa de opciones para la dificultad de una tarea.
 * @type {Map<TaskDifficulty, number>}
 */
const flagDificultad = new Map<TaskDifficulty, number>([
    ["facil", 1],
    ["medio", 2],
    ["dificil", 3]
]);

/**
 * Agrupa todas las banderas de validación para una tarea.
 * @type {TaskFlags}
 */
const taskFlags: TaskFlags = {
    titulo: flagTitulo,
    descripcion: flagDescripcion,
    estado: flagEstado,
    dificultad: flagDificultad
};

export { task, taskFlags, listaTareas };