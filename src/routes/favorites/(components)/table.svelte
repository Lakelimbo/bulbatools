<script lang="ts" generics="TData, TValue">
	import { createSvelteTable } from '$lib/components/data-table';
	import { Input } from '$lib/components/input';
	import type { Pokemon } from '$lib/data/pokemon';
	import type { Type } from '$lib/data/types';
	import {
		type ColumnDef,
		type ColumnFiltersState,
		getCoreRowModel,
		getFilteredRowModel
	} from '@tanstack/table-core';
	import { Item } from '.';

	type DataTableProps<TData, TValue> = {
		columns: ColumnDef<TData, TValue>[];
		data: TData[];
		forType: Type['name'];
	};

	let { data, columns, forType }: DataTableProps<TData, TValue> = $props();

	let columnFilters = $state<ColumnFiltersState>([]);

	const table = createSvelteTable({
		get data() {
			return data;
		},
		columns,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnFiltersChange: (updater) => {
			if (typeof updater === 'function') {
				columnFilters = updater(columnFilters);
			} else {
				columnFilters = updater;
			}
		},
		state: {
			get columnFilters() {
				return columnFilters;
			}
		}
	});
</script>

<Input
	placeholder="Search for Pokémon..."
	value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
	onchange={(e) => table.getColumn('name')?.setFilterValue(e.currentTarget.value)}
	oninput={(e) => table.getColumn('name')?.setFilterValue(e.currentTarget.value)}
	class="mb-3"
/>

{#each table.getRowModel().rows as row (row.id)}
	<Item pokemon={row.original as Pokemon} {forType} />
{:else}
	<div class="text-center">No results.</div>
{/each}
