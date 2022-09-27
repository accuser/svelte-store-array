import { derived, type Readable } from 'svelte/store';

const reduce = <T, U>(
	store: Readable<T[]>,
	callbackFn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U,
	initialValue: U
): Readable<U> => derived(store, (values) => values.reduce(callbackFn, initialValue));

export default reduce;
export { reduce };
