<script>
    export let onClick = () => {};
</script>

<button on:click={onClick}>
    <slot />
</button>

<style>
    button {
        cursor: pointer;
        background: none;
        border: none;
        color: var(--accent-color);
        transition: ease border-color 600ms;
        border: 1px solid #ffffff00;
        border-radius: 3px;
    }

    button:hover {
        border-color: var(--accent-color);
    }
</style>
