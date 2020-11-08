<script>
	import { currentSketch, sketches } from "../store.js";
	function updateSketch(i) {
		$currentSketch = 0;
		$currentSketch = i;
		sessionStorage.setItem("current", i);
	}
	console.log($currentSketch);
</script>

<style>
	h3 {
		margin-left: 1em;
		margin-bottom: 0;
		margin-top: 2em;
		color: white;
		user-select: none;
	}
	li {
		color: white;
		user-select: none;
		line-height: 200%;
		position: relative;
	}

	li.active span {
		background-color: white;
		color: black;
	}

	li:hover {
		cursor: pointer;
	}
</style>

<h3>Beispiele</h3>
<ul>
	{#each $sketches as { name }, i}
		{#if name}
			<li
				class={i === $currentSketch ? 'active' : ''}
				on:click={() => updateSketch(i)}>
				<span>&nbsp;{name}&nbsp;</span>
			</li>
		{/if}
	{/each}
</ul>
