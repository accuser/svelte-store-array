export interface ComparatorFn<T> {
	(a: T, b: T): number;
}

export interface GroupFn<T> {
	(value: T, index: number, array: T[]): string;
}

export interface MapFn<T, U> {
	(value: T, index: number, array: T[]): U;
}

export interface PredicateFn<T> {
	(value: T, index: number, array: T[]): boolean;
}

export interface ReduceFn<T, U> {
	(previousValue: U, currentValue: T, currentIndex: number, array: T[]): U;
}
