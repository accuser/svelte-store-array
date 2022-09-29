<script lang="ts">
	import { readable } from 'svelte/store';
	import { compact, filter, find, group, map, reduce, reverse, sort } from '$lib';

	import type { ReduceFn } from '$lib/types';

	const list = readable([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

	const compactList = compact(list);

	const evenNumbers = filter(list, (value) => Math.round(value / 2) === value / 2);
	const oddNumbers = filter(list, (value) => Math.round(value / 2) !== value / 2);

	const descNumbers = sort(list, (a, b) => b - a);
	const stringList = map(list, (value) => value.toString());
	const found = find(list, (value) => value > 3);
	const reversedList = reverse(list);

	const average: ReduceFn<number, number> = (prev, curr, _, { length }) =>
		(prev = prev + curr / length);

	const averageValue = reduce(list, average, 0);

	const sum: ReduceFn<number, number> = (prev, curr) => prev + curr;

	const sumValue = reduce(list, sum, 0);

	const grouped = group(list, (value) => (value % 2 === 0 ? 'even' : 'odd'));
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>

<pre>
	List = {JSON.stringify($list)}

	Average = {JSON.stringify($averageValue)}
	Sum = {JSON.stringify($sumValue)}

	Compact List = {JSON.stringify($compactList)}

	Odd Numbers = {JSON.stringify($oddNumbers)}
	Even Numbers = {JSON.stringify($evenNumbers)}

	Descending = {JSON.stringify($descNumbers)}

	String List = {JSON.stringify($stringList)}

	Found = {JSON.stringify($found)}

	Reversed List = {JSON.stringify($reversedList)}

	Grouped = {JSON.stringify($grouped)}
</pre>
