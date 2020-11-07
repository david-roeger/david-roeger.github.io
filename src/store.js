import { writable } from 'svelte/store';

export const currentSketch = writable(0);
export const sketches = writable([]);
