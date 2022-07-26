<script>
    import { writable } from "svelte/store";
    import Dropdown from "./inputs/Dropdown.svelte";
    import {
accessRole,
        artifactCategory,
        artifactComponent,
        deliveryStatus,
    } from "./data";
    import TextListInput from "./inputs/TextListInput.svelte";
    import Button from "./inputs/Button.svelte";
    import { localForageStore } from "../stores";

    const DEFAULT_CHANGES = {};
    const currentUser = localForageStore("currentUser");

    export let artifactStore = writable();
    export let onSave = () => {};

    let changes = DEFAULT_CHANGES;

    $: hasAcces = $currentUser.role >= accessRole.teamMember;

    const pushChanges = (key, val) => {
        changes = {
            ...changes,
            [key]: val,
        };
    };

    const clearChanges = () => {
        changes = DEFAULT_CHANGES;
    };

    const saveChanges = () => {
        artifactStore.update({ ...changes });
        changes = DEFAULT_CHANGES;
        onSave();
    };
</script>

<div class="card">
    <h1>
        <input
            type="text"
            value={changes.artifact || $artifactStore.artifact}
            on:change={(e) => pushChanges("artifact", e.target.value)}
            disabled={!hasAcces}
        />
    </h1>

    <div class="details">
        <div>
            <label>Category</label>
            <Dropdown
                value={changes.category || $artifactStore.category}
                options={Object.values(artifactCategory)}
                onchange={(val) => pushChanges("category", val)}
                disabled={!hasAcces}
            />
        </div>
        <div>
            <label>Component</label>
            <Dropdown
                value={changes.component || $artifactStore.component}
                options={Object.values(artifactComponent)}
                onchange={(val) => pushChanges("component", val)}
                disabled={!hasAcces}
            />
        </div>
        <div>
            <label>Status</label>
            <Dropdown
                value={changes.status || $artifactStore.status}
                options={Object.values(deliveryStatus)}
                onchange={(val) => pushChanges("status", val)}
                disabled={!hasAcces}
            />
        </div>

        <div>
            <label>Due Date</label>
            <input
                type="date"
                value={changes.due || $artifactStore.due}
                on:change={(e) => pushChanges("due", e.target.value)}
                disabled={!hasAcces}
            />
        </div>

        <div>
            <label>Originator</label>
            <input
                type="text"
                value={changes.originator || $artifactStore.originator}
                on:change={(e) => pushChanges("originator", e.target.value)}
                disabled={!hasAcces}
            />
        </div>
    </div>

    <div>
        <label>Description</label>
        <textarea
            value={$artifactStore.description}
            on:change={(e) => pushChanges("description", e.target.value)}
            disabled={!hasAcces}
        />
    </div>
    <label>Notes</label>
    <textarea
        value={$artifactStore.notes}
        on:change={(e) => pushChanges("notes", e.target.value)}
        disabled={!hasAcces}
    />
</div>

<TextListInput
    label="Template"
    values={changes.template || $artifactStore.template}
    onchange={(val) => pushChanges("template", val)}
    disabled={!hasAcces}
/>
<TextListInput
    label="Guide"
    values={changes.guide || $artifactStore.guide}
    onchange={(val) => pushChanges("guide", val)}
    disabled={!hasAcces}
/>

{#if changes !== DEFAULT_CHANGES && hasAcces}
    <div class="save">
        <Button onClick={clearChanges}>Cancel</Button>
        <Button onClick={saveChanges}>Save</Button>
    </div>
{/if}

<style>
    .card div {
        margin-bottom: 10px;
    }

    .details {
        display: flex;
        flex-wrap: wrap;
    }

    .save {
        position: fixed;
        left: calc(50% - 100px);
        bottom: 20px;
        width: 200px;

        border: 1px solid red;
        padding: 20px 10px;
        background-color: #fff;

        display: flex;
        justify-content: space-around;
    }

    label {
        font-size: 12px;
        font-weight: 700;
        color: var(--heading-color);
    }

    textarea {
        margin: 10px 0;
        width: calc(100% - 20px);
        min-height: 100px;
        padding: 5px 10px;
        border: 1px solid #f3f3f3;
        font-size: 0.97em;
        font-family: inherit;
        color: var(--heading-color);
        transition: ease border-color 600ms;
        border-radius: 3px;
        resize: none;
    }

    input {
        border: none;
        width: 100%;
        height: 30px;
        border: 1px solid #ffffff00;
        transition: ease border-color 600ms;
        border-radius: 3px;
    }

    textarea:hover,
    input:hover {
        border-color: var(--header-color);
        outline: none;
    }
</style>
