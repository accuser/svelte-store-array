import { derived, type Readable } from 'svelte/store';
import { asReadable, type MaybeReadable } from './helpers/maybe-readable.js';
import type { ComparatorFn } from './types.js';

const sort = <T>(
	values: MaybeReadable<T[]>,
	comparator?: MaybeReadable<ComparatorFn<T>>
): Readable<T[]> =>
	derived([asReadable(values), asReadable(comparator)], ([$values, $comparator]) =>
		[...$values].sort($comparator)
	);

export default sort;
export { sort, type ComparatorFn };
