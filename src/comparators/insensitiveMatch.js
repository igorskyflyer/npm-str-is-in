/**
 *  @param {string} entry
 * @param {string} value
 * @returns {boolean}
 */
export const insensitiveMatchFull = (entry, value) => entry.toLowerCase() === value.toLowerCase()

/**
 *  @param {string} entry
 * @param {string} value
 * @returns {boolean}
 */
export const insensitiveMatchPartial = (entry, value) => entry.toLowerCase().indexOf(value.toLowerCase()) > -1
