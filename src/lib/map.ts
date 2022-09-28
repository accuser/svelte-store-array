import { derived, type Readable } from 'svelte/store';

const map = <T, U>(store: Readable<T[]>, callback: MapFn<T, U>): Readable<U[]> =>
	derived(store, (values) => values.map(callback));

export default map;
export { map };
