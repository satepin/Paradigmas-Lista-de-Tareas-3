/**
 * @module core/factory
 * @description Módulo para crear objetos de tarea con comportamiento encapsulado.
 */

import { prompt, set } from '../tools/input/promptSync';
import { taskFlags } from "./task";
import { Task, TaskObject } from '../types/taskTypes';

/**
 * Crea un objeto de tarea que encapsula sus datos y comportamiento.
 * @param {Task} initialData - Los datos iniciales para la tarea.
 * @returns {TaskObject} Un objeto de tarea con métodos para ver y editar.
 */
export function createTask(initialData: Task): TaskObject {
    let data = { ...initialData }; // Private data

    /**
     * Imprime los detalles de la tarea en la consola.
     * @private
     */
    const printDetails = (): void => {
        console.clear();
        console.log("Esta es la tarea que elegiste:");
        console.log(`Titulo: ${data.titulo}`);
        console.log(`Descripcion: ${data.descripcion || 'Sin descripción'}`);
        console.log(`Estado: ${data.estado}`);
        console.log(`Dificultad: ${data.dificultad}`);
        console.log(`Vencimiento: ${data.vencimiento?.toLocaleDateString() || 'Sin fecha de vencimiento'}`);
        console.log(`Creacion: ${data.creacion?.toLocaleDateString() || 'Sin fecha de creación'}`);
    };

    /**
     * Permite al usuario editar los detalles de la tarea.
     * @private
     */
    const edit = (): void => {
        console.clear();
        console.log(`Estas editando la tarea ${data.titulo}`);
        console.log("- si deseas mantener los valores de un atributo, simplemente dejalo en blanco");
        console.log("- si deseas dejar en blanco un atributo, escribe un espacio\n");
        
        const descripcion: string = prompt("1. Ingresa la descripcion: ", taskFlags.descripcion);
        const estado = set(taskFlags.estado);
        const dificultad = set(taskFlags.dificultad);
        
        const fechaActual: Date = new Date();
        
        if (descripcion !== '') {
            data.descripcion = descripcion === ' ' ? '' : descripcion;
        }
        
        data.estado = estado;
        data.dificultad = dificultad;
        data.uEdicion = fechaActual;
        
        console.log("\n¡Datos Guardados!");
        printDetails();
    };

    /**
     * Muestra los detalles de la tarea y ofrece la opción de editarla.
     * @public
     */
    const view = (): void => {
        printDetails();
        console.log("\nSi deseas editarla, pulsa E, o presiona 0 para salir.");
        const opcion: string = prompt("Elige una opcion: ", { maxLength: 1, puedeVacio: false });
        if (opcion.toLowerCase() === 'e') {
            edit();
        } else if (opcion === '0') {
            console.log("Saliendo...");
        }
    };

    return {
        view,
        edit,
        /**
         * @property {string} titulo - El título de la tarea.
         */
        get titulo() { return data.titulo; },
        /**
         * @property {TaskStatus} estado - El estado actual de la tarea.
         */
        get estado() { return data.estado; }
    };
}