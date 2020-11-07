<script>
	import { onMount, onDestroy } from "svelte";
	import p5 from "../p5.min";
	import { currentSketch, sketches } from "../store.js";

	let p = undefined;
	let mounted = false;
	function setCanvas() {
		if (mounted) {
			const container = document.getElementById("container");
			if (p !== undefined) {
				p.remove();
			}
			p = new p5($sketches[$currentSketch].sketch);
		}
	}

	const unsubscribe = currentSketch.subscribe(() => {
		setCanvas();
	});

	onMount(async () => {
		mounted = true;
		setCanvas();
	});

	onDestroy(unsubscribe);
</script>

<style>
	#container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>

<div id="container" />
