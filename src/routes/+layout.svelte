<script lang="ts">
	import { Footer } from '$lib/components/footer';
	import { Nav } from '$lib/components/nav';
	import '@fontsource-variable/roboto';
	import '@fontsource/dm-serif-text';
	import '../app.css';

	let { children } = $props();
</script>

<Nav />
<div class="container mx-auto flex-1 rounded-2xl bg-white px-8 py-4">
	{@render children()}
</div>
<Footer />
