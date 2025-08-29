<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-str-is-in/main/media/str-is-in.png" alt="Icon of StrIsIn" width="256" height="256">
  <h1>StrIsIn</h1>
</div>

<br>

<h4 align="center">
  🧵 Provides ways of checking whether a String is present in an Array of Strings using custom Comparators. 🔍
</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
- [Examples](#️-examples)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 🔍 Flexible matching - check strings with full or partial match modes
- 🆎 Case‑sensitive or insensitive - choose the precision you need
- ⚡ Fast lookups - loops through entries efficiently for quick results
- 🎯 Custom comparators - plug in your own matching logic
- 🛡 Safe defaults - validates inputs before running comparisons
- 🧩 Reusable helpers - `strIsIn` for booleans, `findMatch` for actual matches
- 📦 Lightweight & dependency‑free - minimal footprint, maximum utility

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/str-is-in
```

```bash
yarn add @igorskyflyer/str-is-in
```

```bash
npm i @igorskyflyer/str-is-in
```

<br>
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
<br>

## 🗒️ Examples


```ts
import { strIsIn, findMatch } from '@igorskyflyer/str-is-in'

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

<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-str-is-in/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-str-is-in/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/pathexists](https://www.npmjs.com/package/@igorskyflyer/pathexists)

> _🧲 Provides ways of properly checking if a path exists inside a given array of files/directories both on Windows and UNIX-like operating systems. 🗺_

[@igorskyflyer/valid-path](https://www.npmjs.com/package/@igorskyflyer/valid-path)

> _🧰 Provides ways of testing whether a given value can be a valid file/directory name. 🏜_

[@igorskyflyer/regkeys](https://www.npmjs.com/package/@igorskyflyer/regkeys)

> _📚 An NPM package for fetching Windows registry keys. 🗝_

[@igorskyflyer/extendable-string](https://www.npmjs.com/package/@igorskyflyer/extendable-string)

> _🦀 ExtendableString allows you to create strings on steroids that have custom transformations applied to them, unlike common, plain strings. 🪀_

[@igorskyflyer/normalized-string](https://www.npmjs.com/package/@igorskyflyer/normalized-string)

> _💊 NormalizedString provides you with a String type with consistent line-endings, guaranteed. 📮_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
