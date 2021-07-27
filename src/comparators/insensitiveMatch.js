/**
 *  @param {string} entry
 * @param {string} value
 * @returns {boolean}
 */
const insensitiveMatchFull = (entry, value) => entry.toLowerCase() === value.toLowerCase()

/**
 *  @param {string} entry
 * @param {string} value
 * @returns {boolean}
 */
const insensitiveMatchPartial = (entry, value) => entry.toLowerCase().indexOf(value.toLowerCase()) > -1

module.exports = { insensitiveMatchFull, insensitiveMatchPartial }
