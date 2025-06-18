<script lang="ts">
	import { types } from '$lib/data/types';
	import { TypeCards } from './(components)';
</script>

<h1 class="heading">Favorite Pokémon of each type</h1>

<section class="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
	{#each types as type}
		<TypeCards {type} />
	{/each}
</section>
