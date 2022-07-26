<script>
	import { page } from "$app/stores";
	import ArtifactCard from "$lib/ArtifactCard.svelte";
	import { localForageStore } from "../../stores/local-forage-store";

	const artifact = localForageStore($page.params.id);

</script>

<svelte:head>
	<title>{artifact.artifact}</title>
	<meta name="description" content="Artifact data" />
</svelte:head>

<div class="artifact">
	<ArtifactCard artifactStore={artifact} />
</div>

<style>
	
</style>
