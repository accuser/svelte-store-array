import { readable, type Readable } from 'svelte/store';

type MaybeReadable<T> = T | Readable<T>;

const asReadable = <T>(maybe: MaybeReadable<T>) => (isReadable(maybe) ? maybe : readable(maybe));

const isReadable = <T>(maybe: MaybeReadable<T>): maybe is Readable<T> => {
	return (maybe as Readable<T>).subscribe !== undefined;
};

export { asReadable, type MaybeReadable };
