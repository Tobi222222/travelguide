<script lang="ts">
    import { mockPlaces, type Place } from '$lib/data/mockData';
    import SearchBar from '$lib/components/SearchBar.svelte';
    import FilterChips from '$lib/components/FilterChips.svelte';
    import PlaceCard from '$lib/components/PlaceCard.svelte';
    import { fade } from 'svelte/transition';

    const categories = [
        { id: 'all', label: 'All Places' },
        { id: 'attraction', label: 'Attractions' },
        { id: 'restaurant', label: 'Restaurants' },
        { id: 'cafe', label: 'Cafés' },
        { id: 'beach', label: 'Beaches' },
        { id: 'rooftop', label: 'Rooftops' },
        { id: 'hidden-gem', label: 'Hidden Gems' },
        { id: 'nightlife', label: 'Nightlife' }
    ];

    let searchQuery = $state('');
    let selectedCategory = $state('all');

    let filteredPlaces = $derived(
        mockPlaces.filter(p => {
            const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
            const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
            return matchesSearch && matchesCategory;
        })
    );
</script>

<div class="min-h-screen bg-cream-50 pt-6 pb-12 flex flex-col" in:fade={{duration: 300}}>
    <div class="px-4 sm:px-6 mb-6">
        <h1 class="text-3xl sm:text-4xl font-display font-bold text-slate-800 mb-6">Explore</h1>
        
        <div class="sticky top-4 z-30">
            <SearchBar bind:value={searchQuery} />
        </div>
    </div>

    <div class="mb-6 sticky top-[5rem] z-20 bg-cream-50/95 backdrop-blur-md pb-2">
        <FilterChips {categories} bind:selectedCategory />
    </div>

    <div class="flex-1 px-4 sm:px-6">
        {#if filteredPlaces.length === 0}
            <div class="text-center py-20">
                <p class="text-slate-500 text-lg">No places found. Try a different search.</p>
            </div>
        {:else}
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-20">
                {#each filteredPlaces as place (place.id)}
                    <div in:fade={{ duration: 200 }}>
                        <PlaceCard {place} />
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>
