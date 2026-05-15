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

<a href="{base}/place/{place.id}" class="group block relative w-full rounded-3xl bg-cream-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden active:scale-[0.98] transform-gpu">
    <!-- Cinematic Image Area -->
    <div class="relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[1/1] xl:aspect-[4/5] w-full">
        <ProgressiveImage 
            src={place.image} 
            alt={place.title} 
            fallbackSrc={place.fallbackSrc}
            className="group-hover:scale-110 transition-transform duration-1000"
        >
            <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 transition-opacity duration-500 group-hover:opacity-90"></div>
        </ProgressiveImage>

        <!-- Top Floating Badges -->
        <div class="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
            <div class="flex flex-col gap-2">
                {#if matchPercentage}
                    <div class="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform transition-transform group-hover:-translate-y-0.5">
                        <Sparkles size={14} class="text-terracotta-500" />
                        <span class="text-xs font-semibold text-terracotta-700">{matchPercentage}% Match</span>
                    </div>
                {:else if place.trending}
                    <div class="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform transition-transform group-hover:-translate-y-0.5">
                        <TrendingUp size={14} class="text-rose-500" />
                        <span class="text-xs font-semibold text-rose-600">Trending</span>
                    </div>
                {:else}
                    <div class="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                        <Star size={14} class="fill-amber-400 text-amber-400" />
                        <span class="text-xs font-bold text-slate-800">{place.localScore.toFixed(1)}</span>
                    </div>
                {/if}
            </div>
            
            <FavoriteButton placeId={place.id} class="shadow-lg backdrop-blur-md bg-white/20 hover:bg-white/90 text-white hover:text-slate-800" />
        </div>

        <!-- Bottom Content inside Image -->
        <div class="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 transform transition-transform duration-500">
            <div class="flex items-center gap-1.5 text-cream-100 mb-2 text-xs sm:text-sm font-medium tracking-wide uppercase">
                <MapPin size={14} />
                <span>{place.category.replace('-', ' ')}</span>
                <span class="opacity-50 mx-1">•</span>
                <span>{place.priceLevel}</span>
            </div>
            
            <h3 class="font-display font-bold text-2xl sm:text-3xl text-white leading-tight mb-3 drop-shadow-md">
                {place.title}
            </h3>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
                {#each place.tags.slice(0, 3) as tag}
                    <span class="px-3 py-1 bg-white/20 backdrop-blur-md text-white border border-white/10 text-xs rounded-xl font-medium shadow-sm transition-colors group-hover:bg-white/30">
                        {tag}
                    </span>
                {/each}
            </div>
        </div>
    </div>
</a>
