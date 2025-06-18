<script lang="ts">
	import { cn } from '$lib/utils/style';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLInputAttributes, HTMLInputTypeAttribute } from 'svelte/elements';

	type InputType = Exclude<HTMLInputTypeAttribute, 'file'>;

	type Props = WithElementRef<
		Omit<HTMLInputAttributes, 'type'> &
			({ type: 'file'; files?: FileList } | { type?: InputType; files?: undefined })
	>;

	let {
		ref = $bindable(null),
		value = $bindable(),
		files = $bindable(),
		class: className,
		...restProps
	}: Props = $props();
</script>

<input
	bind:this={ref}
	data-slot="input"
	class={cn(
		'border-input selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-white px-3 py-1 text-base shadow-xs ring-offset-white transition-[color,box-shadow] outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
		'focus-visible:border-secondary focus-visible:ring-secondary/50 focus-visible:ring-[3px]',
		'aria-invalid:border-red-400 aria-invalid:ring-red-400/20',
		className
	)}
	bind:value
	{...restProps}
/>
