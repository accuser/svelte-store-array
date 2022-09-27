import { map } from '$lib';
import { type Readable, readable, get } from 'svelte/store';
import { beforeEach, describe, expect, it } from 'vitest';

declare module 'vitest' {
	export interface TestContext {
		numbers: Readable<number[]>;
	}
}
describe('map', () => {
	beforeEach(async (context) => {
		context.numbers = readable([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
	});

	it('returns a store', ({ numbers }) => {
		const store = map(numbers, (value) => value);

		expect(store.subscribe).toBeDefined();
	});

	it('maps a store', ({ numbers }) => {
		const value = get(map(numbers, (value) => value.toString()));

		expect(value.length).toBe(10);
		expect(value).toEqual(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
	});
});
