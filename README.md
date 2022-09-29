# svelte-store-array

A collection of higher-order store functions for array-based stores.

## Installing

Install as a development dependency using your favourite package manager:

```bash
npm install -D @accuser/svelte-store-array

pnpm add -D @accuser/svelte-store-array

yarn add -D @accuser/svelte-store-array
```

## Usage

### Filter

Filter the elements of the array store that meet the condition specified in the
callback function.

```js
import { readable } from 'svelte/store';
import { compact, filter } from '@accuser/svelte-store-array';

const list = readable([0, 1, 2, 3, 4, 5]);

const evenNumbers = filter(list, (value) => value % 2 === 0); // [0, 2, 4]
const compactList = compact(list); // [1, 2, 3, 4, 5]
```

The `compact` higher-order store is a convenience that is equivalent to
`filter(store, Boolean)`, i.e., filter truthy elements.

### Find

Returns the value of the first element in the array where predicate is `true`,
and `undefined` otherwise.

```js
import { readable } from 'svelte/store';
import { find } from '@accuser/svelte-store-array';

const list = readable([0, 1, 2, 3, 4, 5]);

const found = find(list, (value) => value === 4); // 4
const notFound = find(list, (value) => value === 9); // undefined
```

### Group

Groups the elements of the calling array according to the string values
returned by a provided testing function.

```js
import { readable } from 'svelte/store';
import { group } from '@accuser/svelte-store-array';

const list = readable([0, 1, 2, 3, 4, 5]);

const grouped = group(list, (value) => value % 2 ? 'odd' ? 'even'); // { "even": [0, 2, 4, 6, 8], "odd": [1, 3, 5, 7, 9] }
```

### Map

Calls a defined callback function on each element of an array, and returns an array that contains the results.

```js
import { readable } from 'svelte/store';
import { map } from '@accuser/svelte-store-array';

const list = readable([0, 1, 2, 3, 4, 5]);

const stringList = map(list, (value) => value.toString()); // ["0", "1", "2", "3", "4", "5"]
```

### Reduce

Calls the specified callback function for all the elements in an array. The
return value of the callback function is the accumulated result, and is
provided as an argument in the next call to the callback function.

```js
import { readable } from 'svelte/store';
import { reduce } from '@accuser/svelte-store-array';

const list = readable([0, 1, 2, 3, 4, 5]);

const sum = reduce(list, (prev, curr) => prev + curr, 0); // 15
```

### Reverse

Reverse an array. Unlike the `Array.prototype.reverse`, the array is not reversed in place.

```js
import { readable } from 'svelte/store';
import { reverse } from '@accuser/svelte-store-array';

const list = readable([0, 1, 2, 3, 4, 5]);

const descending = reverse(list); // [5, 4, 3, 2, 1, 0]
```

### Sort

Sorts an array. Unlike the `Array.prototype.sort`, the array is not sorted in place.

```js
import { readable } from 'svelte/store';
import { sort } from '@accuser/svelte-store-array';

const list = readable([0, 1, 2, 3, 4, 5]);

const descending = sort(list, (a, b) => b - a); // [5, 4, 3, 2, 1, 0]
```

## Composition

All the higher-order stores operate on array stores and can be composed:

```js
import { readable } from 'svelte/store';
import { compact, filter, reverse } from '@accuser/svelte-store-array';

const list = readable([0, 1, 2, 3, 4, 5]);

const evenNumbersDescending = sort(
	filter(compact(list), (value) => value % 2 === 0),
	(a, b) => b - a
); // [4, 2]
```
