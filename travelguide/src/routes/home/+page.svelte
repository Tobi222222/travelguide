<script lang="ts">
    import { getUserState } from '$lib/state/userStore.svelte';
    import { mockPlaces, getMatchPercentage, type Place } from '$lib/data/mockData';
    import CategorySection from '$lib/components/CategorySection.svelte';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    const userState = getUserState();
    let profile = $derived(userState?.userProfile || 'Traveler');

    // Categorized lists
    let allPlaces = mockPlaces;
    
    // Sort all places by match percentage
    let recommendedForYou = $derived([...allPlaces].sort((a, b) => 
        getMatchPercentage(b, profile) - getMatchPercentage(a, profile)
    ).slice(0, 5));

    let hiddenGems = $derived(allPlaces.filter(p => p.category === 'hidden-gem'));
    let mustSee = $derived(allPlaces.filter(p => p.category === 'attraction'));
    let foodSpots = $derived(allPlaces.filter(p => p.category === 'restaurant' || p.category === 'cafe'));
    
    let isMounted = $state(false);
    onMount(() => {
        isMounted = true;
    });
</script>

{#if isMounted}
<div class="min-h-screen bg-cream-50 pt-8 pb-10" in:fade={{duration: 400}}>
    <!-- Header -->
    <header class="px-4 sm:px-6 mb-8">
        <h1 class="text-3xl sm:text-4xl font-display font-bold text-slate-800 mb-2">
            Barcelona for <br/> <span class="text-terracotta-600">{profile}s</span>
        </h1>
        <p class="text-slate-500 font-medium text-lg">Your personalized Mediterranean guide.</p>
    </header>

    <div class="space-y-2">
        <CategorySection 
            title="Perfect for your vibe" 
            subtitle="Hand-picked spots based on your quiz answers."
            places={recommendedForYou} 
            showMatch={true} 
            userProfile={profile} 
        />

        <CategorySection 
            title="Hidden gems you'll love" 
            subtitle="Exclusive spots off the beaten path."
            places={hiddenGems} 
            showMatch={false} 
            userProfile={profile} 
        />

        {#if profile === 'Foodie Explorer'}
            <CategorySection 
                title="Top food spots for Foodies" 
                subtitle="The best culinary experiences."
                places={foodSpots} 
                showMatch={true} 
                userProfile={profile} 
            />
        {/if}

        <CategorySection 
            title="Must See Places" 
            subtitle="Iconic landmarks of the city."
            places={mustSee} 
            showMatch={false} 
            userProfile={profile} 
        />
    </div>
</div>
{/if}
