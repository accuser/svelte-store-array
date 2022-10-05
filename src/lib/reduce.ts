import { derived, type Readable } from 'svelte/store';
import { asReadable, type MaybeReadable } from './helpers/maybe-readable';
import type { ReduceFn } from './types.js';

const reduce = <T, U>(
	values: MaybeReadable<T[]>,
	callback: MaybeReadable<ReduceFn<T, U>>,
	initialValue: MaybeReadable<U>
): Readable<U> =>
	derived(
		[asReadable(values), asReadable(callback), asReadable(initialValue)],
		([$values, $callback, $initialValue]) => $values.reduce($callback, $initialValue)
	);

export default reduce;
export { reduce, type ReduceFn };
