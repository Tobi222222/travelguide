<script lang="ts">
    import type { Place } from '$lib/data/mockData';
    import FavoriteButton from './FavoriteButton.svelte';
    import { MapPin, Star, Sparkles } from 'lucide-svelte';

    let { 
        place, 
        matchPercentage = null 
    } = $props<{
        place: Place;
        matchPercentage?: number | null;
    }>();
</script>

<a href="/place/{place.id}" class="group block relative rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-400 overflow-hidden">
    <!-- Image Area -->
    <div class="relative h-48 sm:h-56 w-full overflow-hidden">
        <img 
            src={place.image} 
            alt={place.title} 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
        />
        <!-- Gradient Overlay for better text readability if needed -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-60"></div>
        
        <!-- Top Tags -->
        <div class="absolute top-3 left-3 right-3 flex justify-between items-start">
            {#if matchPercentage}
                <div class="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 transform transition-transform group-hover:-translate-y-0.5">
                    <Sparkles size={14} class="text-terracotta-500" />
                    <span class="text-xs font-semibold text-terracotta-600">{matchPercentage}% Match</span>
                </div>
            {:else}
                <div class="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Star size={14} class="fill-amber-400 text-amber-400" />
                    <span class="text-xs font-semibold text-slate-700">{place.localScore.toFixed(1)}</span>
                </div>
            {/if}
            <FavoriteButton placeId={place.id} />
        </div>
    </div>

    <!-- Content Area -->
    <div class="p-4 sm:p-5">
        <div class="flex justify-between items-start mb-1">
            <h3 class="font-display font-semibold text-lg text-slate-800 leading-tight group-hover:text-terracotta-600 transition-colors">
                {place.title}
            </h3>
            <span class="text-slate-500 text-sm font-medium ml-2 shrink-0">{place.priceLevel}</span>
        </div>
        
        <div class="flex items-center gap-1 text-slate-500 mb-3 text-sm">
            <MapPin size={14} />
            <span class="capitalize">{place.category.replace('-', ' ')}</span>
        </div>

        <div class="flex flex-wrap gap-2">
            {#each place.tags.slice(0, 3) as tag}
                <span class="px-2.5 py-1 bg-cream-100 text-slate-600 text-xs rounded-lg font-medium">
                    {tag}
                </span>
            {/each}
        </div>
    </div>
</a>
