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
        { id: 'nightlife', label: 'Nightlife' },
        { id: 'market', label: 'Markets' },
        { id: 'viewpoint', label: 'Viewpoints' },
        { id: 'romantic', label: 'Romantic' }
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

<div class="min-h-screen bg-cream-50 pt-6 pb-24 flex flex-col" in:fade={{duration: 500}}>
    <!-- Sticky Header Area -->
    <div class="sticky top-[72px] md:top-[80px] z-40 bg-cream-50/80 backdrop-blur-xl pt-2 pb-4">
        <div class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12">
            <h1 class="text-4xl sm:text-5xl font-display font-bold text-navy-900 mb-6 drop-shadow-sm">Explore</h1>
            <SearchBar bind:value={searchQuery} />
        </div>
        <div class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12">
            <FilterChips {categories} bind:selectedCategory />
        </div>
    </div>

    <!-- Grid Area -->
    <div class="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 mt-4">
        {#if filteredPlaces.length === 0}
            <div class="flex flex-col items-center justify-center text-center py-20" in:fade>
                <div class="w-16 h-16 bg-cream-200 rounded-full flex items-center justify-center mb-4 text-3xl">🏜️</div>
                <h3 class="text-xl font-display font-bold text-navy-900 mb-2">No Oasis Found</h3>
                <p class="text-slate-500 font-medium">Try a different search term or category.</p>
            </div>
        {:else}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 pb-10">
                {#each filteredPlaces as place (place.id)}
                    <div in:fade={{ duration: 400 }}>
                        <PlaceCard {place} />
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>
