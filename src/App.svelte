<script>
	import Nav from './components/Nav.svelte';
	import Canvas from './components/Canvas.svelte';
	import Shape from './sketches/shape.js';
	import ColorCube from './sketches/colorCube.js';
	import Cone from './sketches/cone.js';

	import { sketches } from './store.js';
	let obj = [
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
