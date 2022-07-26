<script>
    import ArtifactCard from "$lib/ArtifactCard.svelte";
    import Modal from "$lib/Modal.svelte";

    import { localForageStore } from "../../stores";
    export let id = "";

    let artifact = localForageStore(id);
    let editing = false;

    $: artifact = localForageStore(id);
</script>

<tr class="artifact">
    <td class="artifact-name">
        <a on:click={() => (editing = true)}>
            {$artifact.artifact}
        </a>
    </td>
    <td class="category">{$artifact.category}</td>
    <td class="component">{$artifact.component}</td>
    <td class="status">{$artifact.status}</td>
    <td class="originator">{$artifact.originator}</td>
    <td>
        <slot />
    </td>
</tr>

{#if editing}
    <Modal visible={editing} close={() => (editing = false)}>
        <ArtifactCard
            artifactStore={artifact}
            onSave={() => (editing = false)}
        />
    </Modal>
{/if}

<style>
    a:hover {
        text-decoration: none;
    }

    .artifact {
        width: 100%;
    }

    td {
        font-size: 0.97em;
        color: var(--heading-color);
        margin-left: 10px;
        padding: 5px 10px;
        box-sizing: border-box;
        max-width: 250px;
        min-width: 100px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .artifact-name {
        width: 250px;
    }

    .category {
        max-width: 120px;
    }

    .component {
        max-width: 140px;
    }

    .status {
        max-width: 70px;
    }
</style>
