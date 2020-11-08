import { writable } from 'svelte/store';

export const currentSketch = writable(1);
export const sketches = writable([]);
