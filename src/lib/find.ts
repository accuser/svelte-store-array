import { derived, type Readable } from 'svelte/store';
import type { PredicateFn } from './types.js';

const find = <T>(store: Readable<T[]>, predicate: PredicateFn<T>): Readable<T | undefined> =>
	derived(store, (values) => values.find(predicate));

export default find;
export { find, type PredicateFn };
