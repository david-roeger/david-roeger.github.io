<script>
	import Nav from "./components/Nav.svelte";
	import Canvas from "./components/Canvas.svelte";
	import shape from "./sketches/shape.js";
	import shape2 from "./sketches/shape2.js";

	import { sketches } from "./store.js";
	let obj = [
		{
			name: "shape",
			sketch: shape,
		},
		{
			name: "shape2",
			sketch: shape2,
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
