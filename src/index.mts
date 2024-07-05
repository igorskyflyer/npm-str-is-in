// Author: Igor Dimitrijević (@igorskyflyer)

import { insensitiveMatchPartial } from './comparators/insensitiveMatch.mjs'
import { sensitiveMatchFull } from './comparators/sensitiveMatch.mjs'

type ComparatorCallback = (entry: string, value: string) => boolean

type Finder = {
	/**
	 * Performs a case-insensitive and full-matching search for a given value inside an array of values and returns the found match (with the original case being preserved). If none is found an empty string is returned.
	 */
	full: (value: string, entries: string[]) => string
	/**
	 * Performs a case-insensitive and partial-matching search for a given value inside an array of values and returns the found match (with the original case being preserved). If none is found an empty string is returned.
	 */
	partial: (value: string, entries: string[]) => string
}

/**
 * Checks whether the given String is present
 * in the provided array of Strings, full-matching, case-sensitive.
 */
export function strIsIn(
	value: string,
	entries: string[],
	comparator: ComparatorCallback
): boolean {
	if (!value || !entries || !Array.isArray(entries)) {
		return false
	}

	const count: number = entries.length

	if (typeof comparator !== 'function') {
		comparator = sensitiveMatchFull
	}

	for (let i = 0; i < count; i++) {
		if (comparator(entries[i], value)) {
			return true
		}
	}

	return false
}

/**
 * Provides methods for finding matches.
 */
export const findMatch: Finder = {
	full: (value: string, entries: string[]) => {
		return find(value, entries, sensitiveMatchFull)
	},
	partial: (value: string, entries: string[]) => {
		return find(value, entries, insensitiveMatchPartial)
	}
}

function find(
	value: string,
	entries: string[],
	comparator: ComparatorCallback
): string {
	if (
		!value ||
		!entries ||
		!Array.isArray(entries) ||
		typeof comparator !== 'function'
	) {
		return ''
	}

	const count: number = entries.length

	for (let i = 0; i < count; i++) {
		if (comparator(entries[i], value)) {
			return entries[i]
		}
	}

	return ''
}
