import { reduce } from '$lib';
import { type Readable, readable, get } from 'svelte/store';
import { beforeEach, describe, expect, it } from 'vitest';

declare module 'vitest' {
	export interface TestContext {
		numbers: number[] | Readable<number[]>;
	}
}

describe('reduce', () => {
	describe('with an array', () => {
		beforeEach(async (context) => {
			context.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		});

		it('returns a store', ({ numbers }) => {
			const store = reduce(numbers, (prev, curr) => prev + curr, 0);

			expect(store.subscribe).toBeDefined();
		});

		it('reduces the elements', ({ numbers }) => {
			const value = get(reduce(numbers, (prev, curr) => prev + curr, 0));

			expect(value).toBe(45);
		});
	});

	describe('with a store', () => {
		beforeEach(async (context) => {
			context.numbers = readable([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
		});

		it('returns a store', ({ numbers }) => {
			const store = reduce(numbers, (prev, curr) => prev + curr, 0);

			expect(store.subscribe).toBeDefined();
		});

		it('reduces the elements', ({ numbers }) => {
			const value = get(reduce(numbers, (prev, curr) => prev + curr, 0));

			expect(value).toBe(45);
		});
	});
});
