<script>
	import Sidebar from '$lib/components/Sidebar.svelte';

	import '$lib/styles/app.css';
</script>

<div class="grid md:grid-cols-12 sm:grid-cols-6 grid-cols-4 h-screen">
	<Sidebar />
	<main
		class="bg-neutral-800 text-white md:col-span-10 sm:col-span-5 col-span-3 overflow-y-auto max-h-screen scroll-smooth"
	>
		<slot />
	</main>
</div>
