<script>
    import Button from "./inputs/Button.svelte";

    export let onClick = () => {};
    export let close = () => {};
    export let open = false;
</script>

<div class="modal-backdrop">
    <div class="modal-container">
        <div class="close">
            <Button onClick={close}>close</Button>
        </div>
        <slot />
    </div>
</div>

<style>
    .modal-backdrop {
        position: fixed;
        background-color: var(--tertiary-color);
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;

        display: flex;
        justify-content: center;
    }

    .modal-container {
        position: absolute;
        top: 5vh;
        width: calc(100% - 120px);
        max-width: 960px;
        margin: 0 auto;
    }

    .modal-container div {
        width: 100%;
        text-align: right;
    }

    .close {
        margin: 20px 8x;
    }
</style>
