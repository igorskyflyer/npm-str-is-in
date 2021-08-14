import { assert as chai } from 'chai'
import { strIsIn, findMatch } from '../src/index.js'

describe('🧪 is-in tests 🧪', () => {
  it('should return false', () => {
    chai.isFalse(strIsIn('bin', ['abc', 'cde', 'def', 'binary']))
  }) // #1

  it('should return true', () => {
    chai.isTrue(strIsIn('bin', ['abc', 'cde', 'bin', 'adc']))
  }) // #2

  it('should return false', () => {
    chai.isFalse(strIsIn('bin', []))
  }) // #3

  it('should return true', () => {
    chai.isTrue(strIsIn('bin', ['abc', 'cde', 'def', 'binary'], (entry, value) => entry.indexOf(value) > -1))
  }) // #4

  it('should return true', () => {
    chai.isTrue(strIsIn('bin', ['abc', 'cde', 'def', 'HellobinaryWorld'], (entry, value) => entry.indexOf(value) > -1))
  }) // #5

  it('should return false', () => {
    chai.isFalse(
      strIsIn('t', ['abc', 'cde', 'def', 'HellobinaryWorld'], (entry, value) => entry.toLowerCase() === value.toLowerCase())
    )
  }) // #6

  it('should return true', () => {
    chai.isTrue(strIsIn('WORLD', ['abc', 'cde', 'def', 'world'], (entry, value) => entry.toLowerCase() === value.toLowerCase()))
  }) // #7

  it('should return true', () => {
    chai.isTrue(
      strIsIn(
        'WORLD',
        ['abc', 'cde', 'def', 'HellobinaryWorld'],
        (entry, value) => entry.toLowerCase().indexOf(value.toLowerCase()) > -1
      )
    )
  }) // #8

  it('should return true', () => {
    chai.equal(findMatch.full('WORLD', ['abc', 'cde', 'world', 'HellobinaryWorld']), 'world')
  }) // #9

  it('should return an empty string', () => {
    chai.isEmpty(findMatch.full('WORLD', ['abc', 'cde', 'world-foo', 'HellobinaryWorld']))
  }) // #10

  it('should return true', () => {
    chai.equal(findMatch.partial('WORLD', ['abc', 'cde', 'world-foo', 'HellobinaryWorld']), 'world-foo')
  }) // #11

  it('should return an empty string', () => {
    chai.isEmpty(findMatch.partial('WORLD', ['abc', 'cde', 'w-orld', 'HellobinaryWIorld']))
  }) // #12
})
