<script lang="ts">
    import { base } from '$app/paths';
    import type { Place } from '$lib/data/mockData';
    import ProgressiveImage from './ProgressiveImage.svelte';
    import FavoriteButton from './FavoriteButton.svelte';
    import { MapPin, Star, Sparkles, TrendingUp } from 'lucide-svelte';

    let { 
        place, 
        matchPercentage = null 
    } = $props<{
        place: Place;
        matchPercentage?: number | null;
    }>();
</script>

<a href="{base}/place/{place.id}" class="group block relative w-full rounded-3xl bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden active:scale-[0.98] transform-gpu">
    <!-- Cinematic Image Area -->
    <div class="relative aspect-[4/5] sm:aspect-[3/4] w-full">
        <ProgressiveImage 
            src={place.image} 
            alt={place.title} 
            fallbackSrc={place.fallbackSrc}
            className="group-hover:scale-110 transition-transform duration-1000 h-full w-full"
        >
            <!-- Stronger Gradient for Readability -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent transition-opacity duration-500 group-hover:opacity-80"></div>
            <div class="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-transparent"></div>
        </ProgressiveImage>

        <!-- Top Floating Badges -->
        <div class="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
            <div class="flex flex-col gap-2">
                {#if matchPercentage}
                    <div class="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform transition-transform group-hover:-translate-y-0.5">
                        <Sparkles size={14} class="text-terracotta-500" />
                        <span class="text-xs font-bold text-terracotta-700">{matchPercentage}% Match</span>
                    </div>
                {:else if place.trending}
                    <div class="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform transition-transform group-hover:-translate-y-0.5">
                        <TrendingUp size={14} class="text-rose-500" />
                        <span class="text-xs font-bold text-rose-600">Trending</span>
                    </div>
                {/if}
            </div>
            
            <FavoriteButton placeId={place.id} class="shadow-lg backdrop-blur-md bg-white/20 hover:bg-white/90 text-white hover:text-slate-800 transition-colors" />
        </div>

        <!-- Content Overlay -->
        <div class="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 z-10">
            <div class="flex items-center gap-1.5 text-white/90 mb-2 text-xs font-bold tracking-wider uppercase drop-shadow-sm">
                <MapPin size={12} class="text-terracotta-400" />
                <span>{place.category.replace('-', ' ')}</span>
                <span class="opacity-50 mx-0.5">•</span>
                <span>{place.priceLevel}</span>
                <span class="opacity-50 mx-0.5">•</span>
                <span class="flex items-center gap-0.5">
                    <Star size={12} class="fill-amber-400 text-amber-400" />
                    {place.localScore.toFixed(1)}
                </span>
            </div>
            
            <h3 class="font-display font-bold text-2xl sm:text-2xl text-white leading-tight mb-4 drop-shadow-lg group-hover:translate-x-1 transition-transform duration-500">
                {place.title}
            </h3>

            <!-- High Utility Tags -->
            <div class="flex flex-wrap gap-2">
                {#if place.localScore >= 9.5}
                    <span class="px-2.5 py-1 bg-amber-500 text-slate-900 text-[10px] uppercase tracking-tighter rounded-lg font-black shadow-lg">
                        World Class
                    </span>
                {/if}
                {#if place.vibeTags.includes('Local lifestyle')}
                    <span class="px-2.5 py-1 bg-emerald-500 text-white text-[10px] uppercase tracking-tighter rounded-lg font-black shadow-lg">
                        Local Favorite
                    </span>
                {:else if place.tags[0]}
                    <span class="px-2.5 py-1 bg-white/30 backdrop-blur-md text-white text-[10px] uppercase tracking-tighter rounded-lg font-bold border border-white/20">
                        {place.tags[0]}
                    </span>
                {/if}
                {#if place.editorialCollection}
                    <span class="px-2.5 py-1 bg-navy-900/60 backdrop-blur-md text-white text-[10px] uppercase tracking-tighter rounded-lg font-bold border border-white/10">
                        {place.editorialCollection}
                    </span>
                {/if}
            </div>
        </div>
    </div>
</a>
