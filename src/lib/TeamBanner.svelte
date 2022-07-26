<script>
    export let name = "";
    export let path = "";
</script>

<div class="team-banner">
    <a sveltekit:prefetch href={`/${path}`}>
        <div class="team">
            <h1>{name}</h1>
        </div>
    </a>
</div>

<style>
    .team-banner {
        height: 600px;
        width: 200px;
        flex-grow: 1;
        background-color: #fff;
        margin: 0 10px;
        border-radius: 3px;
        flex-direction: column;
    }

    h1 {
        text-align: center;
    }
</style>
