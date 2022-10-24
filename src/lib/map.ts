import { derived, type Readable } from 'svelte/store';
import { asReadable, type MaybeReadable } from './helpers/maybe-readable.js';
import type { MapFn } from './types.js';

const map = <T, U>(
	values: MaybeReadable<T[]>,
	callback: MaybeReadable<MapFn<T, U>>
): Readable<U[]> =>
	derived([asReadable(values), asReadable(callback)], ([$values, $callback]) =>
		$values.map($callback)
	);

export default map;
export { map, type MapFn };
