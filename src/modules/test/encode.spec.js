import assert from 'assert'
import encode from '../encode'

describe('encode', () => {
  const input = ['foo', 'bar', 'baz']

  // it('spaceSeparated', () => {
  //   const output = 'foo bar baz'
  //   assert.deepStrictEqual(output, encode('spaceSeparated', input))
  // })

  it('commaSeparated', () => {
    const output = 'foo,bar,baz'
    assert.deepStrictEqual(output, encode('commaSeparated', input))
  })

  it('upperCase', () => {
    const output = 'FOO BAR BAZ'
    assert.deepStrictEqual(output, encode('upperCase', input))
  })

  it('lowerCase', () => {
    const output = 'foo bar baz'
    assert.deepStrictEqual(output, encode('lowerCase', input))
  })

  it('capitalizedCase ', () => {
    const output = 'Foo Bar Baz'
    assert.deepStrictEqual(output, encode('capitalizedCase', input))
  })

  it('sentenceCase', () => {
    const output = 'Foo bar baz'
    assert.deepStrictEqual(output, encode('sentenceCase', input))
  })

  it('camelCase', () => {
    const output = 'fooBarBaz'
    assert.deepStrictEqual(output, encode('camelCase', input))
  })

  it('PascalCase', () => {
    const output = 'FooBarBaz'
    assert.deepStrictEqual(output, encode('PascalCase', input))
  })

  it('snakeCase', () => {
    const output = 'foo_bar_baz'
    assert.deepStrictEqual(output, encode('snakeCase', input))
  })

  it('kebabCase', () => {
    const output = 'foo-bar-baz'
    assert.deepStrictEqual(output, encode('kebabCase', input))
  })
})