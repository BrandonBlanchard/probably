<script>
    import ArtifactRow from "./ArtifactRow.svelte";

    export let items = [];
    export let Renderer = ArtifactRow;
</script>

<div class="item-list">
    {#each items as id}
        <Renderer id={id}/>
    {/each}
</div>

<style>

</style>
