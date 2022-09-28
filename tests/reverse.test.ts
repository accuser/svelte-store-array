import { reverse } from '$lib';
import { type Readable, readable, get } from 'svelte/store';
import { beforeEach, describe, expect, it } from 'vitest';

declare module 'vitest' {
	export interface TestContext {
		numbers: Readable<number[]>;
	}
}
describe('reverse', () => {
	beforeEach(async (context) => {
		context.numbers = readable([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
	});

	it('returns a store', ({ numbers }) => {
		const store = reverse(numbers);

		expect(store.subscribe).toBeDefined();
	});

	it('reverses a store', ({ numbers }) => {
		const value = get(reverse(numbers));

		expect(value).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
	});
});
