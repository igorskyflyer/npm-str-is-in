## `" ".IsIn([ ])`

🧵 `strIsIn()` provides ways of checking whether a String is present in an Array of Strings using custom Comparators. 🔍

Since `v.1.1.0` a new object `findMatch` is available and it provides ways for finding matches while returning the match itself and not a `boolean` as the `strIsIn()` does.

<br>

### Usage

Install it first,

```shell
npm i "@igor.dvlpr/str-is-in"
```

<br>

### API

#### ComparatorCallback

A type named `ComparatorCallback` is exposed and used as a signature for the `comparator` parameter of the `strIsIn()` function.

<br>

```ts
type ComparatorCallback = (entry: string, value: string) => boolean
```

<br>

#### strIsIn()

```ts
strIsIn(value: string, entries: string[], comparator: ComparatorCallback): boolean
```

Checks whether the given String is present in the provided array of Strings.

<br>

#### findMatch

```ts
findMatch.full(value: string, entries: string[]): string
```

Performs a case-insensitive and full-matching search for a given value inside an array of values and returns the found match (with the original case being preserved). If none is found an empty string is returned.

<br>

```ts
findMatch.partial(value: string, entries: string[]): string
```

Performs a case-insensitive and partial-matching search for a given value inside an array of values and returns the found match (with the original case being preserved). If none is found an empty string is returned.

<br>

### Examples

```js
const { strIsIn, findMatch } = require('@igor.dvlpr/str-is-in')

// #1 - use default Comparator, non-existent string, full match
console.log(strIsIn('bin', ['abc', 'cde', 'def', 'binary'])) // prints false

// #2 - use default Comparator, existing string, full match
console.log(strIsIn('bin', ['abc', 'cde', 'bin', 'adc'])) // prints true

// #3 - empty array passed
console.log(strIsIn('bin', [])) // prints false

// #4 - custom Comparator, partial match
console.log(strIsIn('bin', ['abc', 'cde', 'def', 'binary'], (entry, value) => entry.indexOf(value) > -1)) // prints true

// #5 - custom Comparator, partial match
console.log(strIsIn('bin', ['abc', 'cde', 'def', 'HellobinaryWorld'], (entry, value) => entry.indexOf(value) > -1)) // prints true

// #6 - custom Comparator, partial match, non-existent string
console.log(
  strIsIn('t', ['abc', 'cde', 'def', 'HellobinaryWorld'], (entry, value) => entry.toLowerCase() === value.toLowerCase())
) // prints false

// #7 - custom Comparator, partial match, existing string, case-insensitive
console.log(strIsIn('WORLD', ['abc', 'cde', 'def', 'world'], (entry, value) => entry.toLowerCase() === value.toLowerCase())) // prints true

// #8 - custom Comparator, partial match, case-insensitive
console.log(
  strIsIn(
    'WORLD',
    ['abc', 'cde', 'def', 'HellobinaryWorld'],
    (entry, value) => entry.toLowerCase().indexOf(value.toLowerCase()) > -1
  )
) // prints true

// #9 - full match-finding
console.log(findMatch.full('WORLD', ['abc', 'cde', 'world', 'HellobinaryWorld'])) // prints 'world'

// #10 - partial match-finding
console.log(findMatch.partial('WORLD', ['abc', 'cde', 'world-foo', 'HellobinaryWorld'])) // prints 'world-foo'
```
