import { test, expect } from 'vitest';
import Lexer from './../utils/lexer';

test('Lexer class', () => {
	let l = new Lexer('1+1');
	console.log(l);
});
