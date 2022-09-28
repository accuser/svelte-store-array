import { derived, type Readable } from 'svelte/store';

const sort = <T>(store: Readable<T[]>, comparator?: ComparatorFn<T>): Readable<T[]> =>
	derived(store, (values) => [...values].sort(comparator));

export default sort;
export { sort };
