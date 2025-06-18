<script lang="ts" module>
	import { tv, type VariantProps } from 'tailwind-variants';

	export const typeVariants = tv({
		base: 'rounded-lg p-2 focus:ring-2 hover:ring-2 hover:cursor-pointer focus:outline-none transition-all',
		variants: {
			variant: {
				Normal: 'bg-neutral-100 ring-neutral-500',
				Fighting: 'bg-rose-100 ring-rose-500',
				Flying: 'bg-sky-100 ring-sky-500',
				Poison: 'bg-purple-100 ring-purple-500',
				Ground: 'bg-orange-100 ring-orange-500',
				Rock: 'bg-stone-200 ring-stone-500',
				Bug: 'bg-lime-100 ring-lime-500',
				Ghost: 'bg-indigo-100 ring-indigo-500',
				Steel: 'bg-slate-100 ring-slate-500',
				Fire: 'bg-red-100 ring-red-500',
				Water: 'bg-blue-100 ring-blue-500',
				Grass: 'bg-green-100 ring-green-500',
				Electric: 'bg-yellow-100 ring-yellow-500',
				Psychic: 'bg-fuchsia-100 ring-fuchsia-500',
				Ice: 'bg-cyan-100 ring-cyan-500',
				Dragon: 'bg-indigo-100 ring-indigo-500',
				Dark: 'bg-zinc-200 ring-zinc-500',
				Fairy: 'bg-pink-100 ring-pink-500'
			}
		},
		defaultVariants: {}
	});

	export type TypeVariant = VariantProps<typeof typeVariants>['variant'];
</script>

<script lang="ts">
	import * as Sheet from '$lib/components/sheet';
	import { pokemon } from '$lib/data/pokemon';
	import type { Type } from '$lib/data/types';
	import { dexPad } from '$lib/utils/string';
	import { cn } from '$lib/utils/style';
	import { columns, Table } from '.';
	import { selectedPokemon } from './selected.svelte';

	let { type }: { type: Type } = $props();

	const filteredPokemon = pokemon.filter((x) => x.types.includes(type.name));
	let selected = $derived(selectedPokemon.find((x) => x.type === type.name));

	function getOpen() {
		return selected!.sheetOpen;
	}
	function setOpen(newOpen: boolean) {
		return (selected!.sheetOpen = newOpen);
	}
</script>

<Sheet.Root bind:open={getOpen, setOpen}>
	<Sheet.Trigger class={cn(typeVariants({ variant: type.name }), 'min-h-[150px]')}>
		{#if selected?.pokemon}
			<div class="mx-auto mb-4 size-14 rounded-lg bg-white"></div>
			<div class="text-lg font-bold">
				{selected.pokemon.name}
			</div>
			<div class="text-sm">#{dexPad(selected.pokemon.ndex)} • {type.name}</div>
		{:else}
			<div>{type.name}</div>
		{/if}
	</Sheet.Trigger>
	<Sheet.Content side="right">
		<Sheet.Header>
			<Sheet.Title>{type.name}-type Pokémon</Sheet.Title>
		</Sheet.Header>
		<div class="overflow-y-auto">
			<div class="px-4">
				<Table {columns} data={filteredPokemon} forType={type.name} />
			</div>
		</div>
	</Sheet.Content>
</Sheet.Root>
