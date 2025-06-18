<script lang="ts">
	import type { Pokemon } from '$lib/data/pokemon';
	import type { Type } from '$lib/data/types';
	import { dexPad } from '$lib/utils/string';
	import { cn } from '$lib/utils/style';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { selectedPokemon } from './selected.svelte';
	import { typeVariants } from './type-cards.svelte';

	type Props = WithElementRef<HTMLButtonAttributes> & {
		pokemon: Pokemon;
		forType: Type['name'];
	};

	let { pokemon, forType, ref = $bindable(null) }: Props = $props();

	function addToSelected() {
		const item = selectedPokemon.find((x) => x.type === forType)!;
		item.pokemon = pokemon;
		item.sheetOpen = false;
	}
</script>

<button
	bind:this={ref}
	onclick={addToSelected}
	class={cn(
		typeVariants({ variant: pokemon.types[0] }),
		'mb-2 flex h-[80px] w-full items-center gap-3 p-4 text-start text-sm'
	)}
	type="button"
>
	<div class="size-12 rounded-lg bg-white"></div>
	<div>
		<div>#{dexPad(pokemon.ndex)}</div>
		<div class="text-lg font-bold">{pokemon.name}</div>
	</div>
</button>
