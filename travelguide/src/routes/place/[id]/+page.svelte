<script lang="ts">
    import { page } from '$app/state';
    import { mockPlaces, getMatchPercentage } from '$lib/data/mockData';
    import FavoriteButton from '$lib/components/FavoriteButton.svelte';
    import { getUserState } from '$lib/state/userStore.svelte';
    import { ChevronLeft, MapPin, Clock, CircleDollarSign, Sparkles, VolumeX, Flame } from 'lucide-svelte';
    import { fade, fly } from 'svelte/transition';

    const placeId = $derived(page.params.id);
    let place = $derived(mockPlaces.find(p => p.id === placeId));
    
    const userState = getUserState();
    let profile = $derived(userState?.userProfile || '');
    let matchPercentage = $derived(place ? getMatchPercentage(place, profile) : 0);
    let imageLoaded = $state(false);
    let currentSrc = $derived(place ? place.image : '');
    let imgError = $state(false);

    function handleImgError() {
        if (!imgError && place?.fallbackSrc) {
            imgError = true;
        }
    }
</script>

{#if place}
<div class="min-h-screen bg-cream-50 pb-24" in:fade={{duration: 500}}>
    <!-- Cinematic Edge-to-Edge Hero Image Area -->
    <div class="relative h-[45vh] md:h-[55vh] lg:h-[60vh] w-full bg-navy-900 rounded-b-[2.5rem] shadow-xl overflow-hidden">
        <img 
            src={imgError && place.fallbackSrc ? place.fallbackSrc : place.image} 
            alt={place.title} 
            class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 {imageLoaded ? 'opacity-100' : 'opacity-0'}"
            onload={() => imageLoaded = true}
            onerror={handleImgError}
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-navy-900/90"></div>
        
        <!-- Sticky Top Nav -->
        <div class="absolute top-0 left-0 right-0 p-4 md:p-6 pt-safe flex justify-between items-start z-30 transition-all duration-300 max-w-5xl mx-auto w-full">
            <button 
                onclick={() => history.back()}
                class="w-11 h-11 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white/40 transition-colors shadow-lg active:scale-95"
                aria-label="Go back"
            >
                <ChevronLeft size={28} />
            </button>
            <FavoriteButton placeId={place.id} class="bg-white/20 text-white backdrop-blur-xl hover:bg-white/40 shadow-lg w-11 h-11" />
        </div>
        
        <!-- Title & Badges -->
        <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12 z-10 max-w-5xl mx-auto w-full" in:fly={{y: 30, duration: 800, delay: 200}}>
            <div class="flex flex-wrap gap-2 mb-4">
                {#if matchPercentage > 85}
                    <span class="px-3 py-1.5 bg-white/90 text-terracotta-600 text-xs rounded-full font-bold backdrop-blur-md flex items-center gap-1 shadow-lg">
                        <Sparkles size={14} /> {matchPercentage}% Match
                    </span>
                {/if}
                {#if place.trending}
                    <span class="px-3 py-1.5 bg-rose-500/90 text-white text-xs rounded-full font-bold backdrop-blur-md flex items-center gap-1 shadow-lg">
                        <Flame size={14} /> Trending
                    </span>
                {/if}
            </div>
            <h1 class="text-4xl sm:text-5xl font-display font-bold text-white leading-tight drop-shadow-md">
                {place.title}
            </h1>
        </div>
    </div>

    <!-- Scrollable Content -->
    <div class="px-6 py-8 max-w-4xl mx-auto w-full" in:fly={{y: 20, duration: 600, delay: 400}}>
        
        <!-- Quick Info Bar -->
        <div class="flex gap-4 mb-10 overflow-x-auto no-scrollbar pb-2 -mx-2 px-2">
            <div class="flex items-center gap-2 bg-white rounded-2xl p-4 shadow-sm min-w-max border border-cream-200">
                <div class="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center text-terracotta-500">
                    <MapPin size={20} />
                </div>
                <div>
                    <div class="text-xs text-slate-400 font-medium uppercase tracking-wider">Category</div>
                    <div class="font-semibold text-slate-800 capitalize">{place.category.replace('-', ' ')}</div>
                </div>
            </div>
            
            <div class="flex items-center gap-2 bg-white rounded-2xl p-4 shadow-sm min-w-max border border-cream-200">
                <div class="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center text-terracotta-500">
                    <CircleDollarSign size={20} />
                </div>
                <div>
                    <div class="text-xs text-slate-400 font-medium uppercase tracking-wider">Price</div>
                    <div class="font-semibold text-slate-800">{place.priceLevel}</div>
                </div>
            </div>
            
            <div class="flex items-center gap-2 bg-white rounded-2xl p-4 shadow-sm min-w-max border border-cream-200">
                <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
                    <span class="font-bold text-lg leading-none">{place.localScore.toFixed(1)}</span>
                </div>
                <div>
                    <div class="text-xs text-slate-400 font-medium uppercase tracking-wider">Score</div>
                    <div class="font-semibold text-slate-800">Local Rating</div>
                </div>
            </div>
        </div>

        <!-- Emotional Description -->
        <div class="mb-10">
            <h2 class="text-2xl font-display font-bold text-navy-900 mb-4">The Experience</h2>
            <p class="text-slate-600 text-lg leading-relaxed font-medium">
                {place.description}
            </p>
        </div>

        <!-- Smart Discovery Insights -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            <div class="bg-gradient-to-br from-white to-cream-50 rounded-3xl p-6 shadow-sm border border-cream-200">
                <div class="flex items-center gap-2 mb-3 text-navy-800 font-display font-semibold">
                    <Clock size={20} class="text-terracotta-500" /> Best Time to Visit
                </div>
                <p class="text-slate-600 font-medium">{place.bestVisitingHours}</p>
                {#if place.sunsetTime}
                    <p class="text-sm text-terracotta-600 mt-2 flex items-center gap-1 font-semibold">
                        <Flame size={14} /> Sunset at {place.sunsetTime}
                    </p>
                {/if}
            </div>

            {#if place.isQuietNow}
            <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 shadow-sm border border-emerald-100">
                <div class="flex items-center gap-2 mb-3 text-emerald-800 font-display font-semibold">
                    <VolumeX size={20} class="text-emerald-600" /> Quiet Right Now
                </div>
                <p class="text-emerald-700 font-medium">Perfect time to visit without the crowds.</p>
            </div>
            {/if}
        </div>

        <!-- Why it matches you -->
        {#if profile && matchPercentage > 80}
        <div class="bg-gradient-to-r from-terracotta-500 to-terracotta-600 rounded-3xl p-6 sm:p-8 mb-10 shadow-lg relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 opacity-20">
                <Sparkles size={120} class="text-white" />
            </div>
            <div class="relative z-10">
                <h2 class="text-2xl font-display font-bold text-white mb-3">Perfect for you</h2>
                <p class="text-white/90 text-lg leading-relaxed font-medium">
                    As a <span class="font-bold underline decoration-white/50 underline-offset-4">{profile}</span>, this place perfectly matches your vibe with its {place.vibeTags.join(' and ').toLowerCase()} atmosphere.
                </p>
            </div>
        </div>
        {/if}

        <!-- Tags -->
        <div class="mb-12">
            <h2 class="text-xl font-display font-bold text-navy-900 mb-4">Vibe & Features</h2>
            <div class="flex flex-wrap gap-2.5">
                {#each place.tags as tag}
                    <span class="px-4 py-2 bg-white border border-cream-200 text-slate-700 text-sm rounded-xl font-semibold shadow-sm">
                        {tag}
                    </span>
                {/each}
                {#each place.vibeTags as tag}
                    <span class="px-4 py-2 bg-cream-100 text-terracotta-800 text-sm rounded-xl font-semibold shadow-sm">
                        {tag}
                    </span>
                {/each}
            </div>
        </div>

        <!-- Local Tip -->
        {#if place.localTip}
        <div class="bg-gradient-to-br from-amber-50 to-cream-50 rounded-3xl p-6 sm:p-8 mb-10 border border-amber-100 shadow-sm">
            <div class="flex items-start gap-3">
                <span class="text-2xl flex-shrink-0">💡</span>
                <div>
                    <h3 class="font-display font-bold text-amber-900 mb-2">Local Tip</h3>
                    <p class="text-amber-800 font-medium leading-relaxed">{place.localTip}</p>
                </div>
            </div>
        </div>
        {/if}

        <!-- District -->
        {#if place.district}
        <div class="mb-12">
            <h2 class="text-xl font-display font-bold text-navy-900 mb-4">Location</h2>
            <div class="bg-white rounded-2xl p-5 border border-cream-200 shadow-sm inline-flex items-center gap-3">
                <MapPin size={20} class="text-terracotta-500" />
                <span class="font-semibold text-slate-700">{place.district}, Barcelona</span>
            </div>
        </div>
        {/if}
    </div>
</div>
{:else}
<div class="min-h-screen flex items-center justify-center bg-cream-50">
    <div class="flex flex-col items-center gap-4">
        <div class="w-16 h-16 border-4 border-terracotta-200 border-t-terracotta-500 rounded-full animate-spin"></div>
        <p class="text-slate-500 font-medium">Loading destination...</p>
    </div>
</div>
{/if}
