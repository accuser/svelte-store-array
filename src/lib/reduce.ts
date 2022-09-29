import { derived, type Readable } from 'svelte/store';
import type { ReduceFn } from './types';

const reduce = <T, U>(
	store: Readable<T[]>,
	callback: ReduceFn<T, U>,
	initialValue: U
): Readable<U> => derived(store, (values) => values.reduce(callback, initialValue));

export default reduce;
export { reduce, type ReduceFn };
