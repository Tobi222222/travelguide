<script lang="ts">
    import { page } from '$app/state';
    import { mockPlaces, getMatchPercentage } from '$lib/data/mockData';
    import FavoriteButton from '$lib/components/FavoriteButton.svelte';
    import { getUserState } from '$lib/state/userStore.svelte';
    import { ChevronLeft, MapPin, Clock, CircleDollarSign, Sparkles } from 'lucide-svelte';
    import { fade, fly } from 'svelte/transition';

    const placeId = $derived(page.params.id);
    let place = $derived(mockPlaces.find(p => p.id === placeId));
    
    const userState = getUserState();
    let profile = $derived(userState?.userProfile || '');
    let matchPercentage = $derived(place ? getMatchPercentage(place, profile) : 0);
</script>

{#if place}
<div class="min-h-screen bg-cream-50 pb-20" in:fade={{duration: 300}}>
    <!-- Hero Image Area -->
    <div class="relative h-72 sm:h-96 w-full">
        <img 
            src={place.image} 
            alt={place.title} 
            class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        
        <!-- Top Nav -->
        <div class="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-10">
            <button 
                onclick={() => history.back()}
                class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label="Go back"
            >
                <ChevronLeft size={24} />
            </button>
            <FavoriteButton placeId={place.id} class="bg-white/20 text-white backdrop-blur-md hover:bg-white/30" />
        </div>
        
        <!-- Title & Basic Info -->
        <div class="absolute bottom-0 left-0 right-0 p-6 z-10" in:fly={{y: 20, duration: 500, delay: 200}}>
            <div class="flex gap-2 flex-wrap mb-3">
                <span class="px-3 py-1 bg-terracotta-500/90 text-white text-xs rounded-full font-semibold uppercase tracking-wider backdrop-blur-sm">
                    {place.category.replace('-', ' ')}
                </span>
                {#if matchPercentage > 85}
                    <span class="px-3 py-1 bg-white/90 text-terracotta-600 text-xs rounded-full font-semibold backdrop-blur-sm flex items-center gap-1">
                        <Sparkles size={12} /> {matchPercentage}% Match
                    </span>
                {/if}
            </div>
            <h1 class="text-4xl sm:text-5xl font-display font-bold text-white leading-tight drop-shadow-md">
                {place.title}
            </h1>
        </div>
    </div>

    <!-- Content -->
    <div class="px-6 py-8" in:fly={{y: 20, duration: 500, delay: 300}}>
        
        <!-- Quick Stats -->
        <div class="flex gap-6 mb-8 border-b border-cream-200 pb-8">
            <div class="flex items-center gap-2 text-slate-600">
                <MapPin size={20} class="text-terracotta-500" />
                <span class="font-medium text-lg">{place.localScore} <span class="text-sm text-slate-400">Score</span></span>
            </div>
            <div class="flex items-center gap-2 text-slate-600">
                <CircleDollarSign size={20} class="text-terracotta-500" />
                <span class="font-medium text-lg">{place.priceLevel}</span>
            </div>
        </div>

        <!-- Description -->
        <div class="mb-10">
            <h2 class="text-2xl font-display font-semibold text-slate-800 mb-4">About</h2>
            <p class="text-slate-600 text-lg leading-relaxed font-light">
                {place.description}
            </p>
        </div>

        <!-- Why it matches you -->
        {#if profile && matchPercentage > 80}
        <div class="bg-terracotta-50 rounded-2xl p-6 mb-10 border border-terracotta-100">
            <h2 class="text-xl font-display font-semibold text-terracotta-800 mb-2 flex items-center gap-2">
                <Sparkles size={20} /> Why you'll love it
            </h2>
            <p class="text-terracotta-700/80 leading-relaxed">
                As a {profile}, this place perfectly matches your vibe with its {place.vibeTags.join(' and ').toLowerCase()} atmosphere.
            </p>
        </div>
        {/if}

        <!-- Tags -->
        <div class="mb-10">
            <h2 class="text-xl font-display font-semibold text-slate-800 mb-4">Vibe & Features</h2>
            <div class="flex flex-wrap gap-2">
                {#each place.tags as tag}
                    <span class="px-4 py-2 bg-white border border-cream-200 text-slate-600 text-sm rounded-xl font-medium shadow-sm">
                        {tag}
                    </span>
                {/each}
                {#each place.vibeTags as tag}
                    <span class="px-4 py-2 bg-cream-100 text-slate-700 text-sm rounded-xl font-medium shadow-sm">
                        {tag}
                    </span>
                {/each}
            </div>
        </div>

        <!-- Map Placeholder -->
        <div class="rounded-2xl overflow-hidden h-48 bg-slate-200 relative shadow-inner">
            <div class="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
                <MapPin size={32} class="mb-2 opacity-50" />
                <span class="font-medium">Map View</span>
            </div>
        </div>

    </div>
</div>
{:else}
<div class="min-h-screen flex items-center justify-center bg-cream-50">
    <p class="text-slate-500 text-xl font-medium">Place not found.</p>
</div>
{/if}
