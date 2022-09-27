<script lang="ts">
	import { readable } from 'svelte/store';
	import { compact, filter } from '$lib/filter';
	import { reduce } from '$lib/reduce';
	import sort from '$lib/sort';
	import map from '$lib/map';

	const list = readable([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

	const compactList = compact(list);
	const sum = reduce(compactList, (prev, curr) => prev + curr, 0);
	const evenNumbers = filter(compactList, (value) => Math.round(value / 2) === value / 2);
	const oddNumbers = filter(compactList, (value) => Math.round(value / 2) !== value / 2);
	const descNumbers = sort(compactList, (a, b) => b - a);
	const stringList = map(list, (value) => value.toString());
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>

<pre>
	List = {JSON.stringify($list)}
	sum = {JSON.stringify($sum)}
	Compact List = {JSON.stringify($compactList)}
	Odd Numbers = {JSON.stringify($oddNumbers)}
	Even Numbers = {JSON.stringify($evenNumbers)}
	Descending = {JSON.stringify($descNumbers)}
	String List = {JSON.stringify($stringList)}
</pre>
