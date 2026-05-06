<script lang="ts">
    import { getUserState } from '$lib/state/userStore.svelte';
    import { mockPlaces } from '$lib/data/mockData';
    import PlaceCard from '$lib/components/PlaceCard.svelte';
    import { fade } from 'svelte/transition';

    const userState = getUserState();
    
    let savedPlaces = $derived(
        mockPlaces.filter(p => userState?.favorites.includes(p.id))
    );
</script>

<div class="min-h-screen bg-cream-50 pt-8 pb-12 flex flex-col" in:fade={{duration: 300}}>
    <div class="px-4 sm:px-6 mb-8">
        <h1 class="text-3xl sm:text-4xl font-display font-bold text-slate-800 mb-2">Saved Spots</h1>
        <p class="text-slate-500 font-medium text-lg">Your personal Barcelona collection.</p>
    </div>

    <div class="flex-1 px-4 sm:px-6">
        {#if savedPlaces.length === 0}
            <div class="text-center py-20 bg-white rounded-3xl border border-cream-200 shadow-sm mx-auto max-w-sm">
                <div class="w-16 h-16 bg-terracotta-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-terracotta-400"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </div>
                <h3 class="text-xl font-display font-semibold text-slate-800 mb-2">No saved spots yet</h3>
                <p class="text-slate-500 max-w-[200px] mx-auto">
                    Start exploring and tap the heart to save your favorite places here.
                </p>
                <a href="/explore" class="inline-block mt-6 px-6 py-2.5 bg-slate-800 text-white font-medium rounded-full hover:bg-slate-700 transition-colors">
                    Explore
                </a>
            </div>
        {:else}
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-20">
                {#each savedPlaces as place (place.id)}
                    <div in:fade={{ duration: 200 }}>
                        <PlaceCard {place} />
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>
