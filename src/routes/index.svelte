<script context="module">
	export const prerender = true;
</script>

<script>
	import { DEFAULT_USER } from "$lib/data";
	import Dropdown from "$lib/inputs/Dropdown.svelte";
	import { localForageStore } from "../stores";
	
	const users = localForageStore('users');
	let currentUser = localForageStore('currentUser');
	let userNames = [];
	let path = '/teams';

	$: userNames = ($users.list || []).map(u => u.name);
	$: console.log(path);	

	const setUser = (nextUser) => {
		// Update user
		const [user] = $users.list.filter(u => u.name === nextUser);
		currentUser.set(user);

		// If the use is member of only one team, send them there.
		path = user.teams.length === 1 ? `/${user.teams[0]}` : '/teams';
	};
</script>

<svelte:head>
	<title>Change User</title>
	<meta name="description" content="Sign in" />
</svelte:head>

<section>
	<h1> Change User </h1>

	<div class="card">
		<Dropdown bind:value={$currentUser.name} options={userNames} onchange={setUser}/>
		<a sveltekit:prefetch href={path}>Go!</a>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-bottom: 20px;
	}
</style>
