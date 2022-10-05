import { reverse } from '$lib';
import { type Readable, readable, get } from 'svelte/store';
import { beforeEach, describe, expect, it } from 'vitest';

declare module 'vitest' {
	export interface TestContext {
		numbers: number[] | Readable<number[]>;
	}
}

describe('reverse', () => {
	describe('with an array', () => {
		beforeEach(async (context) => {
			context.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		});

		it('returns a store', ({ numbers }) => {
			const store = reverse(numbers);

			expect(store.subscribe).toBeDefined();
		});

		it('reverses the elements', ({ numbers }) => {
			const value = get(reverse(numbers));

			expect(value).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
		});
	});

	describe('with a store', () => {
		beforeEach(async (context) => {
			context.numbers = readable([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
		});

		it('returns a store', ({ numbers }) => {
			const store = reverse(numbers);

			expect(store.subscribe).toBeDefined();
		});

		it('reverses the elements', ({ numbers }) => {
			const value = get(reverse(numbers));

			expect(value).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
		});
	});
});
