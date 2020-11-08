<script>
	import Nav from './components/Nav.svelte';
	import Canvas from './components/Canvas.svelte';
	import Shape from './sketches/shape.js';
	import ColorCube from './sketches/colorCube.js';
	import Cone from './sketches/cone.js';
	import Hilbert from './sketches/hilbertCurve.js';
	import NwPI from './sketches/numberWalkPI.js';
	import Rsquares from './sketches/rotatingSquares.js';
	import Turtle from './sketches/turtle.js';

	import { sketches } from './store.js';
	let obj = [
		{},
		{
			name: 'Shape',
			sketch: Shape,
		},
		{
			name: 'Color Cube',
			sketch: ColorCube,
		},
		{
			name: 'Cones',
			sketch: Cone,
		},
		{
			name: 'Hilbert Curve',
			sketch: Hilbert,
		},
		{
			name: 'Number Walk PI',
			sketch: NwPI,
		},
		{
			name: 'Rotating Squares',
			sketch: Rsquares,
		},
		{
			name: 'Turtle',
			sketch: Turtle,
		},
	];
	$sketches = [...obj];
</script>

<style>
	.container {
		height: 100%;
		display: grid;
		background-color: black;
		grid-template: 0 100% / 200px 1fr;
	}

	.inner-container {
		grid-area: 1 / 2 / 2 / 3;
		background-color: black;
		height: 100%;
	}

	nav {
		grid-area: 1 / 1 / 2 / 2;
		background-color: blue;
		height: 100%;
	}
</style>

<div class="container">
	<main class="inner-container">
		<Canvas />
	</main>
	<nav>
		<Nav />
	</nav>
</div>
