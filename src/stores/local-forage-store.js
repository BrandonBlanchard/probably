
import localforage from "localforage";
import { writable } from "svelte/store";

export const localForageStore = (key) => {
    const store = writable({
        key, // team name, artifact id 
    });

    localforage.getItem(key).then((data) => {
        store.set({key, ...data });
    });
    
    return {
        ...store,
        async set (nextValue) {
            try {
                await localforage.setItem(key, nextValue);
                store.set({ ...nextValue, key });
            } catch (e) {
                console.warn(`failed to set ${key} to new value: ${JSON.stringify(nextValue)}`);
            }
        },
        async refresh () {
            try {
                const value = await localforage.getItem(key);
                store.set({ ...value, key });
            } catch (e) {
                console.warn(`failed to retrieve item with key ${key}`);
            }
        },
        async update (updatedValues) {
            store.update((state) => {
                try {
                    const nextItem = {
                        ...state,
                        ...updatedValues
                    };
                    
                    localforage.setItem(key, nextItem);
                    return nextItem;
                } catch (e) {
                    return state;
                }
            });
        },
    };
};