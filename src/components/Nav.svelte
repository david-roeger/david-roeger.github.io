<script>
	import { currentSketch, sketches } from "../store.js";
	function updateSketch(i) {
		console.log(i);
		$currentSketch = i;
	}
	console.log($currentSketch);
</script>

<style>
	ul {
	}
	li {
		color: white;
		user-select: none;
	}
	li:hover {
		cursor: pointer;
	}
</style>

<ul>
	{#each $sketches as { name }, i}
		<li on:click={() => updateSketch(i)}>{name}</li>
	{/each}
</ul>
