/**
 * @callback ComparatorCallback
 * @param {string} entry
 * @param {string} value
 * @returns {boolean}
 */

/**
 * The default Comparator to use.
 *@private
 * @param {string} entry
 * @param {string} value
 * @returns {boolean}
 */
function defaultComparator(entry, value) {
  return entry === value
}

/**
 * Checks whether the given String is present
 * in the provided array of Strings.
 *@public
 * @param {string} value
 * @param {string[]} entries
 * @param {ComparatorCallback} [comparator]
 * @returns {boolean}
 */
function strIsIn(value, entries, comparator) {
  if (!value || !entries || !entries instanceof Array) {
    return false
  }

  const count = entries.length

  if (typeof comparator !== 'function') {
    comparator = defaultComparator
  }

  for (let i = 0; i < count; i++) {
    if (comparator(entries[i], value)) {
      return true
    }
  }

  return false
}

module.exports = {
  strIsIn,
}
