<script lang="ts">
    import { getUserState } from '$lib/state/userStore.svelte';
    import { mockPlaces, getMatchPercentage, type Place } from '$lib/data/mockData';
    import CategorySection from '$lib/components/CategorySection.svelte';
    import { onMount } from 'svelte';
    import { fade, slide } from 'svelte/transition';
    import { Sun, CloudRain, Wind, MapPin, Sunset, Flame } from 'lucide-svelte';

    const userState = getUserState();
    let profile = $derived(userState?.userProfile || 'Culture Lover');

    // Categorized lists
    let allPlaces = mockPlaces;
    
    // Sort all places by match percentage
    let recommendedForYou = $derived([...allPlaces].sort((a, b) => 
        getMatchPercentage(b, profile) - getMatchPercentage(a, profile)
    ).slice(0, 6));

    let trendingSpots = $derived(allPlaces.filter(p => p.trending));
    let localsLove = $derived(allPlaces.filter(p => p.vibeTags.includes('Local lifestyle')).slice(0, 6));
    let sunsetSpots = $derived(allPlaces.filter(p => p.sunsetTime).slice(0, 5));
    let quietSpots = $derived(allPlaces.filter(p => p.isQuietNow).slice(0, 5));
    
    let isMounted = $state(false);

    // Dynamic Greeting based on time
    let greeting = $state('Good morning');
    
    onMount(() => {
        isMounted = true;
        const hour = new Date().getHours();
        if (hour >= 12 && hour < 17) greeting = 'Good afternoon';
        else if (hour >= 17) greeting = 'Good evening';
    });
</script>

{#if isMounted}
<div class="min-h-screen bg-cream-50 pb-24" in:fade={{duration: 800}}>
    
    <!-- Cinematic Hero Section -->
    <header class="relative h-[65vh] md:h-[60vh] lg:h-[70vh] max-h-[800px] w-full overflow-hidden rounded-b-[2.5rem] shadow-xl">
        <!-- Background Image based on time or profile. We'll use a stunning aerial of Barcelona -->
        <img 
            src="https://images.unsplash.com/photo-1583422409516-15eba5336080?auto=format&fit=crop&q=80&w=2400&h=1600" 
            alt="Barcelona Aerial" 
            class="absolute inset-0 w-full h-full object-cover transform scale-105 animate-[slowPan_20s_ease-in-out_infinite_alternate]"
        />
        
        <!-- Premium Gradients -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-navy-900/90"></div>
        
        <!-- Hero Content -->
        <div class="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-12 max-w-7xl mx-auto w-full">
            <div in:slide={{axis: 'y', duration: 800, delay: 200}}>
                <div class="flex items-center gap-2 mb-3">
                    <MapPin size={16} class="text-terracotta-400" />
                    <span class="text-white/90 text-sm font-semibold tracking-widest uppercase">Barcelona</span>
                </div>
                
                <h1 class="text-4xl sm:text-5xl font-display font-bold text-white mb-2 leading-tight drop-shadow-lg">
                    {greeting},<br/>
                    <span class="text-terracotta-300">{profile}</span>.
                </h1>
                
                <p class="text-cream-100/90 font-medium text-lg mb-6 max-w-sm drop-shadow-md">
                    We've curated the perfect Mediterranean day for your exact vibe.
                </p>
                
                <!-- Weather / Sunset Widget -->
                <div class="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 w-max shadow-lg">
                    <div class="flex items-center gap-3 pr-4 border-r border-white/20">
                        <Sun size={24} class="text-amber-300" />
                        <div>
                            <div class="text-white font-bold leading-none mb-1">26°C</div>
                            <div class="text-white/70 text-xs font-medium">Sunny</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 pl-1">
                        <Sunset size={24} class="text-terracotta-400" />
                        <div>
                            <div class="text-white font-bold leading-none mb-1">20:45</div>
                            <div class="text-white/70 text-xs font-medium">Golden Hour</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="space-y-8 mt-10">
        <!-- Curated Collections -->
        <CategorySection 
            title="Your Perfect Matches" 
            subtitle="Highly recommended based on your unique travel personality."
            places={recommendedForYou} 
            showMatch={true} 
            userProfile={profile} 
        />

        <CategorySection 
            title="Trending Right Now" 
            subtitle="The spots everyone in Barcelona is talking about today."
            places={trendingSpots} 
            showMatch={false} 
        />

        <CategorySection 
            title="Locals Love This" 
            subtitle="Authentic experiences away from the tourist traps."
            places={localsLove} 
            showMatch={true} 
            userProfile={profile}
        />

        {#if sunsetSpots.length > 0}
            <CategorySection 
                title="Best Sunset Views" 
                subtitle="Where to be when the golden hour hits."
                places={sunsetSpots} 
                showMatch={false} 
            />
        {/if}

        {#if quietSpots.length > 0}
            <CategorySection 
                title="Quiet Right Now" 
                subtitle="Peaceful spots to escape the crowds."
                places={quietSpots} 
                showMatch={false} 
            />
        {/if}
    </div>
</div>

<style>
    @keyframes slowPan {
        0% { transform: scale(1.05) translate(0, 0); }
        100% { transform: scale(1.1) translate(-2%, 2%); }
    }
</style>
{/if}
