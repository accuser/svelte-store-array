import { derived, type Readable } from 'svelte/store';
import { asReadable, type MaybeReadable } from './helpers/maybe-readable.js';

const reverse = <T>(values: MaybeReadable<T[]>): Readable<T[]> =>
	derived(asReadable(values), ($values) => [...$values].reverse());

export default reverse;
export { reverse };
