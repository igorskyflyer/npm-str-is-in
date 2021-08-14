import { sensitiveMatchFull } from './comparators/sensitiveMatch.js'
import { insensitiveMatchFull, insensitiveMatchPartial } from './comparators/insensitiveMatch.js'

/**
 * @callback ComparatorCallback
 * @param {string} entry
 * @param {string} value
 * @returns {boolean}
 */

/**
 * @typedef Finder
 * @property {(value: string, entries: string[]) => string} full Performs a case-insensitive and full-matching search for a given value inside an array of values and returns the found match (with the original case being preserved). If none is found an empty string is returned.
 * @property {(value: string, entries: string[]) => string} partial Performs a case-insensitive and partial-matching search for a given value inside an array of values and returns the found match (with the original case being preserved). If none is found an empty string is returned.
 */

/**
 * Checks whether the given String is present
 * in the provided array of Strings, full-matching, case-sensitive.
 *@public
 * @param {string} value
 * @param {string[]} entries
 * @param {ComparatorCallback} [comparator]
 * @returns {boolean}
 */
export function strIsIn(value, entries, comparator) {
  if (!value || !entries || !(entries instanceof Array)) {
    return false
  }

  const count = entries.length

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
 * @type {Finder} Provides methods for finding matches.
 */
export const findMatch = {
  full: (value, entries) => {
    if (!value || !entries || !(entries instanceof Array)) {
      return ''
    }

    const count = entries.length

    for (let i = 0; i < count; i++) {
      if (insensitiveMatchFull(entries[i], value)) {
        return entries[i]
      }
    }

    return ''
  },
  partial: (value, entries) => {
    if (!value || !entries || !(entries instanceof Array)) {
      return ''
    }

    const count = entries.length

    for (let i = 0; i < count; i++) {
      if (insensitiveMatchPartial(entries[i], value)) {
        return entries[i]
      }
    }

    return ''
  },
}
