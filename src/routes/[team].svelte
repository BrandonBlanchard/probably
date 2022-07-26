<script>
    import { page } from "$app/stores";
    import { accessRole, DEFAULT_ARTIFACT } from "$lib/data";
    import Button from "$lib/inputs/Button.svelte";
    import ArtifactRow from "$lib/ItemList/ArtifactRow.svelte";
    import localforage from "localforage";
    import { v4 } from "uuid";
    import { localForageStore } from "../stores";

    const team = localForageStore($page.params.team || "");
    const currentUser = localForageStore('currentUser');

    $: hasAccess = $currentUser.role >= accessRole.admin;
    const newArtifact = async () => {
        try {
            const newArtifact = {
                ...DEFAULT_ARTIFACT,
                id: v4()
            };
            
            await localforage.setItem(newArtifact.id, newArtifact);
            team.update({ artifacts: [].concat($team.artifacts, newArtifact.id) });
        } catch (e) {
            console.warn('Failed to create new artifact');
        }
    };

    const deleteArtifact = (id) => {
        team.update({
            artifacts: $team.artifacts.filter(a => a !== id)
        });
    }
</script>

<svelte:head>
    <title>Team {$team.name} Artifacts</title>
    <meta name="description" content="Artifact list" />
</svelte:head>

<div class="artifacts">
    <h1>Team {$team.name || "-"}</h1>
    <h2>Artifacts</h2>
    <div class="artifact-list-container">
        {#if $team.artifacts}
            <table>
                {#each $team.artifacts as artifact}
                    <ArtifactRow id={artifact}>
                        {#if hasAccess}
                            <Button onClick={() => deleteArtifact(artifact)}>delete</Button>
                        {/if}
                    </ArtifactRow>
                {/each}
            </table>
        {/if}

        {#if hasAccess}
        <div class="new-artifact">
            <Button onClick={newArtifact}>+ New Artifact</Button>
        </div>
        {/if}
    </div>
</div>

<style>
    .artifact-list-container {
        padding: 20px 0;
        background-color: #fff;
        border-radius: 3px;
    }

    table {
        width: 100%;
        padding: 0 20px;
    }
    
    .new-artifact {
        margin: 20px 20px;
    }

</style>
