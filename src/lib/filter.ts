import { derived, type Readable } from 'svelte/store';
import { asReadable, type MaybeReadable } from './helpers';
import type { PredicateFn } from './types.js';

const filter = <T>(
	values: MaybeReadable<T[]>,
	predicate: MaybeReadable<PredicateFn<T>>
): Readable<T[]> =>
	derived([asReadable(values), asReadable(predicate)], ([$values, $predicate]) =>
		$values.filter($predicate)
	);

const compact = <T>(values: MaybeReadable<T[]>): Readable<T[]> => filter(values, Boolean);

export default filter;
export { compact, filter, type PredicateFn };
