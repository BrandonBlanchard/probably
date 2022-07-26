<script>
    export let value = "";
    export let options = [];
    export let disabled = false;
    export let onchange = (val) => {};
</script>

<div class="card">
    <select {disabled} on:change={(e) => onchange(e.target.value)}>
        {#each options as opt}
            <option selected={opt === value}>{opt}</option>
        {/each}
    </select>
</div>

<style>
    select,
    option {
        font-size: 0.97em;
        color: var(--heading-color);
        padding: 5px 10px;
        box-sizing: border-box;
    }

    select {
        margin-right: 10px;
    }
</style>
