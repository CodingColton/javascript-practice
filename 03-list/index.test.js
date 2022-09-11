/**
 * @jest-environment jsdom

//const { default: test } = require('node:test');
const correctItem = require('./index');

test('Adds accurate input to list', () => {
    expect(paragraph.toBe(inputField.value));
});
 */
const { default: test } = require("node:test");

test('Add numbers', () => {
    expect(sum().toBe(3));
});