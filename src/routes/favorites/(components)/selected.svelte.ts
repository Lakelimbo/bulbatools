import type { Pokemon } from '$lib/data/pokemon';
import type { Type } from '$lib/data/types';

type Selected = {
	sheetOpen: boolean;
	type: Type['name'];
	pokemon?: Pokemon;
};

export const selectedPokemon = $state<Selected[]>([
	{
		type: 'Normal',
		pokemon: undefined,
		sheetOpen: false
	},
	{
		type: 'Fighting',
		pokemon: undefined,
		sheetOpen: false
	},
	{
		type: 'Flying',
		pokemon: undefined,
		sheetOpen: false
	},
	{
		type: 'Poison',
		pokemon: undefined,
		sheetOpen: false
	},
	{
		type: 'Ground',
		pokemon: undefined,
		sheetOpen: false
	},
	{
		type: 'Rock',
		pokemon: undefined,
		sheetOpen: false
	},
	{
		type: 'Bug',
		pokemon: undefined,
		sheetOpen: false
	},
	{
		type: 'Ghost',
		pokemon: undefined,
		sheetOpen: false
	},
	{
		type: 'Steel',
		pokemon: undefined,
		sheetOpen: false
	},
	{
		type: 'Fire',
		pokemon: undefined,
		sheetOpen: false
	},
	{
		type: 'Water',
		pokemon: undefined,
		sheetOpen: false
	},
	{
		type: 'Grass',
		pokemon: undefined,
		sheetOpen: false
	},
	{
		type: 'Electric',
		pokemon: undefined,
		sheetOpen: false
	},
	{
		type: 'Psychic',
		pokemon: undefined,
		sheetOpen: false
	},
	{
		type: 'Ice',
		pokemon: undefined,
		sheetOpen: false
	},
	{
		type: 'Dragon',
		pokemon: undefined,
		sheetOpen: false
	},
	{
		type: 'Dark',
		pokemon: undefined,
		sheetOpen: false
	},
	{
		type: 'Fairy',
		pokemon: undefined,
		sheetOpen: false
	}
]);
