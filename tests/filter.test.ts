import { filter } from '$lib';
import { type Readable, readable, get } from 'svelte/store';
import { beforeEach, describe, expect, it } from 'vitest';

declare module 'vitest' {
	export interface TestContext {
		numbers: Readable<number[]>;
	}
}
describe('filter', () => {
	beforeEach(async (context) => {
		context.numbers = readable([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
	});

	it('returns a store', ({ numbers }) => {
		const store = filter(numbers, () => true);

		expect(store.subscribe).toBeDefined();
	});

	it('filters a store', ({ numbers }) => {
		const value = get(filter(numbers, (value) => value % 2 !== 0));

		expect(value.length).toBe(5);
	});
});
