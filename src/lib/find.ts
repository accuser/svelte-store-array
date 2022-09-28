import { derived, type Readable } from 'svelte/store';

const find = <T>(store: Readable<T[]>, predicate: PredicateFn<T>): Readable<T | undefined> =>
	derived(store, (values) => values.find(predicate));

export default find;
export { find };
