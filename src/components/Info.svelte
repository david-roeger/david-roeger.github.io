<script>
	import { currentSketch, sketches } from "../store.js";

	console.log($currentSketch);
</script>

<style>
	h3 {
		margin-right: 3em;
		margin-bottom: 1em;
		padding-top: 1em;
		border-top: 1px solid white;
		color: white;
	}
	p {
		color: white;
		margin-top: 0;
	}
	p + p {
		margin-bottom: 0;
	}
</style>

{#if $sketches[$currentSketch].hasOwnProperty('name')}
	<h3>{$sketches[$currentSketch].name}</h3>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolores
		ab dicta repellendus laborum ratione architecto tempora cumque, quaerat
		sint, soluta beatae debitis! Harum quo doloremque commodi itaque
		eveniet. Sit?
	</p>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolores
		ab dicta repellendus laborum ratione architecto tempora cumque, quaerat
		sint, soluta beatae debitis! Harum quo doloremque commodi itaque
		eveniet. Sit?
	</p>
{/if}
