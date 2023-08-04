import { test, expect } from 'vitest';
import Lexer from '$lib/utils/lexer';
import { Parser, Calculator } from '$lib/utils/calculator';

function calc(state) {
	let lexer = new Lexer(state);
	const parser = new Parser(lexer);
	const calc = new Calculator(parser);
	return calc.cc();
}

test('Calculator class', () => {
	expect(2).toBe(calc('1+1'));
	expect(4).toBe(calc('2*2'));
	expect(0.5).toBe(calc('1/2'));
	expect(-4).toBe(calc('-2*2'));
	expect(156).toBe(calc('13*12'));
	expect(5).toBe(calc('80/16'));
	expect(10).toBe(calc('4+(3*2)'));
	expect(224).toBe(calc('14 * 16'));
	expect(12).toBe(calc('216 / 18'));
	expect(0.75).toBe(calc('12 / 16'));
	expect(13.5).toBe(calc('1.5*9'));
	expect(4.8).toBe(calc('0.6*8'));
	expect(4).toBe(calc('1/0.25'));
	expect(3).toBe(calc('1--1+1'));
	expect(0).toBe(calc('1--1 - 2'));
	expect(() => {
		calc('');
	}).toThrowError();
	expect(() => calc('1//2')).toThrowError();
	expect(() => calc(null)).toThrowError();
});
