<script lang="ts" context="module">
  import type { ErrorLoadInput } from '@sveltejs/kit';

  export function load({ status }: ErrorLoadInput) {
    return {
      props: {
        status
      }
    };
  }
</script>

<script lang="ts">
  export let status: number;
</script>

<svelte:head>
  <title>Opps!</title>
</svelte:head>

<section class="h-screen">
  <h1>ERROR {status}!</h1>
</section>
