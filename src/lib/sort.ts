import { derived, type Readable } from 'svelte/store';
import type { ComparatorFn } from './types.js';

const sort = <T>(store: Readable<T[]>, comparator?: ComparatorFn<T>): Readable<T[]> =>
	derived(store, (values) => [...values].sort(comparator));

export default sort;
export { sort, type ComparatorFn };
