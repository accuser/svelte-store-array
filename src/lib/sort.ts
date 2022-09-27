import { derived, type Readable } from 'svelte/store';

const sort = <T>(store: Readable<T[]>, compareFn?: (a: T, b: T) => number): Readable<T[]> =>
	derived(store, (values) => values.sort(compareFn));

export default sort;
export { sort };
