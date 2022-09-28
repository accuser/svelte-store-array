import { derived, type Readable } from 'svelte/store';

const filter = <T>(store: Readable<T[]>, predicate: PredicateFn<T>): Readable<T[]> =>
	derived(store, (values) => values.filter(predicate));

const compact = <T>(store: Readable<T[]>): Readable<T[]> => filter(store, Boolean);

export default filter;
export { compact, filter };
