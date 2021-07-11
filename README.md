## `" ".IsIn([ ])`

🧵 `strIsIn()` provides ways of checking whether a String is present in an Array of Strings using custom Comparators. 🔍

<br>

### Usage

Install it first,

```shell
npm i "@igor.dvlpr/str-is-in"
```

then, `require` it in your project, i.e.

```js
const { strIsIn } = require('@igor.dvlpr/str-is-in')

// #1 - use default Comparator, non-existent string, full match
console.log(strIsIn('bin', ['abc', 'cde', 'def', 'binary'])  // prints false

// #2 - use default Comparator, existing string, full match
console.log(strIsIn('bin', ['abc', 'cde', 'bin', 'adc'])) // prints true

// #3 - empty array passed
console.log(strIsIn('bin', [])) // prints false

// #4 - custom Comparator, partial match
console.log(
  strIsIn(
    'bin',
    ['abc', 'cde', 'def', 'binary'],
    (entry, value) => entry.indexOf(value) > -1
  )
) // prints true

// #5 - custom Comparator, partial match
console.log(
  strIsIn(
    'bin',
    ['abc', 'cde', 'def', 'HellobinaryWorld'],
    (entry, value) => entry.indexOf(value) > -1
  )
) // prints true

// #6 - custom Comparator, partial match, non-existent string
console.log(
  strIsIn(
    't',
    ['abc', 'cde', 'def', 'HellobinaryWorld'],
    (entry, value) => entry.toLowerCase() === value.toLowerCase()
  )
) // prints false

// #7 - custom Comparator, partial match, existing string, case-insensitive
console.log(
	strIsIn(
		'WORLD',
		['abc', 'cde', 'def', 'world'],
		(entry, value) => entry.toLowerCase() === value.toLowerCase()
	)
) // prints true

// #8 - custom Comparator, partial match, case-insensitive
console.log(
	strIsIn(
		'WORLD',
		['abc', 'cde', 'def', 'HellobinaryWorld'],
		(entry, value) => entry.toLowerCase().indexOf(value.toLowerCase()) > -1
	)) // prints true
```
