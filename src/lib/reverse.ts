import { derived, type Readable } from 'svelte/store';

const reverse = <T>(store: Readable<T[]>): Readable<T[]> =>
	derived(store, (values) => [...values].reverse());

export default reverse;
export { reverse };
