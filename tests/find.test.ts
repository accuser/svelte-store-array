import { find } from '$lib';
import { type Readable, readable, get } from 'svelte/store';
import { beforeEach, describe, expect, it } from 'vitest';

declare module 'vitest' {
	export interface TestContext {
		numbers: Readable<number[]>;
	}
}
describe('find', () => {
	beforeEach(async (context) => {
		context.numbers = readable([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
	});

	it('returns a store', ({ numbers }) => {
		const store = find(numbers, () => true);

		expect(store.subscribe).toBeDefined();
	});

	it('returns a found element in an array store', ({ numbers }) => {
		const value = get(find(numbers, (value) => value === 2));

		expect(value).toBe(2);
	});

	it('returns undefined if no found element in an array store', ({ numbers }) => {
		const value = get(find(numbers, (value) => value === -1));

		expect(value).toBe(undefined);
	});
});
