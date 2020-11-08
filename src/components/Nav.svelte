<script>
	import { currentSketch, sketches } from '../store.js';
	function updateSketch(i) {
		$currentSketch = 0;
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
		{#if name}
			<li on:click={() => updateSketch(i)}>{name}</li>
		{/if}
	{/each}
</ul>
