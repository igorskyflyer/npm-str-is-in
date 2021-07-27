const { sensitiveMatchFull } = require('./comparators/sensitiveMatch')
const { insensitiveMatchFull, insensitiveMatchPartial } = require('./comparators/insensitiveMatch')

/**
 * @callback ComparatorCallback
 * @param {string} entry
 * @param {string} value
 * @returns {boolean}
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
function strIsIn(value, entries, comparator) {
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
 * Provides methods for finding matches.
 */
const findMatch = {
  /**
   * Performs a case-insensitive and full-matching search for a given value
   * inside an array of values and returns the found match
   * (with the original case being preserved). If none is found
   * an empty string is returned.
   * @param {string} value
   * @param {string[]} entries
   * @returns {string}
   */
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
  /**
   * Performs a case-insensitive and partial-matching search for a given value
   * inside an array of values and returns the found match
   * (with the original case being preserved). If none is found
   * an empty string is returned.
   * @param {string} value
   * @param {string[]} entries
   * @returns {string}
   */
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

module.exports = {
  strIsIn,
  findMatch,
}
