import { derived, type Readable } from 'svelte/store';

const filter = <T>(
	store: Readable<T[]>,
	predicate: (value: T, index: number, array: T[]) => boolean
): Readable<T[]> => derived(store, (values) => values.filter(predicate));

const compact = <T>(store: Readable<T[]>): Readable<T[]> => filter(store, Boolean);

export default filter;
export { compact, filter };
