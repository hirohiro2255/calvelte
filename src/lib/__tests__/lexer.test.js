import { test, expect, describe } from 'vitest';
import Lexer from '../utils/lexer';

test('Lexer class', () => {
	let l = new Lexer('1+1');
	expect('1+1').toBe(l.text);
	expect(() => {
		l = new Lexer(1);
	}).toThrowError();
});
