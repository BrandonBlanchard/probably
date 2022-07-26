<script>
    import Button from "./Button.svelte";

    export let label = "Text List";
    export let values = [];
    export let disabled = false;
    export let onchange = () => {};

    const appendNewItem = () => onchange([...values, `New ${label}`]);
</script>

<div class="list">
    <div>
        <label>{label}</label>
        {#each values as val, i}
            <div class="list-item">
                <input
                    disabled={disabled}
                    type="text"
                    value={val}
                    on:change={(e) =>
                        onchange(
                            [].concat(
                                values.slice(0, i),
                                e.target.value,
                                values.slice(i + 1)
                            )
                        )}
                />
                {#if !disabled}
                    <Button
                        onClick={() =>
                            onchange(
                                [].concat(values.slice(0, i), values.slice(i + 1))
                            )}>delete</Button
                    >
                {/if}
            </div>
        {/each}
    </div>
    {#if !disabled}
        <Button onClick={appendNewItem}>add</Button>
    {/if}
</div>

<style>
    .list {
        background-color: #fff;
        border-radius: 3px;
        padding: 10px 20px;
        margin-bottom: 20px;
    }

    .list div {
        margin-bottom: 10px;
    }

    .list-item {
        display: flex;
    }

    label {
        font-size: 12px;
        font-weight: 700;
        color: var(--heading-color);
    }

    input {
        border: none;
        width: 100%;
        height: 30px;
    }
</style>
