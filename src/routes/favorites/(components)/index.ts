import type { Pokemon } from '$lib/data/pokemon';
import type { ColumnDef } from '@tanstack/table-core';

export { default as Item } from './item.svelte';
export { default as Table } from './table.svelte';
export { default as TypeCards } from './type-cards.svelte';

export const columns: ColumnDef<Pokemon>[] = [
	{
		accessorKey: 'ndex',
		header: '#'
	},
	{
		accessorKey: 'name',
		header: 'Pokémon'
	}
];
