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

Filter the elements of an array that meet the condition specified in a callback function.

```js
import { readable } from 'svelte/store';
import { compact, filter } from '@accuser/svelte-store-array';

const list = readable([0, 1, 2, 3, 4, 5]);

const compactList = compact(list); // [1, 2, 3, 4, 5]
const evenNumbers = filter(compactList, (value) => value % 2 === 0); // [2, 4]
```

The `compact` higher-order store is a convenience that is equivalent to `filter(store, Boolean)`, i.e., filter truthy elements.

### Map

Calls a defined callback function on each element of an array, and returns an array that contains the results.

```js
import { readable } from 'svelte/store';
import { map } from '@accuser/svelte-store-array';

const list = readable([0, 1, 2, 3, 4, 5]);

const stringList = map(list, (value) => value.toString()); // ["0", "1", "2", "3", "4", "5"]
```

### Reduce

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

```js
import { readable } from 'svelte/store';
import { reduce } from '@accuser/svelte-store-array';

const list = readable([0, 1, 2, 3, 4, 5]);

const sum = reduce(list, (prev, curr) => prev + curr, 0); // 15
```

### Sort

Sorts an array. Unlike the `Array.prototype.sort`, the array is not sorted in place.

```js
import { readable } from 'svelte/store';
import { sort } from '@accuser/svelte-store-array';

const list = readable([0, 1, 2, 3, 4, 5]);

const descending = sort(list, (a, b) => b - a); // [5, 4, 3, 2, 1, 0]
```
