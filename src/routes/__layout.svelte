<script>

	import localforage from 'localforage';
	import Header from '$lib/header/Header.svelte';
	import { onMount } from 'svelte';
	import { initializeMockData } from '../lib/data/mockData';
	import '../app.css';
	
	let ready = false;

	const initialize = async () => {
		const initialized = await localforage.getItem('initialized');
		if(!initialized) await initializeMockData();
		
		ready = true;
	};

	onMount(initialize);
</script>

<Header />

<main>
	{#if ready}
		<slot />
	{/if}
</main>

<footer>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: calc(100% - 40px);
		max-width: 960px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
