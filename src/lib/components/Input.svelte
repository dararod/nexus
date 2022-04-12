<script lang="ts">
  import type { SvelteComponent } from 'svelte/internal';

  export let type: 'text' | 'number' | 'email' | 'password' | 'date' = 'text';
  export let name: string;
  export let id = '';
  export let value: string | Date = null;
  export let label: string = null;
  export let placeholder: string | undefined = undefined;
  export let required = false;
  export let autocomplete = false;
  export let icon: SvelteComponent = null;
</script>

<div class="relative flex w-full flex-wrap items-stretch mb-3">
  {#if label}
    <label for={name} class="block text-sm font-medium text-gray-700 py-2">{label}</label>
  {/if}
  {#if icon}
    <span
      class="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
    >
      <svelte:component this={icon} />
    </span>
  {/if}
  <input
    {type}
    {name}
    {id}
    {placeholder}
    {required}
    {value}
    {autocomplete}
    class:pl-10={Boolean(icon)}
    class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
  />
</div>
