import { derived, type Readable } from 'svelte/store';
import type { GroupFn } from './types';

const group = <T>(store: Readable<T[]>, callback: GroupFn<T>): Readable<{ [key: string]: T[] }> =>
	derived(store, (values) =>
		values
			.map((value, index, array) => ({ key: callback(value, index, array), value }))
			.reduce((prev, { key, value }) => {
				return { ...prev, [key]: [...(prev[key] ?? []), value] };
			}, {} as { [key: string]: T[] })
	);

export default group;
export { group, type GroupFn };
