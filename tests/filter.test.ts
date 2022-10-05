import { filter } from '$lib';
import { readable, get, type Readable } from 'svelte/store';
import { beforeEach, describe, expect, it } from 'vitest';

declare module 'vitest' {
	export interface TestContext {
		numbers: number[] | Readable<number[]>;
	}
}
describe('filter', () => {
	describe('with an array', () => {
		beforeEach(async (context) => {
			context.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		});

		it('returns a store', ({ numbers }) => {
			const store = filter(numbers, () => true);

			expect(store.subscribe).toBeDefined();
		});

		it('filters the values', ({ numbers }) => {
			const value = get(filter(numbers, (value) => value % 2 !== 0));

			expect(value.length).toBe(5);
		});
	});

	describe('with a store', () => {
		beforeEach(async (context) => {
			context.numbers = readable([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
		});

		it('returns a store', ({ numbers }) => {
			const store = filter(numbers, () => true);

			expect(store.subscribe).toBeDefined();
		});

		it('filters the values', ({ numbers }) => {
			const value = get(filter(numbers, (value) => value % 2 !== 0));

			expect(value.length).toBe(5);
		});
	});
});
