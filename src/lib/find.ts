import { derived, type Readable } from 'svelte/store';
import { asReadable, type MaybeReadable } from './helpers/maybe-readable.js';
import type { PredicateFn } from './types.js';

const find = <T>(
	values: MaybeReadable<T[]>,
	predicate: MaybeReadable<PredicateFn<T>>
): Readable<T | undefined> =>
	derived([asReadable(values), asReadable(predicate)], ([$values, $predicate]) =>
		$values.find($predicate)
	);

export default find;
export { find, type PredicateFn };
