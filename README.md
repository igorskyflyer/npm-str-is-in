## `" ".IsIn([ ])`

<br>

🧵 Provides ways of checking whether a String is present in an Array of Strings using custom Comparators. 🔍

<br>
<br>

<div align="center">
	<blockquote>
		<br>
		<h4>💖 Support further development</h4>
		<span>I work hard for every project, including this one and your support means a lot to me!
		<br>
		Consider buying me a coffee. ☕
		<br>
		<strong>Thank you for supporting my efforts! 🙏😊</strong></span>
		<br>
		<br>
		<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
		<br>
		<br>
		<a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
		<br>
		<br>
		<br>
	</blockquote>
</div>

<br>

## 🕵🏼 Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/str-is-in"
```

<br>

## 🤹🏼 API

#### ComparatorCallback

A type named `ComparatorCallback` is exposed and used as a signature for the `comparator` parameter of the `strIsIn()` function.

<br>

```ts
type ComparatorCallback = (entry: string, value: string) => boolean
```

<br>

#### strIsIn()

```ts
strIsIn(value: string, entries: string[], comparator?: ComparatorCallback): boolean
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

```ts
import { strIsIn, findMatch } from '@igor.dvlpr/str-is-in'

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

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-str-is-in/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/pathexists](https://www.npmjs.com/package/@igor.dvlpr/pathexists)

> _🧲 Provides ways of properly checking if a path exists inside a given array of files/directories both on Windows and UNIX-like operating systems. 🗺_

[@igor.dvlpr/valid-path](https://www.npmjs.com/package/@igor.dvlpr/valid-path)

> _🧰 Provides ways of testing whether a given value can be a valid file/directory name. 🏜_

[@igor.dvlpr/regkeys](https://www.npmjs.com/package/@igor.dvlpr/regkeys)

> _📚 An NPM package for fetching Windows registry keys. 🗝_

[@igor.dvlpr/extendable-string](https://www.npmjs.com/package/@igor.dvlpr/extendable-string)

> _🦀 ExtendableString allows you to create strings on steroids that have custom transformations applied to them, unlike common, plain strings. 🪀_

[@igor.dvlpr/normalized-string](https://www.npmjs.com/package/@igor.dvlpr/normalized-string)

> _💊 NormalizedString provides you with a String type with consistent line-endings, guaranteed. 📮_

<br>
<br>

>
> Provided by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
>
