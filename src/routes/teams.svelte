<script>
    import TeamBanner from "$lib/TeamBanner.svelte";
    import { localForageStore } from "../stores";

    const teamsStore = localForageStore('teams');
</script>

<svelte:head>
	<title>Teams</title>
	<meta name="description" content="Team list" />
</svelte:head>

<div class="teams">
	<h1>Teams</h1>

    <div class="teams-list">
        {#each $teamsStore.list || [] as team}
            <TeamBanner name={team.name} path={team.id}/>
        {/each}
    </div>
</div>

<style>
	.teams-list {
        display: flex;
        justify-content: space-between;
    }
</style>
