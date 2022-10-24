import { derived, type Readable } from 'svelte/store';
import { asReadable, type MaybeReadable } from './helpers/maybe-readable.js';
import type { GroupFn } from './types.js';

const group = <T>(
	values: MaybeReadable<T[]>,
	callback: MaybeReadable<GroupFn<T>>
): Readable<{ [key: string]: T[] }> =>
	derived([asReadable(values), asReadable(callback)], ([$values, $callback]) =>
		$values
			.map((value, index, array) => ({ key: $callback(value, index, array), value }))
			.reduce((prev, { key, value }) => {
				return { ...prev, [key]: [...(prev[key] ?? []), value] };
			}, {} as { [key: string]: T[] })
	);

export default group;
export { group, type GroupFn };
