import { derived, type Readable } from 'svelte/store';

const map = <T, U>(
	store: Readable<T[]>,
	callbackFn: (value: T, index: number, array: T[]) => U
): Readable<U[]> => derived(store, (values) => values.map(callbackFn));

export default map;
export { map };
