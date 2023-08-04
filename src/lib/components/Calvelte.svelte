<script>
	import './../css/sanitize.css';
	import Lexer from './../utils/lexer.js';
	import { Parser, Calculator } from '../utils/calculator.js';

	let lexer;
	let parser;
	let calculator;

	export let result = '';

	function handleClickOp(event) {
		result += event.target?.computedName;
	}
	function handleClickNumber(event) {
		result += event.target?.computedName;
	}

	function handleClear() {
		result = result.length === 0 ? '0' : result.slice(0, result.length - 1);
	}

	function handleAllClear() {
		result = '';
	}

	function handleEnter() {
		lexer = new Lexer(result);
		parser = new Parser(lexer);
		calculator = new Calculator(parser);
		result = calculator.cc();
	}

	$: computedStr = result.length === 0 ? '0' : result;
</script>

<section class="calvelte-container">
	<section class="screen-container">
		<div class="screen-wrapper">
			<h2 class="result" id="result">
				{computedStr}
			</h2>
		</div>
	</section>
	<div class="keypad-container">
		<div class="keypad-wrapper">
			<button class="keypad" on:click={handleClickOp}>%</button>
			<button class="keypad" on:click={handleClickOp}>(</button>
			<button class="keypad" on:click={handleClickOp}>)</button>
			<button class="keypad" on:click={handleAllClear}>AC</button>

			<button class="keypad" on:click={handleClickNumber}>7</button>
			<button class="keypad" on:click={handleClickNumber}>8</button>
			<button class="keypad" on:click={handleClickNumber}>9</button>
			<button class="keypad" on:click={handleClickOp}>+</button>

			<button class="keypad" on:click={handleClickNumber}>4</button>
			<button class="keypad" on:click={handleClickNumber}>5</button>
			<button class="keypad" on:click={handleClickNumber}>6</button>
			<button class="keypad" on:click={handleClickOp}>-</button>

			<button class="keypad" on:click={handleClickNumber}>1</button>
			<button class="keypad" on:click={handleClickNumber}>2</button>
			<button class="keypad" on:click={handleClickNumber}>3</button>
			<button class="keypad" on:click={handleClickOp}>/</button>

			<button class="keypad">.</button>
			<button class="keypad" on:click={handleClickNumber}>0</button>
			<button class="keypad" on:click={handleClickNumber}>00</button>
			<button class="keypad" on:click={handleClickOp}>*</button>

			<!-- <button class="keypad reset" id="reset" value="reset">All Clear</button> -->
			<button class="keypad delete all-clear" on:click={handleClear}>C</button>
			<button class="keypad enter" id="enter" value="enter" on:click={handleEnter}>=</button>
		</div>
	</div>
</section>

<style>
	h2,
	button {
		margin: 0;
		padding: 0;
	}

	.calvelte-container {
		width: 88%;
		max-width: 540px;
		min-width: 350px;
		/* margin-right: auto;
		margin-left: auto;
		margin-top: 30px;
		margin-bottom: 31px; */
		background-color: #efefef;
		border-radius: 5px;
	}

	.screen-container {
		/* margin-top: 32px; */
		/* margin-bottom: 24px; */
		/* padding-top: 6px; */
		padding-top: 16px;
		padding-bottom: 16px;
		padding-right: 24px;
		padding-left: 24px;
		background-color: var(--screen-background);
		border-radius: 10px;
		/* border: 2px solid var(--error); */
	}

	.screen-wrapper {
		background-color: white;
		border-radius: 5px;
		padding-top: 32px;
		padding-bottom: 32px;
	}

	.result {
		text-align: right;
		color: #191e3a;
		font-size: clamp(2.5rem, 2.1479rem + 1.5023vw, 3.5rem);
		font-weight: 700;
		line-height: 0.92;
		letter-spacing: -0.67px;
		overflow: hidden;
		white-space: nowrap;
		padding-right: 0.3rem;
	}

	.keypad-container {
		/* padding: 24px; */
		padding-bottom: 24px;
		padding-right: 24px;
		padding-left: 24px;
		background-color: var(--keypad-container-background);
		border-radius: 10px;
	}

	.keypad-wrapper {
		display: grid;
		grid-template-rows: repeat(6, 1fr);
		grid-template-columns: repeat(4, 1fr);
		gap: 13px;
	}

	.keypad {
		font-size: 2rem;
		font-weight: 700;
		color: #191e3a;
		background-color: white;
		line-height: 0.92;
		border: none;
		padding-top: 19px;
		padding-bottom: 16px;
		border-radius: 5px;
		box-shadow: -3px -4px 0px 0px var(--keypad-shadow) inset;
		/* box-shadow: 0px -4px 0px 0px var(--keypad-shadow) inset; */
	}

	.keypad:hover {
		/* background-color: var(--keypad-hover); */
		opacity: 0.6;
		transition: ease-in 0.12s;
	}

	.keypad:active {
		background-color: var(--keypad-background);
		color: var(--keypad-active-color);
		box-shadow: none;
	}

	.delete {
		grid-column: 1/3;
		font-size: clamp(1.25rem, 1.0739rem + 0.7512vw, 1.75rem);
		font-weight: 700;
		color: var(--sub-text);
		line-height: 0.92;
		background-color: white;
		box-shadow: 0px -4px 0px 0px var(--del-key-shadow) inset;
		/* box-shadow: 0px -4px 0px 0px var(--del-key-shadow) inset; */
	}

	.delete:hover {
		/* background-color: var(--del-key-hover); */
		opacity: 0.6;
		transition: ease-in 0.12s;
	}

	.delete:active {
		background-color: var(--del-key-background);
		color: var(--del-key-active);
		box-shadow: none;
	}

	.reset {
		/* grid-column: 1 / 3; */
		font-size: clamp(1.25rem, 1.0739rem + 0.7512vw, 1.75rem);
		font-weight: 700;
		color: var(--sub-text);
		line-height: 0.92;
		background-color: white;
		box-shadow: 0px -4px 0px 0px var(--del-key-shadow) inset;
	}

	.reset:hover {
		background-color: var(--del-key-hover);
		transition: ease-in 0.12s;
	}

	.reset:active {
		background-color: var(--del-key-background);
		color: var(--del-key-active);
		box-shadow: none;
	}

	.enter {
		font-size: clamp(1.25rem, 1.0739rem + 0.7512vw, 1.75rem);
		grid-column: 3 / 5;
		background-color: white;
		color: var(--enter-key-text);
		box-shadow: 0px -4px 0px 0px var(--enter-key-shadow) inset;
		/* box-shadow: 0px -4px 0px 0px var(--enter-key-shadow) inset; */
	}

	.enter:hover {
		/* background-color: var(--enter-key-hover); */
		opacity: 0.6;
		transition: ease-in 0.12s;
	}

	.enter:active {
		background-color: var(--enter-key-background);
		color: var(--enter-key-active);
		box-shadow: none;
	}

	/* @media (width >= 768px) {
		.keypad-container {
			padding: 32px;
		}
		.keypad-wrapper {
			gap: 24px;
		}
	} */
</style>
