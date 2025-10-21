/**
 * @module tools/input/promptSync
 * @description Proporciona funciones de utilidad para solicitar y validar la entrada del usuario.
 */

import promptSync from 'prompt-sync';
import { ValidationFlag } from '../../types/taskTypes';

const ask = promptSync({ sigint: true });

/**
 * Solicita una entrada de texto al usuario y la valida según las banderas proporcionadas.
 * @param {string} question - La pregunta a mostrar al usuario.
 * @param {ValidationFlag} [flags={ maxLength: Infinity, puedeVacio: false }] - Banderas para validar la entrada.
 * @returns {string} La entrada validada del usuario.
 */
export function prompt(question: string, flags: ValidationFlag = { maxLength: Infinity, puedeVacio: false }): string {
    while (true) {
        let value: string = ask(question);
        if (!flags.puedeVacio && value.trim().length === 0) {
            console.log('La entrada no puede estar vacía.');
            continue;
        }
        if (value.length > flags.maxLength) {
            console.log(`Se ha recortado el texto a ${flags.maxLength} caracteres.`);
            value = value.slice(0, flags.maxLength);
        }
        return value;
    }
}

/**
 * Presenta un conjunto de opciones y solicita al usuario que elija una.
 * @template T
 * @param {Map<T, number>} flags - Un mapa de opciones a números.
 * @returns {T} La opción elegida por el usuario.
 */
export function set<T>(flags: Map<T, number>): T {
    // mostrar todas las opciones disponibles del mapa
    for (let [opcion, numero] of flags) {
        console.log(`${numero} - ${opcion}`);
    }
    while (true) {
        const entrada: string = ask('Elige una opción: ');
        for (let [opcion, numero] of flags) {
            if (String(entrada) === String(numero)) {
                return opcion;
            }
        }
        console.log('Opción inválida, intenta nuevamente.');
    }
}

/**
 * Solicita una entrada numérica al usuario para la navegación del menú.
 * @param {string} question - La pregunta a mostrar.
 * @param {number} min - El valor mínimo aceptable.
 * @param {number} max - El valor máximo aceptable.
 * @returns {number} El número validado.
 */
export function menuPrompt(question: string, min: number, max: number): number {
    while (true) {
        const raw: string = ask(question);
        const num: number = Number(raw);
        if (!Number.isFinite(num)) {
            console.log('Ingresa un número válido.');
            continue;
        }
        const n: number = Math.trunc(num);
        if (n < min || n > max) {
            console.log(`Ingresa un número entre ${min} y ${max}.`);
            continue;
        }
        return n;
    }
}

/**
 * Solicita una fecha al usuario en formato aaaa/mm/dd.
 * @param {string} [question='Fecha (yyyy/mm/dd): '] - La pregunta a mostrar.
 * @param {boolean} [allowEmpty=true] - Si se permite una entrada vacía.
 * @returns {Date | null} La fecha validada o nulo si está vacía.
 */
export function datePrompt(question: string = 'Fecha (yyyy/mm/dd): ', allowEmpty: boolean = true): Date | null {
    const re = /^(\d{4})[/-](\d{2})[/-](\d{2})$/;
    while (true) {
        const s: string = ask(question);
        if (allowEmpty && s.trim() === '') return null;
        const m = s.match(re);
        if (!m) { 
            console.log('Formato inválido. Usa aaaa/mm/dd.'); 
            continue; 
        }
        const yyyy: number = Number(m[1]);
        const mm: number = Number(m[2]);
        const dd: number = Number(m[3]);
        const d: Date = new Date(yyyy, mm - 1, dd);
        if (d.getFullYear() === yyyy && d.getMonth() === mm - 1 && d.getDate() === dd) {
            return d;
        }
        console.log('Fecha inválida.');
    }
}