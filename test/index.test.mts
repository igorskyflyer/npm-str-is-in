// Author: Igor Dimitrijević (@igorskyflyer)

import { assert, describe, test } from 'vitest'
import { findMatch, strIsIn } from '../src/index.mjs'

describe('🧪 strIsIn tests 🧪', () => {
  test('should return false', () => {
    assert.isFalse(strIsIn('bin', ['abc', 'cde', 'def', 'binary']))
  }) // #1

  test('should return true', () => {
    assert.isTrue(strIsIn('bin', ['abc', 'cde', 'bin', 'adc']))
  }) // #2

  test('should return false', () => {
    assert.isFalse(strIsIn('bin', []))
  }) // #3

  test('should return true', () => {
    assert.isTrue(
      strIsIn(
        'bin',
        ['abc', 'cde', 'def', 'binary'],
        (entry, value) => entry.indexOf(value) > -1
      )
    )
  }) // #4

  test('should return true', () => {
    assert.isTrue(
      strIsIn(
        'bin',
        ['abc', 'cde', 'def', 'HellobinaryWorld'],
        (entry, value) => entry.indexOf(value) > -1
      )
    )
  }) // #5

  test('should return false', () => {
    assert.isFalse(
      strIsIn(
        't',
        ['abc', 'cde', 'def', 'HellobinaryWorld'],
        (entry, value) => entry.toLowerCase() === value.toLowerCase()
      )
    )
  }) // #6

  test('should return true', () => {
    assert.isTrue(
      strIsIn(
        'WORLD',
        ['abc', 'cde', 'def', 'world'],
        (entry, value) => entry.toLowerCase() === value.toLowerCase()
      )
    )
  }) // #7

  test('should return true', () => {
    assert.isTrue(
      strIsIn(
        'WORLD',
        ['abc', 'cde', 'def', 'HellobinaryWorld'],
        (entry, value) => entry.toLowerCase().indexOf(value.toLowerCase()) > -1
      )
    )
  }) // #8

  test('should return true', () => {
    assert.equal(
      findMatch.full('WORLD', ['abc', 'cde', 'world', 'HellobinaryWorld']),
      'world'
    )
  }) // #9

  test('should return an empty string', () => {
    assert.isEmpty(
      findMatch.full('WORLD', ['abc', 'cde', 'world-foo', 'HellobinaryWorld'])
    )
  }) // #10

  test('should return true', () => {
    assert.equal(
      findMatch.partial('WORLD', [
        'abc',
        'cde',
        'world-foo',
        'HellobinaryWorld'
      ]),
      'world-foo'
    )
  }) // #11

  test('should return an empty string', () => {
    assert.isEmpty(
      findMatch.partial('WORLD', ['abc', 'cde', 'w-orld', 'HellobinaryWIorld'])
    )
  }) // #12
})
