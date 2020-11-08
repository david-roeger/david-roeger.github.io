<script>
	import Nav from "./components/Nav.svelte";
	import Info from "./components/Info.svelte";
	import Canvas from "./components/Canvas.svelte";
	import Shape from "./sketches/shape.js";
	import ColorCube from "./sketches/colorCube.js";
	import Cone from "./sketches/cone.js";
	import Hilbert from "./sketches/hilbertCurve.js";
	import NwPI from "./sketches/numberWalkPI.js";
	import Rsquares from "./sketches/rotatingSquares.js";
	import Turtle from "./sketches/turtle.js";

	import { currentSketch, sketches } from "./store.js";
	let obj = [
		{},
		{
			name: "Turtle",
			sketch: Turtle,
		},
		{
			name: "Turtle???",
			sketch: Shape,
		},
		{
			name: "Color Cube",
			sketch: ColorCube,
		},
		{
			name: "Cones",
			sketch: Cone,
		},
		{
			name: "Hilbert Curve",
			sketch: Hilbert,
		},
		{
			name: "Number Walk PI",
			sketch: NwPI,
		},
		{
			name: "Rotating Squares",
			sketch: Rsquares,
		},
	];
	$sketches = [...obj];
</script>

<style>
	.container {
		height: 100%;
		display: flex;
		flex-direction: row-reverse;
		background-color: black;
		overflow: hidden;
	}

	.inner-container {
		width: 299px;
		min-width: 299px;
		max-width: 299px;
		background-color: black;
		height: 100%;
		border-right: 1px solid white;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow-y: auto;
	}

	main {
		flex-grow: 1;
	}
	nav {
		height: 100%;
	}

	section {
		padding: 1rem 0.4rem 1rem 1.2rem;
	}
</style>

<svelte:head>
	<title>Processing &lt;3</title>
</svelte:head>

<div class="container">
	<main>
		<Canvas />
	</main>
	<div class="inner-container">
		<nav>
			<Nav />
		</nav>
		<section>
			<Info />
		</section>
	</div>
</div>
