import { group } from '$lib';
import { type Readable, readable, get } from 'svelte/store';
import { beforeEach, describe, expect, it } from 'vitest';

declare module 'vitest' {
	export interface TestContext {
		numbers: number[] | Readable<number[]>;
	}
}
describe('group', () => {
	describe('with an array', () => {
		beforeEach(async (context) => {
			context.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		});

		it('returns a store', ({ numbers }) => {
			const store = group(numbers, () => '_');

			expect(store.subscribe).toBeDefined();
		});

		it('groups the elements', ({ numbers }) => {
			const value = get(group(numbers, (value) => (value % 2 ? 'odd' : 'even')));

			expect(value['even']).toEqual([0, 2, 4, 6, 8]);
			expect(value['odd']).toEqual([1, 3, 5, 7, 9]);
		});
	});

	describe('with a store', () => {
		beforeEach(async (context) => {
			context.numbers = readable([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
		});

		it('returns a store', ({ numbers }) => {
			const store = group(numbers, () => '_');

			expect(store.subscribe).toBeDefined();
		});

		it('groups the elements', ({ numbers }) => {
			const value = get(group(numbers, (value) => (value % 2 ? 'odd' : 'even')));

			expect(value['even']).toEqual([0, 2, 4, 6, 8]);
			expect(value['odd']).toEqual([1, 3, 5, 7, 9]);
		});
	});
});
