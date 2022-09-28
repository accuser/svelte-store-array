interface ComparatorFn<T> {
	(a: T, b: T): number;
}

interface MapFn<T, U> {
	(value: T, index: number, array: T[]): U;
}

interface PredicateFn<T> {
	(value: T, index: number, array: T[]): boolean;
}

interface ReduceFn<T, U> {
	(previousValue: U, currentValue: T, currentIndex: number, array: T[]): U;
}
